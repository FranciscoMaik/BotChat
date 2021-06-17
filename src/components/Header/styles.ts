import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 51px;
  background-color: #0caaeb;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: ${StatusBar.currentHeight};
`;

export const Title = styled.Text`
  font-weight: 700;
  color: #ffffff;
  font-size: 19px;
`;
