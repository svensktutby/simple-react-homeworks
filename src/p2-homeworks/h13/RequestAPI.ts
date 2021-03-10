const baseURL = 'https://neko-cafe-back.herokuapp.com/';

export const fetchRequest = async (
  url = '',
  options: ApiOptions,
): Promise<ResponseType> => {
  const res = await fetch(`${baseURL}${url}`, options);

  if (!res.ok) {
    const message = `An error has occurred: ${res.status}`;
    console.error(message);
  }

  return await res.json();
};

/** Types */
type MethodType =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

type CredentialsType = 'include' | 'omit' | 'same-origin' | undefined;

type ApiOptions<B = string> = {
  method?: MethodType;
  headers?: Record<string, string>;
  body?: B;
  credentials?: CredentialsType;
};

export type ResponseType = {
  errorText: string;
  info: string;
  yourBody: Record<string, string>;
  yourQuery: Record<string, unknown>;
};
