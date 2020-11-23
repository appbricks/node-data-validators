import { Validator, ValidationOptions } from '../validator';

const inputValidator: Validator<string> = (
  input, 
  inputName, 
  options
) => {

  const isRequired = options && options.isRequired;
  const verifyWith = options && options.verifyWith;
  const verifyWithName = options && options.verifyWithName;
  
  if (isRequired && input.length == 0) {
    return {
      isValid: false,
      shortMessage: 'required',
      longMessage: `The ${inputName} input is required.`
    };
  }
  if (verifyWith && input != verifyWith) {
    return {
      isValid: false,
      shortMessage: 'not matching',
      longMessage: `The ${inputName} input does not match the ${verifyWithName} you entered.`
    };
  }

  return {
    isValid: true
  };
}

export default inputValidator;
