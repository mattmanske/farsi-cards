//-----------  Imports  -----------//

import Styled             from './styles'

import React              from 'react'
import PropTypes          from 'prop-types'
import { motion,
         useTransform,
         useMotionValue } from 'framer-motion'

import Elements           from 'components/PageElements'
import ReviewCard         from 'components/ReviewCard'

//-----------  Definitions  -----------//

const xInput = [-100, 0, 100];

//-----------  Component  -----------//

const ReviewRoute = ({ nextWord, currentWord, onCompletion, ...props }) => {
  const x = useMotionValue(0)

  const background = useTransform(x, xInput, [
    'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
    'linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)',
    'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)'
  ])

  const transform = useTransform(x, xInput, [
    'rotate(-25deg) scale(0.9) translateY(-20%)',
    'rotate(0deg) scale(1) translateY(0%)',
    'rotate(25deg) scale(0.9) translateY(-20%)'
  ])

  const transformOrigin = useTransform(x, xInput, [
    'bottom 0%',
    'bottom 50%',
    'bottom 100%'
  ])

  const color = useTransform(x, xInput, [
    'rgb(211, 9, 225)',
    'rgb(68, 0, 255)',
    'rgb(3, 209, 0)'
  ])

  const tickPath = useTransform(x, [10, 100], [0, 1])
  const crossPathA = useTransform(x, [-10, -55], [0, 1])
  const crossPathB = useTransform(x, [-50, -100], [0, 1])

  return (
    <Styled.ReviewRoute title='Review Route'>
      <motion.div style={{ background }}>
        <Styled.CardWrapper>
            {nextWord &&
              <ReviewCard className='card background' word={nextWord} />
            }
            <motion.div style={{ x }} drag='x' dragConstraints={{ left: 0, right: 0 }}>
              <motion.div style={{ transform, transformOrigin }}>
                <ReviewCard className='card' word={currentWord} onCompletion={onCompletion} />
              </motion.div>
            </motion.div>
        </Styled.CardWrapper>
      </motion.div>
    </Styled.ReviewRoute>
  )
}

//-----------  Type Definitions  -----------//

ReviewRoute.propTypes = {
  nextWord     : PropTypes.object,
  currentWord  : PropTypes.object,
  onCompletion : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ReviewRoute
