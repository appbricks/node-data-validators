import { Validator } from '../validator';
import inputValidator from '../common/inputValidator';

const usernameValidator: Validator<string> = (
  username, 
  inputName = 'username', 
  options
) => {

  const result = inputValidator(username, inputName, options);
  if (result.isValid) {

    if (username.length < 3) {
      return {
        isValid: false,
        shortMessage: 'too short',
        longMessage: `The ${inputName} must be at least 3 characters long.`
      };
    }
  }

  return result;
}

export default usernameValidator;
