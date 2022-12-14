import { readFileSync } from 'fs'

export const readInput = (filepath) => {
  const text = readFileSync(filepath, 'utf-8')
  return text.split('\n')
}

export const convertLinesToNumeric = (input) => input.map((el) => +el)
