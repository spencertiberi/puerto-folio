import React, { useState } from 'react'
import styled from 'styled-components'
import PageWrapper from '../../../../components/PageWrapper'
import Input from '../../../../components/Form'
import Button from '../../../../components/LinkButton'
import Heading from '../../components/Heading'
import Hashtag from './components/Hashtag'
import { Container, HashtagContainer, Prompt } from './styles'

const StyledHeading = styled(Heading)`
  margin-bottom: 25px;
`

const Hashtags = () => {
  const [currHashtag, setCurrHashtag] = useState('')
  const [hashtags, setHashtags] = useState([])

  const handleEnter = (e) => {
    console.log(hashtags)
    if (
      currHashtag &&
      currHashtag.match(/^ *$/) === null &&
      e.key === 'Enter'
    ) {
      setHashtags((prevHashtags) => [...prevHashtags, currHashtag])
      setCurrHashtag('')
    }
  }
  return (
    <PageWrapper dark>
      <Container>
        <StyledHeading>Now reflect...</StyledHeading>
        <Prompt>
          <li>
            What do the items that you and your friend agreed on suggest about
            your strengths and weaknesses in terms of interpersonal skills?
          </li>
        </Prompt>
        <StyledHeading>
          Then, create some hashtags about those skills.
        </StyledHeading>
        <Input
          type="text"
          placeholder="Enter hashtag here..."
          value={currHashtag}
          update={setCurrHashtag}
          onKeyPress={(e) => handleEnter(e)}
        />
        <HashtagContainer>
          {hashtags.map((hashtag) => (
            <Hashtag
              key={hashtag}
              hashtag={hashtag}
              hashtags={hashtags}
              updateHashtags={setHashtags}
            />
          ))}
        </HashtagContainer>
      </Container>
      {hashtags.length !== 0 && <Button to="/fin">CONTINUE</Button>}
    </PageWrapper>
  )
}

export default Hashtags
