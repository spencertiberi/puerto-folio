import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Prompt = styled.ul`
  color: #ffffff;
  font-size: 16px;
  line-height: 19px;
  margin: 0 0 20px 0;
  padding: 0 7vw;
`
export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

export const HashtagContainer = styled(Flex)`
  margin-top: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  width: 100%;
`
