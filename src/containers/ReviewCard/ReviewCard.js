//-----------  Imports  -----------//

import Styled             from './styles'

import React,
       { useState,
         useEffect }      from 'react'
import PropTypes          from 'prop-types'
import { motion,
         useSpring,
         useTransform,
         useMotionValue } from 'framer-motion'
import { get }            from 'lodash';

import { colors }         from 'styles/variables'

//-----------  Definitions  -----------//

const maxBound = 100
const minBound = -100

const xInput     = [minBound, 0, maxBound];
const quickInput = [minBound / 2, 0, maxBound / 2];

const colorCSS           = [colors.red, colors.white, colors.green]
const opacityCSS         = ['1', '0', '1']
const transformOriginCSS = ['bottom 0%', 'bottom 50%', 'bottom 100%']
const transformCSS       = [
    'rotate(-25deg) scale(0.9) translateY(-20%)',
    'rotate(0deg) scale(1) translateY(0%)',
    'rotate(25deg) scale(0.9) translateY(-20%)'
]

//-----------  Component  -----------//

const ReviewCard = ({ word, order, result, onSuccess, onFailure }) => {

    const [flipped, flipCard]         = useState(false)
    const [hasFlipped, setHasFlipped] = useState(false)
    const [hasDecision, setDecision]  = useState(false);

    const canDrag = (!order && hasFlipped)

    const init = useMotionValue(0)
    const x = useSpring(init, { mass: 0.5, damping: 50 })

    useEffect(() => {
        if (hasDecision) return

        if (1 === result) {
            x.stop()
            x.set(800)
            setDecision(true)
        }

        if (0 === result) {
            x.stop()
            x.set(-800)
            setDecision(true)
        }
    }, [result])

    const color           = useTransform(x, quickInput, colorCSS)
    const opacity         = useTransform(x, quickInput, opacityCSS)
    const transform       = useTransform(x, xInput, transformCSS)
    const transformOrigin = useTransform(x, xInput, transformOriginCSS)
    const crossPathA      = useTransform(x, [-5, -35], [0, 1])
    const crossPathB      = useTransform(x, [-30, -60], [0, 1])
    const tickPath        = useTransform(x, [5, 50], [0, 1])

    function handleFlip() {
        flipCard(!flipped)
        setHasFlipped(true)
    }

    function handleDragEnd(event, info) {
        if (get(info, 'point.x') > maxBound / 2) return onSuccess()
        if (get(info, 'point.x') < minBound / 2) return onFailure()
    }

    return (
        <Styled.ReviewCard className='card' order={order}>
            <motion.div style={{ x }} drag={canDrag && 'x'} dragConstraints={{ left: 0, right: 0 }} onDragEnd={handleDragEnd}>
                <motion.div style={{ transform, transformOrigin }} onTap={handleFlip}>
                    <Styled.CardWrapper flipped={flipped}>
                        <Styled.FrontSide>
                            <Styled.WordWrapper>
                                {word && word.english}
                            </Styled.WordWrapper>
                        </Styled.FrontSide>
                        <Styled.BackSide>
                            <Styled.WordWrapper>
                                <Styled.Farsi>{word && word.farsi}</Styled.Farsi>
                                <br />
                                <small><em>({word && word.phonetic})</em></small>
                            </Styled.WordWrapper>
                        </Styled.BackSide>
                    </Styled.CardWrapper>
                    <Styled.Status>
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
                    </Styled.Status>
                </motion.div>
            </motion.div>
            {(order < 0) && <Styled.Overlay order={order} />}
        </Styled.ReviewCard>
    )
}

//-----------  Type Definitions  -----------//

ReviewCard.propTypes = {
    word         : PropTypes.object,
    order        : PropTypes.number,
    onCompletion : PropTypes.func,
}

//-----------  Export  -----------//

export default ReviewCard
