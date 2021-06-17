import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import {
  Container,
  MessageItem,
  NameCliente,
  Phone,
  Information,
} from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <Header title="BotChat" />
      <Container>
        <MessageItem onPress={() => navigate('Message')}>
          <Information>
            <NameCliente>Cliente X</NameCliente>
            <Phone>Phone: 123</Phone>
          </Information>
          <Information>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#000000"
            />
          </Information>
        </MessageItem>
      </Container>
    </>
  );
};

export default Home;
