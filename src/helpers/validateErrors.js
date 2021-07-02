const validation = {
  name: {
    required: {
      value: true,
      message: 'Name is required',
    },
    minLength: {
      value: 6,
      message: 'Minimum name length is 6',
    },
  },

  email: {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Entered value does not match email format',
    },
  },

  password: {
    required: {
      value: true,
      message: 'Password is required',
    },
    minLength: {
      value: 8,
      message: 'Minimum password length is 8',
    },
  },
};

export { validation };
