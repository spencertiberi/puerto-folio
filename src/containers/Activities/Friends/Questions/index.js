import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import questions from './questions'
import ProgressBar from './components/ProgressBar'
import PageWrapper from '../../../../components/PageWrapper'
import theme from '../../../../theme'
import Avatars from './components/Avatars'
import { BigNum, Prompt, SelectionCard, SelectionContainer } from './styles'

const count = 3

const Questions = ({ history, name }) => {
  const [currentQuestion, setQuestion] = useState(0)
  const [userChoice, setUserChoice] = useState('')
  const [friendChoice, setFriendChoice] = useState('')
  const [countDown, setCountDown] = useState(0)

  const user = name
  const friend = 'Louisa'
  const userColor = theme.colors.secondary
  const friendColor = theme.colors.friend

  const changeToFriendColor = (randomChoice) => {
    const timeout = setTimeout(() => {
      setFriendChoice(randomChoice)
    }, 1000)
    return () => clearTimeout(timeout)
  }

  const startCountDown = () => {
    setCountDown(count)
    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1)
    }, 1000)
    const timeout = setTimeout(() => {
      clearInterval(interval)
      setUserChoice('')
      if (currentQuestion <= questions.length - 2) {
        setQuestion((prev) => prev + 1)
      } else {
        history.push('/hashtags')
      }
      setCountDown(0)
    }, count * 1000)
    return () => clearTimeout(timeout)
  }

  const handleChoice = async (option) => {
    setUserChoice(option)
    const randomChoice =
      questions[currentQuestion].selections[
        Math.floor(Math.random() * questions[currentQuestion].selections.length)
      ]

    changeToFriendColor(randomChoice)

    const timeout = setTimeout(() => startCountDown(), 3000)
    return () => clearTimeout(timeout)
  }

  return (
    <PageWrapper dark>
      <ProgressBar percent={(currentQuestion + 1) / (questions.length + 1)} />
      <Avatars user={user} friend={friend} />
      <Prompt>{questions[currentQuestion].prompt}</Prompt>
      {countDown > 0 && <BigNum>{countDown}</BigNum>}
      <SelectionContainer>
        {questions[currentQuestion].selections.map((option) => (
          <SelectionCard
            userSelect={option === userChoice}
            userColor={userColor}
            friendColor={friendColor}
            friendSelect={option === friendChoice}
            key={option}
            onClick={() => !userChoice && handleChoice(option)}
          >
            {option}
          </SelectionCard>
        ))}
      </SelectionContainer>
    </PageWrapper>
  )
}

export default withRouter(Questions)
