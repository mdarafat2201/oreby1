function CheckEmail(email) {
  const regexpatten =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isEmailValidate = regexpatten.test(email.toLocaleLowerCase());
  return isEmailValidate;
}
function CheckWordInMessage(message) {
  return message.length > 100 ? false : true;
}
function CheckPassword(Password) {
  const patternPassword =
    /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
  let isPasswordValidate = patternPassword();
  return isPasswordValidate;
}
export { CheckEmail, CheckWordInMessage, CheckPassword };
