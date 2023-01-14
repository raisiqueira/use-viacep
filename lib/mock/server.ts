import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const SUCCESS_RESPONSE = {
  cep: '50690-708',
  logradouro: 'Rua Bom Jesus',
  complemento: '',
  bairro: 'Iputinga',
  localidade: 'Recife',
  uf: 'PE',
  ibge: '2611606',
  gia: '',
  ddd: '81',
  siafi: '2531',
};

export const ERROR_RESPONSE = {
  erro: true,
};

const apiHandlers = [
  rest.get('https://viacep.com.br/ws/50690708/json/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_RESPONSE));
  }),
  rest.get('https://viacep.com.br/ws/99999999/json/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ERROR_RESPONSE));
  }),
];

export const server = setupServer(...apiHandlers);
