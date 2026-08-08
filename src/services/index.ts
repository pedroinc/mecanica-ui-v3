import type { Customer } from '../types/customer';

const baseURL = import.meta.env.VITE_BASE_URL;

console.log('baseURL', baseURL);

const Methods = { GET: 'GET', POST: 'POST' } as const;

function getDefaultHeaders(): HeadersInit {
  const token = localStorage.getItem('user_token');

  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token ?? ''}`,
  };
}

export const fetchCustomers = async (): Promise<Customer[] | undefined> => {
  try {
    const response = await fetch(`${baseURL}/customers`, {
      method: Methods.GET,
      headers: getDefaultHeaders(),
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export interface CreateCustomerPayload {
  name: string;
  email: string;
  phone: string;
}

export const createCustomer = async (payload: CreateCustomerPayload): Promise<Customer> => {
  const response = await fetch(`${baseURL}/customers`, {
    method: Methods.POST,
    headers: getDefaultHeaders(),
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body?.error ?? 'Erro ao criar cliente');
  }

  return body;
};

export const loginRequest = (email: string, password: string): void => {
  fetch(`${baseURL}/auth/login`, {
    method: Methods.POST,
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: getDefaultHeaders(),
  })
    .then(async (res) => {
      if (res.status !== 200) {
        throw new Error('User and/or password invalid!');
      }
      const { token } = await res.json();
      console.log('loggedin success', token);
      localStorage.setItem('user_token', token);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const logout = (): void => {
  localStorage.removeItem('user_token');
};
