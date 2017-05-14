import randomWords from  'random-words'

function randomHello(preffix) {
  return `${preffix} ${randomWords()}`
}

console.log(randomHello('Hola'))