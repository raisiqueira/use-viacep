import useViaCep from '@rsiqueira/use-viacep';
import React from 'react';

const Main = () => {
  const [value, setValue] = React.useState('');
  const { cep, loading } = useViaCep(value);
  return (
    <div>
      <h1>Test useViaCep - loading: {loading}</h1>
      <input placeholder="Digite o CEP aqui" onChange={(e) => setValue(e.target.value)} />
      <pre>{JSON.stringify(cep, null, 2)}</pre>
    </div>
  );
};

export default Main;
