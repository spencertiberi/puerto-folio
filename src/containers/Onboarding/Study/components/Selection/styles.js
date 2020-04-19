import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
  background-color: ${(props) => (props.selected ? '#eee' : '#fff')};
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`
export const Image = styled.img`
  height: 15px;
  width: 15px;
`
export const Title = styled.div`
  font-size: 1em;
`
