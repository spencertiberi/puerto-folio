import { ProgressIndicator } from '@fluentui/react'
import styled from 'styled-components'
import React from 'react'

const StyledBar = styled(ProgressIndicator)`
  z-index: 100;
  width: 90vw;

  .progressTrack-64 {
    border-radius: 50px;
    background-color: ${(props) => props.theme.colors.greyScale.light};
  }
  .progressBar-65 {
    border-radius: 50px;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`
const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`

const ProgressBar = ({ percent }) => (
  <Container>
    <StyledBar
      barHeight={16}
      styles="border-radius: 30px;"
      percentComplete={percent}
    />
  </Container>
)

export default ProgressBar
