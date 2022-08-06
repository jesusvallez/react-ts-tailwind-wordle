const generateRandomDecimal = (min: number, max: number, places: number) => {
  const value = Math.random() * (max - min) + min
  return +Number.parseFloat(`${value}`).toFixed(places)
}

export { generateRandomDecimal }
