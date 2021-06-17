import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e6f5ff;
`;

export const Scroll = styled.ScrollView`
  margin-bottom: 15px;
`;

export const TextMessage = styled.Text`
  color: #000000;
  font-weight: 700;
  font-size: 23px;
`;

export const ViewInput = styled.View`
  height: 51px;
  border-width: 1px;
  border-color: #000000;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 3px;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  padding-left: 15px;
  font-size: 19px;
`;

export const ButtonSend = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
