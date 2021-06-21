import React, { useState, useCallback, useEffect } from 'react';
import { MaterialCommunityIcons as MCI } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

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
  ButtonRead,
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

  const handleSendMessage = useCallback(async (msg, help) => {
    if (msg !== '') {
      const formData = new FormData();
      formData.append('message', `${msg}`);
      formData.append('help_desk', `${help}`);

      await api.post('/send-message/', formData);

      setMessage('');
    }
  }, []);

  const pickerImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    handleSendMessage(result.uri, props.route.params.params.uuid);
  };

  const documentoPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
    });

    handleSendMessage(result.name, props.route.params.params.uuid);
  };

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

  return (
    <>
      <Modal transparent visible={visible} animationType="slide">
        <UploadArchivo>
          <ViewItens>
            <ButtonExitModal onPress={() => setVisible(!visible)}>
              <MCI name="close-thick" size={15} color="#000000" />
            </ButtonExitModal>
            <ViewSup>
              <ButtonRead onPress={() => pickerImage()}>
                <MCI name="image" size={45} color="#000000" />
              </ButtonRead>
              <ButtonRead onPress={() => documentoPicker()}>
                <MCI name="file-document-outline" size={45} color="#000000" />
              </ButtonRead>
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
            <ButtonSend
              onPress={() =>
                handleSendMessage(message, props.route.params.params.uuid)
              }
            >
              <MCI name="send-circle" size={51} color="#0CAAE8" />
            </ButtonSend>
          </ViewButtons>
        </ViewInput>
      </Container>
    </>
  );
};

export default Message;
