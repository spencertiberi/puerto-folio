import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  width: 100%;
`

export const RoleContainer = styled(Flex)`
  margin-top: 8px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  width: 100%;
`

export const Label = styled(Flex)`
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 8px;
`
