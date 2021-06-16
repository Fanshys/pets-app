const validation = {
  login: {
    rules: {
      required: true,
      minLength: 6,
    },

    errors: {
      required: 'Login is required',
      minLength: 'Minimum login length is 6',
    },
  },

  password: {
    rules: {
      required: true,
      minLength: 8,
    },

    errors: {
      required: 'Password is required',
      minLength: 'Minimum password length is 8',
    },
  },
};

const getErrorText = (errorObj, type) => {
  const obj = validation[type];
  if (obj && errorObj) {
    let error = '';

    for (const prop in obj.errors) {
      if (errorObj.type === prop) {
        error = obj.errors[prop];
        break;
      }
    }

    return error || 'The field is filled incorrectly';
  }
};

export { validation, getErrorText };
