// Code your solution in this file!
const startingPoint = 42
const feetInBlock = 264

function distanceFromHqInBlocks (block) {
  if (block < startingPoint) {
    return (startingPoint - block)
  }
  else {
    return block - startingPoint
  }}
  
  function distanceFromHqInFeet (block) {
      if (block < startingPoint) {
    return (startingPoint - block) * feetInBlock
  }
  else {
    return (block - startingPoint) * feetInBlock
  }}
  
  function distanceTravelledInFeet (start,end) {
      if (start < end) {
    return (end - start) * feetInBlock
  }
  else {
    return (start - end) * feetInBlock
  }}

function calculatesFarePrice(start, end) {
  const feetTraveled = distanceTravelledInFeet(start,end)
  if (feetTraveled <= 400) {
    return 0 
  } else if (400 < feetTraveled < 2000) {
    return (feetTraveled - 400) * 0.02
  } else if (2000 < feetTraveled < 2500) {
    return 25
  } else if 
}
  