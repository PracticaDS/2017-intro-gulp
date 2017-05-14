import randomWords from  'random-words'

export default function randomHello(preffix) {
  return `${preffix} ${randomWords({ exactly: 2, join: ' ' })} !!`
}

console.log(randomHello('Hola'))