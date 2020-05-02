import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
  width: 100%;
  height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
`

const Text = styled(Flex)`
  padding-left: 8px;
  font-size: 9px;
  font-weight: 700;
  color: #ffffff;
`

const X = styled(Flex)`
  font-size: 9px;
  color: ${(props) => props.theme.colors.greyScale.dark};
`

const Hashtag = ({ hashtag, hashtags, updateHashtags }) => {
  const removeHashtag = (item) => {
    _.pull(hashtags, item)
    updateHashtags(hashtags)
  }
  return (
    <Container onClick={() => removeHashtag(hashtag)}>
      <X>&#10005;</X>
      <Text>{hashtag}</Text>
    </Container>
  )
}

export default Hashtag
