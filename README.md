# useViaCep

<p align="center">
 <img width="60%" height="60%" src="https://res.cloudinary.com/dwc5hkby0/image/upload/v1586797570/project-logo.svg">
</p>

![use-viacep](https://badgen.net/bundlephobia/minzip/@rsiqueira/use-viacep)

React hook to fetch Brazilian CEP's using ViaCEP api.

## Install

```bash
npm i --save @rsiqueira/use-viacep # or yarn add @rsiqueira/use-viacep
```

## Usage

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useViaCep from '@rsiqueira/use-viacep';

const App = () => {
  const [data, setData] = React.useState('');
  const { cep, loading, error } = useViaCep(data);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <input placeholder="cep" onChange={(e) => setData(e.target.value)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Commands (for development only)

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Using the Playground

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**!

## Sponsors

[![Sponsors](https://cdn.jsdelivr.net/gh/raisiqueira/static/sponsors.svg)](https://headless-stepper.netlify.app/sponsors)

## License

MIT @ Rai Siqueira
