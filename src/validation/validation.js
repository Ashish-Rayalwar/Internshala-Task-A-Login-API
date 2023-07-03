const validator = require("validator");

const isvalidpassword = (password) => {
  password = password.trim();
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
  return passwordRegex.test(password);
};

const isvalidUsername = (username) => {
  username = username.trim();
  if (username.length > 12 || username.length < 6) {
    return false;
  }
  return validator.isAlphanumeric(username);
};

module.exports = { isvalidUsername, isvalidpassword };
