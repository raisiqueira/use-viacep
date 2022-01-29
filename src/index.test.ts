import { renderHook } from '@testing-library/react-hooks';
import useViaCep from './index';

const setup = () => {
  const { result, rerender } = renderHook(({ value }) => useViaCep(value), {
    initialProps: { value: '' },
  });

  return { result: result.current, rerender };
};

describe('use-viacep', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should init with default values', () => {
    const { cep, loading, error } = setup().result;
    expect(cep).toEqual({});
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
});
