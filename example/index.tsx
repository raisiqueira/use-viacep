import { stringify } from 'querystring';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useViaCep from '../src/index';

const App = () => {
  const [data, setData] = React.useState('');
  const { cep } = useViaCep(data);
  return (
    <div>
      <input placeholder="cep" onChange={e => setData(e.target.value)} />
      <div>
        <pre>
          {JSON.stringify(cep, null, 2)}
        </pre>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
