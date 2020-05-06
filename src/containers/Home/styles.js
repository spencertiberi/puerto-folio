import styled from 'styled-components'

export const Bottom = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100vw;
  height: auto;
  max-height: 50vh;
`

export const HelpText = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.greyScale.offWhite};
  font-weight: 700;
  text-align: center;
  white-space: pre;
  word-wrap: normal;
  text-overflow: wrap;
  width: 205px;
  height: auto;
  margin-top: 35px;

  @media only screen and (min-height: 965px) {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const Image = styled.img`
  height: auto;
  width: 240px;
  margin: 35px 0 0 20px;
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
  margin: 40px 0 0 0;
  color: ${(props) => props.theme.colors.primary};
`

export const SubTitle = styled.h3`
  display: flex;
  font-size: 18px;
  padding: 0;
  margin: 15px 0 0 0;
  color: ${(props) => props.theme.colors.greyScale.dark};
`
