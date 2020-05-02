import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Text = styled.div`
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  word-wrap: normal;
  text-overflow: wrap;
  max-width: 325px;
  height: auto;
`

export const Container = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const ImageContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-top: 150px;
`

export const Image = styled.img`
  width: 250px;
  height: auto;
`
