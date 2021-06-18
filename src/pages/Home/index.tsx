import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  MessageItem,
  NameCliente,
  Phone,
  Information,
} from './styles';

interface ResponseProps {
  created_at: string;
  updated_at: string;
  uuid: string;
  client: {
    uuid: string;
    created_at: string;
    updated_at: string;
    name: string;
    phone: string;
  };
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [received, setReceived] = useState<ResponseProps[]>([]);

  useEffect(() => {
    async function callMessagens() {
      const response = await api.get('help-desks/', {
        params: { organization: 'maik' },
      });

      setReceived(response.data);
    }

    callMessagens();
  }, [received]);

  return (
    <>
      <Header title="BotChat" />
      <Container>
        {received.map(msg => {
          return (
            <MessageItem
              onPress={() =>
                navigate('Message', {
                  params: {
                    name: msg.client.name,
                  },
                })
              }
              key={msg.uuid}
            >
              <Information>
                <NameCliente>{msg.client.name}</NameCliente>
                <Phone>Tel: {msg.client.phone}</Phone>
              </Information>
              <Information>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={18}
                  color="#000000"
                />
              </Information>
            </MessageItem>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
