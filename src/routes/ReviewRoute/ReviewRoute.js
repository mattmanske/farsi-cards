//-----------  Imports  -----------//

import Styled             from './styles'

import React              from 'react'
import PropTypes          from 'prop-types'
import { motion,
         useTransform,
         useMotionValue } from 'framer-motion'

import { colors }         from 'styles/variables'
import Elements           from 'components/PageElements'
import ReviewCard         from 'components/ReviewCard'

//-----------  Definitions  -----------//

const xInput     = [-100, 0, 100];
const quickInput = [-50, 0, 50];

const colorCSS           = [colors.red, colors.white, colors.green]
const opacityCSS         = ['1', '0', '1']
const transformOriginCSS = ['bottom 0%', 'bottom 50%', 'bottom 100%']
const transformCSS       = [
  'rotate(-25deg) scale(0.9) translateY(-20%)',
  'rotate(0deg) scale(1) translateY(0%)',
  'rotate(25deg) scale(0.9) translateY(-20%)'
]

//-----------  Component  -----------//

const ReviewRoute = ({ nextWord, currentWord, onCompletion, ...props }) => {
  const x = useMotionValue(0)

  const color           = useTransform(x, quickInput, colorCSS)
  const opacity         = useTransform(x, quickInput, opacityCSS)
  const transform       = useTransform(x, xInput, transformCSS)
  const transformOrigin = useTransform(x, xInput, transformOriginCSS)
  const crossPathA      = useTransform(x, [-5, -35], [0, 1])
  const crossPathB      = useTransform(x, [-30, -60], [0, 1])
  const tickPath        = useTransform(x, [5, 50], [0, 1])

  return (
    <Styled.ReviewRoute title='Review Route'>
      <Styled.CardWrapper>
          {nextWord &&
            <ReviewCard className='card background' word={nextWord} />
          }
          <motion.div style={{ x }} drag='x' dragConstraints={{ left: 0, right: 0 }}>
            <motion.div style={{ transform, transformOrigin }}>
              <ReviewCard className='card' word={currentWord} onCompletion={onCompletion}>
                <motion.div style={{ opacity }}>
                  <svg className='progress-icon' viewBox='0 0 50 50'>
                    <motion.path
                      fill='none'
                      strokeWidth='2'
                      stroke={color}
                      d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                      style={{ translateX: 5, translateY: 5 }}
                    />
                    <motion.path
                      fill='none'
                      strokeWidth='2'
                      stroke={color}
                      d='M14,26 L 22,33 L 35,16'
                      strokeDasharray='0 1'
                      style={{ pathLength: tickPath }}
                    />
                    <motion.path
                      fill='none'
                      strokeWidth='2'
                      stroke={color}
                      d='M17,17 L33,33'
                      strokeDasharray='0 1'
                      style={{ pathLength: crossPathA }}
                    />
                    <motion.path
                      fill='none'
                      strokeWidth='2'
                      stroke={color}
                      d='M33,17 L17,33'
                      strokeDasharray='0 1'
                      style={{ pathLength: crossPathB }}
                    />
                  </svg>
                </motion.div>
              </ReviewCard>
            </motion.div>
          </motion.div>
      </Styled.CardWrapper>
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
