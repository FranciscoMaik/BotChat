import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e6f5ff;
`;

export const Scroll = styled.ScrollView`
  margin-bottom: 15px;
`;

export const ViewSend = styled.View`
  width: 98%;
  align-items: flex-end;
`;

export const TextMessageSend = styled.Text`
  color: #ffffff;
  font-weight: 700;
  font-size: 19px;
  background-color: #0caae8;
  width: 45%;
  margin-top: 15px;
  margin-left: 10px;
  padding: 8px;
  border-radius: 8px;
`;

export const ViewReceived = styled.View`
  width: 98%;
`;

export const TextMessageReceived = styled.Text`
  color: #ffffff;
  font-weight: 700;
  font-size: 19px;
  background-color: #b2d3ec;
  width: 45%;
  margin-top: 15px;
  margin-left: 10px;
  padding: 8px;
  border-radius: 8px;
`;
// mensagens recebidas #b2d3ec

export const ViewInput = styled.View`
  height: 51px;
  border-width: 1px;
  border-color: #000000;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 3px;
  justify-content: center;
  width: 98%;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5px;
`;

export const Input = styled.TextInput`
  padding-left: 15px;
  font-size: 19px;
  width: 67%;
`;

export const ButtonSend = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
`;

// Modal
export const Modal = styled.Modal``;

export const UploadArchivo = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: flex-end;
`;

export const ButtonExitModal = styled.TouchableOpacity`
  width: 15px;
`;

export const ViewItens = styled.View`
  height: 30%;
  width: 100%;
  background-color: #ffffff;
  padding: 15px;
`;

export const ViewSup = styled.View`
  width: 100%;
  height: 50%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonRead = styled.TouchableOpacity``;
