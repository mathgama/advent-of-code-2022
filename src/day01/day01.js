import { readInput } from '../utils.js'

const input = readInput('./src/day01/input.txt')

const partOne = () => {
  let elfIndex = 0
  const elfCalories = [].fill(0)

  input.forEach((foodCalories) => {
    if (!foodCalories) elfIndex += 1
    if (!elfCalories[elfIndex]) elfCalories[elfIndex] = 0

    elfCalories[elfIndex] += +foodCalories
  })

  console.log('-- Part One --')
  console.log('Result: ', Math.max(...elfCalories))
}

partOne()
