import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import questions from './questions'
import ProgressBar from './components/ProgressBar'
import PageWrapper from '../../../../components/PageWrapper'
import theme from '../../../../theme'
import Avatars from './components/Avatars'
import { BigNum, Prompt, SelectionCard, SelectionContainer } from './styles'

const count = 3

const Questions = ({ history }) => {
  const [currentQuestion, setQuestion] = useState(0)
  const [userChoice, setUserChoice] = useState('')
  const [friendChoice, setFriendChoice] = useState('')
  const [countDown, setCountDown] = useState(0)

  const user = 'You'
  const friend = 'Lousia'
  const userColor = theme.colors.secondary
  const friendColor = theme.colors.friend

  const startCountDown = () => {
    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1)
    }, 1000)
    const timeout = setTimeout(() => {
      clearInterval(interval)
    }, count * 1000)
    return () => clearTimeout(timeout)
  }

  const handleChoice = (option) => {
    setUserChoice(option)
    const randomChoice =
      questions[currentQuestion].selections[
        Math.floor(Math.random() * questions[currentQuestion].selections.length)
      ]
    setFriendChoice(randomChoice)
    setCountDown(count)
    startCountDown()

    const timeout = setTimeout(() => {
      setUserChoice('')
      if (currentQuestion <= questions.length - 2) {
        setQuestion((prev) => prev + 1)
      } else {
        history.push('/hashtags')
      }
    }, count * 1000)
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
            selectedColor={
              (option === friendChoice && friendColor) ||
              (option === userChoice && userColor)
            }
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
