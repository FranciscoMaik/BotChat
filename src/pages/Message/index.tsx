import React, { useState, useCallback, useEffect } from 'react';
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  TextMessageReceived,
  TextMessageSend,
  Scroll,
  Input,
  ViewInput,
  ButtonSend,
  ViewReceived,
  ViewSend,
} from './styles';

interface ResponseMessages {
  created_at: string;
  help_desk: string;
  message: string;
  status: string;
  type: string;
  update_at: string;
  uuid: string;
}

const Message: React.FC = props => {
  const [message, setMessage] = useState('');
  const [sendMessage, setSendMessage] = useState(['']);
  const [chat, setChat] = useState<ResponseMessages[]>([]);
  const [chatIn, setChatIn] = useState<ResponseMessages[]>([]);

  // console.log(props.route.params.params.uuid);

  const orderItens = useCallback(() => {
    const newOrder = chat.sort(function (a, b) {
      if (a.created_at > b.created_at) {
        return 1;
      }
      if (a.created_at < b.created_at) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    setChatIn(newOrder);
  }, [chat]);

  useEffect(() => {
    async function handleRequestMessages() {
      const response = await api.get(
        `/help-desks/${props.route.params.params.uuid}/history/`,
      );

      setChat(response.data);
    }

    handleRequestMessages();
    orderItens();
  }, [props.route.params.params.uuid, orderItens]);

  const handleSend = useCallback(() => {
    setSendMessage([...sendMessage, message]);
    setMessage('');
  }, [message, sendMessage]);

  return (
    <>
      <Header title="Cliente" />
      <Container>
        <Scroll>
          {chatIn.map(msg => {
            if (msg.type === 'sent') {
              return (
                <ViewSend key={msg.uuid}>
                  <TextMessageSend>{msg.message}</TextMessageSend>
                </ViewSend>
              );
            }
            return (
              <ViewReceived key={msg.uuid}>
                <TextMessageReceived>{msg.message}</TextMessageReceived>
              </ViewReceived>
            );
          })}
        </Scroll>

        <ViewInput>
          <Input
            placeholder="Digite sua mensagem"
            value={message}
            onChangeText={value => setMessage(value)}
            multiline
          />
          <ButtonSend onPress={() => handleSend()}>
            <MCI name="send-circle" size={51} color="#0CAAE8" />
          </ButtonSend>
        </ViewInput>
      </Container>
    </>
  );
};

export default Message;
