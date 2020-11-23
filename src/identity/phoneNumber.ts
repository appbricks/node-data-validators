import { Validator, ValidationResult } from '../validator';
import inputValidator from '../common/inputValidator';

const phoneNumberValidator: Validator<string> = (
  phoneNumber, 
  inputName = 'phone number', 
  options
) => {

  const result = inputValidator(phoneNumber, inputName, options);
  if (result.isValid && options && options.formatMask) {

    let format = options.formatMask.replace(/[.]/g, '\\d');
    format = format.replace( /([-+()])/g, '\\$1');

    if (!new RegExp(format).test(options.formattedValue!)) {
      return {
        isValid: false,
        shortMessage: 'invalid',
        longMessage: options.longMessage 
          ? options.longMessage
          : `"${phoneNumber}" is not a valid ${inputName}.`
      };
    }
  }

  return result;
}

export default phoneNumberValidator;
