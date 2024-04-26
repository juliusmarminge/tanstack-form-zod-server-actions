import { createFormFactory } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'

const validator = z.object({
  firstName: z.string().min(1),
  age: z.number().min(0),
})

export const formFactory = createFormFactory({
  defaultValues: {
    firstName: '',
    age: 0,
  },
  validators: {
    onSubmit: validator,
  },
  validatorAdapter: zodValidator,
  // onServerValidate: validator
})
