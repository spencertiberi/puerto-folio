import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const PageWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  padding: 60px 16px 0;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.dark ? props.theme.colors.primary : '#ffffff'};
`

export default PageWrapper
