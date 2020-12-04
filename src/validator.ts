// validator function signature
export type Validator<T> = (
  input: T, 
  inputName: string,
  options?: ValidationOptions
) => ValidationResult;

// validation options
export type ValidationOptions = { [key: string]: string } | {
  isRequired?: boolean

  verifyWith?: string
  verifyWithRegex?: string

  formatMask?: string
  formattedValue?: string

  shortMessage?: string
  longMessage?: string 
}

// validation result
export interface ValidationResult {
  isValid: boolean
  shortMessage?: string
  longMessage?: string
}
