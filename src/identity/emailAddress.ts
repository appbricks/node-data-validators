import { Validator } from '../validator';
import inputValidator from '../common/inputValidator';

const emailAddressValidator: Validator<string> = (
  emailAddress, 
  inputName = 'email address', 
  options
) => {

  const result = inputValidator(emailAddress, inputName, options);
  if (result.isValid) {
    
    let emailFormatCheck = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailFormatCheck.test(emailAddress)) {
      return {
        isValid: false,
        shortMessage: 'invalid',
        longMessage: `"${emailAddress}" is not a valid ${inputName}.`
      };
    }
  }

  return result;
}

export default emailAddressValidator;
