import React, { useState, useCallback } from 'react';
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons';

import Header from '../../components/Header';

import {
  Container,
  TextMessage,
  Scroll,
  Input,
  ViewInput,
  ButtonSend,
} from './styles';

const Message: React.FC = () => {
  const [message, setMessage] = useState('');
  const [sendMessage, setSendMessage] = useState('');

  const handleSend = useCallback(() => {
    setSendMessage(message);
    setMessage('');
  }, [message]);

  return (
    <>
      <Header title="Nome do Cliente" />
      <Container>
        <Scroll>
          <TextMessage>{sendMessage}</TextMessage>
        </Scroll>

        <ViewInput>
          <Input
            placeholder="Digite sua mensagem"
            value={message}
            onChangeText={value => setMessage(value)}
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
