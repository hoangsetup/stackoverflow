function getColor() {
  return "black"
}

function getInfo() {
  const color = getColor()
  const size = "L"
  return `${color}-${size}`
}

module.exports = { getColor, getInfo }
