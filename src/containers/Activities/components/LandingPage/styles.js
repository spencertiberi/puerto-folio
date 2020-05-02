import styled from 'styled-components'

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  word-wrap: normal;
  text-overflow: wrap;
  width: auto;
  height: auto;
  margin-top: 25px;
`

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.greyScale.medium};
  text-align: center;
  word-wrap: normal;
  text-overflow: wrap;
  width: auto;
  height: auto;
  margin-top: 25px;
`

export const Image = styled.img`
  margin-top: 240px;
  height: auto;
  max-width: 375px;
`
