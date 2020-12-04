import { Validator, ValidationOptions } from '../validator';

const inputValidator: Validator<string> = (
  input, 
  inputName, 
  options
) => {

  const isRequired = options && options.isRequired;
  const verifyWith = options && options.verifyWith;
  const verifyWithRegex = options && options.verifyWithRegex;
  const shortMessage = options && options.shortMessage;
  const longMessage = options && options.longMessage;
  
  if (isRequired && input.length == 0) {
    return {
      isValid: false,
      shortMessage: shortMessage || 'required',
      longMessage: longMessage || `The ${inputName} input is required.`
    };
  }
  if (verifyWith && input != verifyWith) {
    return {
      isValid: false,
      shortMessage: shortMessage || 'not matching',
      longMessage
    };
  }
  if (verifyWithRegex && (!new RegExp(verifyWithRegex).test(input))) {
    return {
      isValid: false,
      shortMessage: shortMessage || `invalid input`,
      longMessage
    };
  }

  return {
    isValid: true
  };
}

export default inputValidator;
