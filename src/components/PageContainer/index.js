import styled from 'styled-components'

const PageContainer = styled.div`
  padding: 15vh 4vw 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.offblack};
`

export default PageContainer
