import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const PageWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  padding: 12vh 4vw 8vh;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.offblack};
`

export default PageWrapper
