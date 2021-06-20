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
  Modal,
  UploadArchivo,
  ViewItens,
  ViewSup,
  ViewButtons,
  ButtonExitModal,
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
  const [chat, setChat] = useState<ResponseMessages[]>([]);
  const [chatIn, setChatIn] = useState<ResponseMessages[]>([]);
  const [visible, setVisible] = useState(false);

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

  const handleSendMessage = useCallback(async () => {
    if (message !== '') {
      const formData = new FormData();
      formData.append('message', `${message}`);
      formData.append('help_desk', `${props.route.params.params.uuid}`);

      await api.post('/send-message/', formData);

      setMessage('');
    }
  }, [message, props.route.params.params.uuid]);

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

  return (
    <>
      <Modal transparent visible={visible} animationType="slide">
        <UploadArchivo>
          <ViewItens>
            <ButtonExitModal onPress={() => setVisible(!visible)}>
              <MCI name="close-thick" size={15} color="#000000" />
            </ButtonExitModal>
            <ViewSup>
              <MCI name="image" size={45} color="#000000" />
              <MCI name="image" size={45} color="#000000" />
              <MCI name="image" size={45} color="#000000" />
            </ViewSup>
            <ViewSup>
              <MCI name="image" size={45} color="#000000" />
              <MCI name="image" size={45} color="#000000" />
              <MCI name="image" size={45} color="#000000" />
            </ViewSup>
          </ViewItens>
        </UploadArchivo>
      </Modal>
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
          <ViewButtons>
            <ButtonSend onPress={() => setVisible(!visible)}>
              <MCI name="paperclip" size={35} color="#0CAAE8" />
            </ButtonSend>
            <ButtonSend onPress={() => handleSendMessage()}>
              <MCI name="send-circle" size={51} color="#0CAAE8" />
            </ButtonSend>
          </ViewButtons>
        </ViewInput>
      </Container>
    </>
  );
};

export default Message;
