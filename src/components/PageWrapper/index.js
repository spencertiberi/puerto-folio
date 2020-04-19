import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.offblack};
`

export default PageWrapper
