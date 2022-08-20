import { useCallback, useEffect, useMemo, useState } from 'react';

type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

type UseViaCepHook = {
  cep: ViaCepResponse;
  error: string | null;
  loading: boolean;
};

const useViaCep = (value: string | null = ''): UseViaCepHook => {
  const [cep, setCep] = useState<ViaCepResponse>({} as ViaCepResponse);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const cepFormatted = useMemo(() => {
    return String(value)?.replace(/\W/g, '');
  }, [value]);

  const viaCepURL = useMemo(() => {
    return `https://viacep.com.br/ws/${cepFormatted}/json/`;
  }, [cepFormatted]);

  const fetchCep = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(viaCepURL, { method: 'GET' });
      const json = await response.json();

      setCep(json as ViaCepResponse);
      setError(json?.erro || null);
      setLoading(false);
    } catch (err) {
      console.error('Error to get CEP: ', err);
      setLoading(false);
      setError('Error to get CEP');
    }
  }, [viaCepURL]);

  useEffect(() => {
    if (cepFormatted.length === 8) {
      fetchCep();
    }
  }, [cepFormatted.length, fetchCep]);

  return { cep, error, loading };
};

export default useViaCep;
