import { useEffect, useState, type ChangeEvent, type MouseEvent } from 'react';
import Drawer from '../../components/Drawer';
import type { Customer } from '../../types/customer';

export interface CustomerFormState {
  name: string;
  phone: string;
  cellphone: string;
  email: string;
}

const emptyForm: CustomerFormState = {
  name: '',
  phone: '',
  cellphone: '',
  email: '',
};

function toFormState(customer?: Customer): CustomerFormState {
  return {
    name: customer?.name ?? '',
    phone: customer?.phone ?? '',
    cellphone: customer?.cellphone ?? '',
    email: customer?.email ?? '',
  };
}

interface CustomerFormProps {
  open: boolean;
  title?: string;
  readOnly?: boolean;
  customer?: Customer;
  onClose: () => void;
  onSubmit?: (form: CustomerFormState) => void | Promise<void>;
}

export default function CustomerForm({ open, title, readOnly, customer, onClose, onSubmit }: CustomerFormProps) {
  const [form, setForm] = useState<CustomerFormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setForm(toFormState(customer));
      setError(null);
      setSubmitting(false);
    }
  }, [open, customer]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEvent = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    setError(null);
    setSubmitting(true);
    try {
      await onSubmit(form);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar cliente');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Drawer open={open} title={title} onClose={onClose}>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-600">
            nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            readOnly={readOnly}
            onChange={handleChange}
            value={form.name}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 read-only:bg-neutral-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-600">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            readOnly={readOnly}
            onChange={handleChange}
            value={form.email}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 read-only:bg-neutral-50"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-neutral-600">
            telefone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            readOnly={readOnly}
            onChange={handleChange}
            value={form.phone}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 read-only:bg-neutral-50"
          />
        </div>
        <div>
          <label htmlFor="cellphone" className="mb-1 block text-sm font-medium text-neutral-600">
            celular
          </label>
          <input
            type="tel"
            name="cellphone"
            id="cellphone"
            readOnly={readOnly}
            onChange={handleChange}
            value={form.cellphone}
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 read-only:bg-neutral-50"
          />
        </div>
        {!readOnly && (
          <>
            {error && <div className="text-sm text-danger-600">{error}</div>}
            <button
              type="submit"
              disabled={submitting}
              onClick={handleSubmitEvent}
              className="w-full rounded-lg bg-primary-600 py-3 font-medium text-white transition-colors hover:bg-primary-700 active:bg-primary-800 disabled:cursor-not-allowed disabled:bg-primary-300"
            >
              {submitting ? 'Salvando...' : 'Salvar'}
            </button>
          </>
        )}
      </form>
    </Drawer>
  );
}
