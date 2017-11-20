module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }],
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
