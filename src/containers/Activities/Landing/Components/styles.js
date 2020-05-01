import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const ActivityCard = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

export const Title = styled(Flex)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
`

export const IconCircle = styled.img`
  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};
  border-radius: ${(props) => props.diameter};
`
