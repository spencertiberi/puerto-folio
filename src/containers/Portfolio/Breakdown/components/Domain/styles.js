import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '@rebass/grid'

export const Circle = styled(Flex)`
  width: 124px;
  height: 124px;
  border-radius: 124px;
  background-color: ${(props) =>
    props.theme.colors.portfolio[props.color].light};
  align-items: center;
  justify-content: center;
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;
`

export const Title = styled(Flex)`
  font-size: 16px;
  line-height: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primary};
`

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => props.offset};
  text-decoration: none;
`
