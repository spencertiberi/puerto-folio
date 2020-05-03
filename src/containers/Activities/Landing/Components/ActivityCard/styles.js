import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { Link } from 'react-router-dom'

export const Title = styled(Flex)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  margin-top: 16px;
  text-align: center;
`

export const IconCircle = styled.img`
  width: ${(props) => props.diameter || '100px'};
  height: auto;
`

export const Container = styled(Link)`
  display: flex;
  width: ${(props) => props.diameter || '100px'};
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-right: 15px;
`
