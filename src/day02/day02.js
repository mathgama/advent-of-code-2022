import { readInput } from '../utils.js'

const input = readInput('./src/day02/input.txt')

const outcome = {
  Loose: 0,
  Draw: 1,
  Win: 2,
}

const playValue = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
}

const calculateRoundOutcome = (opponentPlay, ownPlay) => {
  const opponentValue = playValue[opponentPlay]
  const ownValue = playValue[ownPlay]
  const diffValue = ownValue - opponentValue

  if (diffValue === 0) return outcome.Draw
  if (diffValue === 1 || diffValue === -2) return outcome.Win
  return outcome.Loose
}

const partOne = () => {
  let result = 0

  input.forEach((round) => {
    const [opponentPlay, ownPlay] = round.split(' ')
    const roundOutcome = calculateRoundOutcome(opponentPlay, ownPlay)
    const roundPoints = roundOutcome * 3 + playValue[ownPlay]

    result += roundPoints
  })

  console.log('-- Part One --')
  console.log('Result: ', result)
}

partOne()
