function CheckEmail(email) {
  const regexpatten =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isEmailValidate = regexpatten.test(email.toLocaleLowerCase());
  return isEmailValidate;
}
function CheckWordInMessage(message) {
  return message.length > 100 ? false : true;
}
export { CheckEmail, CheckWordInMessage };
