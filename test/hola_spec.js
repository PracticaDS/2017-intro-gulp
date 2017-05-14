import hola from '../src/hola'
import { expect } from 'chai'

describe('hola', () => {

  it('should generate a string starting with the preffix', () => {
    expect(hola('aloha')).to.match(/^aloha.*!/)
  })

})