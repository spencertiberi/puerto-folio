import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const LittleButton = styled(Flex)`
  background-color: ${(props) =>
    props.href
      ? props.theme.colors.secondary
      : props.theme.colors.greyScale.light};
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-decoration: none;
  font-weight: 900;
  border: 0;
  border-radius: 3px;
  padding: 4px 15px;
  height: auto;
  width: 67px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`

export const Label = styled(Flex)`
  font-size: 20px;
  font-weight: bold;
  width: 100px;
`

export const Container = styled(Flex)`
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`
