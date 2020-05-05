import { Callout } from '@fluentui/react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Modal = styled(Callout)`
  padding: 10px;
`

export const Icon = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.greyScale.medium};
  color: #ffffff;
`

export const Container = styled.div`
  vertical-align: top;
  display: inline-block;
  text-align: center;
  width: auto;
  height: auto;
  padding-left: 10px;
`
