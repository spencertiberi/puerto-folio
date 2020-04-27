import React from 'react'
import styled from 'styled-components'
import littledude from './littledude.png'

const Image = styled.img`
  position: absolute;
  width: auto;
  height: 237.3px;
  right: 0;
  top: 238px;
`

const LittleDude = () => <Image src={littledude} />

export default LittleDude
