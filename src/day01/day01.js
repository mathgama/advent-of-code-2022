import { readInput } from '../utils.js'

const input = readInput('./src/day01/input.txt')

const sumCaloriesByElf = () => {
  let elfIndex = 0
  const elfCalories = [].fill(0)

  input.forEach((foodCalories) => {
    if (!foodCalories) elfIndex += 1
    if (!elfCalories[elfIndex]) elfCalories[elfIndex] = 0

    elfCalories[elfIndex] += +foodCalories
  })

  return elfCalories
}

const partOne = () => {
  const elfCalories = sumCaloriesByElf()

  console.log('-- Part One --')
  console.log('Result: ', Math.max(...elfCalories))
}

const partTwo = () => {
  let elfCalories = sumCaloriesByElf()

  elfCalories = elfCalories.sort((a, b) => b - a)

  const result = elfCalories
    .slice(0, 3)
    .reduce((sum, currentValue) => sum + currentValue, 0)

  console.log('-- Part Two --')
  console.log('Result: ', result)
}

partOne()
partTwo()
