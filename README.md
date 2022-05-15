# Frontend Seed

An un-bloated, more-or-less-opionated, readied starting point for frontend Javascript applications.

## Commands

```
yarn run start      # Start development mode
         serve      # Serve production build
         build      # Create production build
         test       # Test Javascript
         lint       # Lint everything
         lint:js    # Lint Javascript
         lint:css   # Lint Styles
````

### Options

**Development server port** \
Create a `.env` under the root folder file with the variable `PORT` set to which ever port.

## Tools

### Dev
- Write modern JS with [babel/core](https://www.npmjs.com/package/@babel/core) and [babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- Write styles with [sass](https://sass-lang.com/)

### Build
- Bundle everything with [webpack](https://www.npmjs.com/package/webpack)
- Set environment specific variables with [dotenv](https://www.npmjs.com/package/dotenv)
- Let the browser reload with [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

### Testing
Testing is done through
- [jest](https://www.npmjs.com/package/jest) 
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react)
- [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks)

### Linting
- JS linting: [eslint](https://www.npmjs.com/package/eslint)
- CSS linting: [stylelint](https://www.npmjs.com/package/stylelint)