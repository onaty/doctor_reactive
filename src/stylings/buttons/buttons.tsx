import React from 'react'
import styled from 'styled-components/native'

import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontFamily } from '../typography/typography';
import { GeneralColor } from '../general/colors';

export const BlockBlueButton = styled.Button`
  backgroundColor: red;
  width:100%;
  height: ${verticalScale(50)}px;
  background: #1DA1F2;
border-radius: 3px;
color: ${GeneralColor.white};
`
export const TextButtonWhite = styled.Text`
font-family: ${FontFamily.OpenSansRegular400};
font-style: normal;
font-weight: bold;
font-size: ${scale(12)}px;
line-height: ${scale(14)}px;
text-align: center;

color: ${GeneralColor.solidgrey};
`
