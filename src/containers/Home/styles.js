import styled from 'styled-components'

export const Bottom = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -5;
  width: 100vw;
  @media only screen and (min-width: 500px) {
    display: none;
  }
`

export const HelpText = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.greyScale.offWhite};
  text-align: center;
  white-space: pre;
  word-wrap: normal;
  text-overflow: wrap;
  width: 205px;
  height: auto;
`

export const Image = styled.img`
  height: 279px;
  width: auto;
  padding: 0 0 25px 30px;

  @media only screen and (min-width: 500px) {
    padding: 0 0 0 30px;
  }
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
  margin: 45px 0 20px 0;
  color: ${(props) => props.theme.colors.primary};
`

export const SubTitle = styled.h3`
  display: flex;
  font-size: 18px;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.greyScale.dark};
`
