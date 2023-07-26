import { assert } from './assert'

const ERROR_MESSAGE = 'Error message'

describe('assert', () => {
  it('should throw an error if invalid value', () => {
    expect(() => assert(false, ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE)
    expect(() => assert(0, ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE)
    expect(() => assert('', ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE)
    expect(() => assert(null, ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE)
    expect(() => assert(undefined, ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE)
    expect(() => assert(() => false, ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE)
  })

  it('should not throw an error if valid value', () => {
    expect(() => assert(true, ERROR_MESSAGE)).not.toThrowError()
    expect(() => assert(10, ERROR_MESSAGE)).not.toThrowError()
    expect(() => assert('hello', ERROR_MESSAGE)).not.toThrowError()
    expect(() => assert(() => true, ERROR_MESSAGE)).not.toThrowError(ERROR_MESSAGE)
  })
})
