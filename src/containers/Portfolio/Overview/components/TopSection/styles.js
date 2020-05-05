import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '@rebass/grid'

const press = keyframes`
  from {
    transform: translate(0, 0);
    box-shadow: 0 4px;
  }

  to {
    transform: translate(0, 4px);
    box-shadow: 0 0;
  }
`

export const Container = styled(Flex)`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 365px;
  width: 100vw;
  padding-top: 65px;
  margin-bottom: 25px;
`

export const Background = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: -50;
`

export const SkillContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
`

export const IconCircle = styled(Flex)`
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.theme.colors.portfolio[props.color].regular};
  border-radius: 80px;
  box-shadow: 0 4px ${(props) => props.theme.colors.portfolio[props.color].dark};
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  :hover {
    box-shadow: inherit;
    animation: 0.5s ${press} infinite;
    animation-direction: alternate;
  }
`

export const IconImage = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
`

export const Row = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Flex)`
  font-size: 11px;
  line-height: 13px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  justify-content: center;
  width: 120px;
`

export const UserImage = styled.img`
  display: flex;
  width: 97px;
  height: 97px;
  margin: 0 5vw;
`
