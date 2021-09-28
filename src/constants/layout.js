import styled from 'styled-components/native';
import {View, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Sizes = {
  small: 5,
  medium: 10,
  large: 20,
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const getVariant = (position, size) => `margin-${position}: ${sizes[size]}`;
const Spacer = styled.View`
  ${({position = 'top', size = 'small'}) => getVariant(position, size)}
`;

export {Sizes, width, height, Spacer, Container};
