import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e6f5ff;
  align-items: center;
`;

export const MessageItem = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  background-color: #ffffff;
  padding: 10px;
  margin-top: 29px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
`;

export const Information = styled.View`
  justify-content: center;
`;

export const NameCliente = styled.Text`
  font-weight: 700;
  font-size: 19px;
`;

export const Phone = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const ViewSuper = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
`;
