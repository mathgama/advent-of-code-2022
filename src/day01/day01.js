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
  let result = 0
  let elfCalories = sumCaloriesByElf()

  elfCalories = elfCalories.sort((a, b) => b - a)

  for (let i = 0; i < 3; i += 1) {
    result += elfCalories[i]
  }

  console.log('-- Part Two --')
  console.log('Result: ', result)
}

partOne()
partTwo()
