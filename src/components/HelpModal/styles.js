import { Callout } from '@fluentui/react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Modal = styled(Callout)`
  padding: 10px;
`

export const Icon = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  font-size: 8px;
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
