import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ERROR_RESPONSE, SUCCESS_RESPONSE } from '../mock/server';
import useViaCep from '../src';

describe('useViaCep', () => {
  const setupHook = (cep?: string) => {
    return renderHook(() => useViaCep(cep));
  };
  it('should return an object with the response', async () => {
    const { result } = setupHook('50690708');
    expect(result.current.loading).toBeTruthy();
    await waitFor(() => expect(result.current.loading).toBeFalsy());
    expect(result.current.cep).toEqual(SUCCESS_RESPONSE);
    expect(result.current.loading).toBeFalsy();
  });

  it("should return an object with the error if the cep doesn't exist", async () => {
    const { result } = setupHook('99999999');
    expect(result.current.loading).toBeTruthy();
    await waitFor(() => expect(result.current.loading).toBeFalsy());
    expect(result.current.cep).toEqual(ERROR_RESPONSE);
    expect(result.current.loading).toBeFalsy();
  });
});
