import { useState, type ChangeEvent, type MouseEvent } from 'react';
import { loginRequest } from '../services';

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('handleInput', name, value);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEvent = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('login!!!');
    e.preventDefault();
    if (!form.email || !form.password) alert('please provide a valid input');

    loginRequest(form.email, form.password);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-primary-100 px-4 py-8">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-6 text-center text-2xl font-semibold text-neutral-800">Mecânica</div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-600">
              email
            </label>
            <input
              autoFocus
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={form.email}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-neutral-600">
              senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={form.password}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmitEvent}
            className="w-full rounded-lg bg-primary-600 py-3 font-medium text-white transition-colors hover:bg-primary-700 active:bg-primary-800"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
