import randomWords from  'random-words'

export default function randomHello(preffix) {
  return `${preffix} ${randomWords()} !!`
}

console.log(randomHello('Hola'))