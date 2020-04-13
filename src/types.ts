export type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;
};

export type UseViaCepHook = {
  cep: ViaCepResponse;
  error: { message: string; error: any };
  loading: boolean;
};
