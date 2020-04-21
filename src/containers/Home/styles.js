import styled from 'styled-components'

export const Bottom = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -1;
`

export const Image = styled.img`
  height: 279px;
  width: auto;
  padding: 0 0 200px 30px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  display: flex;
  font-size: 48px;
  padding: 0;
  margin: 0 0 20px 0;
  color: ${(props) => props.theme.colors.primary};
`

export const SubTitle = styled.h3`
  display: flex;
  font-size: 18px;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.greyScale.dark};
`
