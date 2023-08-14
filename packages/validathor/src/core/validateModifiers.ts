import type { Modifier } from '../types'

export const validateModifiers = (value: unknown, modifiers?: Modifier[]) => {
  // 🤷‍♂️ Idk why but I need to cast value to never to make it work
  // `error occured in dts build`
  modifiers?.forEach((arg) => arg.validate(value as never))
}
