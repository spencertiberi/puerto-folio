import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 10px 4vw;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.offblack};
`

export default PageWrapper
