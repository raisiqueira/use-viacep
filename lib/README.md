# useViaCep

<p align="center">
 <img width="60%" height="60%" src="https://res.cloudinary.com/dwc5hkby0/image/upload/v1586797570/project-logo.svg">
</p>

![use-viacep](https://badgen.net/bundlephobia/minzip/@rsiqueira/use-viacep)

React hook to fetch Brazilian CEP's using ViaCEP api.

## Install

Use your prefer package manager

```bash
npm i --save @rsiqueira/use-viacep
# or
yarn add @rsiqueira/use-viacep
# or
pnpm add @rsiqueira/use-viacep
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

## Contributing

Clone this repository and run `pnpm install`. If you don't have pnpm, install it with `npm install -g pnpm`.

### Folder structure

- `example` - A folder with an example project. Think as playground.
- `lib` - The source of `@rsiqueira/use-viacep`.

### What is in this repository?

- [PNPM](https://pnpm.io/workspaces) as workspace manager and package manager.
- [TSUP](https://tsup.egoist.dev/) as a TypeScript universal package.
- [Vitest](https://vitest.dev/) as a test runner.
- [Size Limit](https://github.com/ai/size-limit) as a size limit plugin.
- [Prettier](https://prettier.io/) as a code formatter.
- [ESLint](https://eslint.org/) as a code linter.

### Using the Playground

In the root of the repository, run the following command:

```bash
pnpm run dev # to build the library (with --watch flag)
pnpm -F example dev
```

The command will run the example project with [Vite](https://vitejs.dev/).

## Sponsors

[![Sponsors](https://cdn.jsdelivr.net/gh/raisiqueira/static@master/sponsors.svg)](https://github.com/sponsors/raisiqueira)

## License

MIT @ Rai Siqueira
