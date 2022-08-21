import { renderHook } from '@testing-library/react';
import { rest } from 'msw';
import { describe, it, expect } from 'vitest';

import { ERROR_RESPONSE, SUCCESS_RESPONSE, server } from '../mock/server';
import useViaCep from '../src';

describe('useViaCep', () => {
  const setupHook = (cep?: string) => {
    return renderHook(() => useViaCep(cep));
  };
  it.skip('should return an object with the response', () => {
    server.use(
      rest.get('https://viacep.com.br/ws/50690708/json/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
      })
    );
    const { result } = setupHook('50690708');
    expect(result.current.cep).toEqual(SUCCESS_RESPONSE);
  });

  it.skip("should return an object with the error if the cep doesn't exist", () => {
    const { result } = setupHook('99999999');
    expect(result.current.cep).toEqual(ERROR_RESPONSE);
  });
});
