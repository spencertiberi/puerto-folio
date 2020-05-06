import styled, { keyframes, css } from 'styled-components'
import { Flex } from '@rebass/grid'

const friendSelection = keyframes`
  from {
  }

  to {
    background-color: #00BD40;
  }
`

export const SelectionCard = styled(Flex)`
  width: 90vw;
  height: 65px;
  max-width: 400px;
  background-color: ${(props) =>
    props.userSelect ? props.userColor : '#ffffff'};
  color: ${(props) =>
    props.userSelect || props.friendSelect
      ? '#ffffff'
      : props.theme.colors.primary};
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 5px 15px;
  animation: ${(props) =>
    props.friendSelect &&
    css`
      ${friendSelection} 1s forwards
    `};
`

export const Prompt = styled(Flex)`
  color: #ffffff;
  white-space: pre-wrap;
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 200px;
`

export const SelectionContainer = styled(Flex)`
  flex-direction: column;
  position: fixed;
  bottom: 10px;
`

export const BigNum = styled(Flex)`
  position: absolute;
  z-index: 150;
  font-size: 120px;
  font-weight: bold;
  width: 100vw;
  height: auto;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  top: 280px;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.yellow};

  @media only screen and (min-width: 500px) {
    text-shadow: 0 0 50px #ffda2d;
  }
`
