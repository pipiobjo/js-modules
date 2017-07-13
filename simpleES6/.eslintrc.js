module.exports = {
        
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jasmine": true,
    "amd": true
  },

  "parser" : "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": false
    }
  },

  "extends" : ["eslint:recommended", "google", "prettier"],
  "ignoreFile" : ".eslintignore",
	
  "plugins": [
    "babel",
    "prettier"
    ],
    "rules": {
      // "prettier/prettier": "warn",
       "switch-colon-spacing": 0,  // makes only noise http://eslint.org/docs/rules/switch-colon-spacing
       "no-console": "off",     // disable rules from base configurations, for development it should be okay
         
    }
};