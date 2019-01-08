function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase())
  return logShout
}

function sayHiToGrandma(string) {
  console.log('hello')
  console.log('HELLO')
  console.log("I love you, Grandma.")
  return sayHiToGrandma
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
  return logWhisper
}
