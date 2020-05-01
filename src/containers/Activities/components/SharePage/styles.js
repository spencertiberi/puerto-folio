import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.primary};
`

export const Heading = styled(Flex)`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  word-wrap: normal;
  text-overflow: wrap;
  width: auto;
  height: auto;
  margin-top: 25px;
`

export const LinkBox = styled(Flex)`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.greyScale.dark};
  padding: 8px;
  width: 340px;
  height: auto;
  margin-top: 30px;
`

export const SocialMedia = styled(Flex)`
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`

export const SocialIcon = styled.img`
  height: 50px;
  width: 50px;
`
