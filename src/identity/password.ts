import { Validator } from '../validator';
import inputValidator from '../common/inputValidator';

const passwordValidator: Validator<string> = (
  password, 
  inputName = 'password', 
  options
) => {

  const result = inputValidator(password, inputName, options);
    if (result.isValid) {

    // Complete match string
    //
    // '^(?=.*[-_()!@#$%^&+*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[-_()!@#$%^&+*a-zA-Z0-9]{8,}$'

    let lengthCheck = /[-_()!@#$%^&+*a-zA-Z0-9]{8,}$/;
    if (!lengthCheck.test(password)) {
      return {
        isValid: false,
        shortMessage: 'too short',
        longMessage: `The ${inputName} must have a minimum length of 8 characters.`
      };
    }

    let specialCharCheck = /^(?=.*[-_()!@#$%^&+*])[-_()!@#$%^&+*a-zA-Z0-9]{8,}$/;
    if (!specialCharCheck.test(password)) {
      return {
        isValid: false,
        shortMessage: 'invalid',
        longMessage: `The ${inputName} must have at least one special character.`
      };
    }

    let lowercaseCharCheck = /^(?=.*[a-z])[-_()!@#$%^&+*a-zA-Z0-9]{8,}$/;
    if (!lowercaseCharCheck.test(password)) {
      return {
        isValid: false,
        shortMessage: 'invalid',
        longMessage: `The ${inputName} must have at least one lowercase character.`
      };
    }

    let uppercaseCharCheck = /^(?=.*[A-Z])[-_()!@#$%^&+*a-zA-Z0-9]{8,}$/;
    if (!uppercaseCharCheck.test(password)) {
      return {
        isValid: false,
        shortMessage: 'invalid',
        longMessage: `The ${inputName} must have at least one uppercase character.`
      };
    }

    let numberCheck = /^(?=.*[0-9])[-_()!@#$%^&+*a-zA-Z0-9]{8,}$/;
    if (!numberCheck.test(password)) {
      return {
        isValid: false,
        shortMessage: 'invalid',
        longMessage: `The ${inputName} must have at least one number character.`
      };
    }
  }

  return result;
}

export default passwordValidator;
