import React, { useState } from 'react'
import { Container, Icon, Modal } from './styles'

const HelpModal = ({ text, children }) => {
  const [display, setDisplay] = useState(false)

  const toggleDisplay = () => {
    setDisplay((previousDisplay) => !previousDisplay)
  }

  return (
    <>
      <Container className="HelpContainer">
        <Icon onClick={() => toggleDisplay()}>?</Icon>
      </Container>
      {display && (
        <Modal
          target=".HelpContainer"
          setInitialFocus
          gapSpace={0}
          onClick={() => toggleDisplay()}
        >
          {text}
          {children}
        </Modal>
      )}
    </>
  )
}

export default HelpModal
