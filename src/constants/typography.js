import styled from 'styled-components/native';
import {Text} from 'react-native';

const sizes = {
  small: '20px',
  medium: '30px',
  large: '50px',
};

const getDefaults = () => `
font-family: Montserrat-Bold;
`;

export const Title = styled.Text`
  ${({color}) => `color: ${color}`};
  ${({size}) => `font-size: ${sizes[size]}`}
  ${() => getDefaults()};
`;

export const DefaultText = styled.Text`
  font-size: 18px;
  font-family: Montserrat-Regular;
`;

export const Heading = styled.Text`
  font-size: 30px;
  font-family: Montserrat-Bold;
  text-transform: capitalize;
`;

export const SubHeading = styled.Text`
  font-size: 20px;
  font-family: Montserrat-Bold;
  text-transform: capitalize;
`;
