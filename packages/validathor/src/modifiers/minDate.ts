import { assert } from '../utils/assert'
import { TypeError } from '../utils/errors'

export type MinDate = {
  name: 'minDate'
  validate: (value: Date) => Date
}

export const minDate = (
  date: Date,
  message?: {
    type_error?: string
    error?: string
  },
): MinDate => {
  return {
    name: 'minDate',
    validate: (value: Date) => {
      // Type checks
      assert(date instanceof Date, new TypeError(message?.type_error || 'Expected a date'))
      assert(value instanceof Date, new TypeError(message?.type_error || 'Expected a date'))

      // Validation checks
      assert(value.valueOf() >= date.valueOf(), message?.error || 'Minimum value not met')

      return value
    },
  }
}
