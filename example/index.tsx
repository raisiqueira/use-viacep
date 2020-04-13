import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useViaCep from '../src/index';

const App = () => {
  const [data, setData] = React.useState('');
  const {} = useViaCep(data);
  return (
    <div>
      <input placeholder="cep" onChange={e => setData(e.target.value)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
