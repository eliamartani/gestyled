import React from 'react';
import styled from 'styled-components';
import withStyle from './Base';

const StyledSubheading = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[2]}px;
`;

const Subheading = props => <StyledSubheading {...props} />;

export default withStyle(Subheading);
