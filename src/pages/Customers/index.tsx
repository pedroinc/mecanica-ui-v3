import { useState, useEffect } from 'react';

import CustomerForm, { type CustomerFormState } from '../../Components/Customers/form';
import { createCustomer } from '../../services';
import { mockCustomers } from '../../mocks/customers';
import type { Customer } from '../../types/customer';
import { DeleteIcon, EditIcon, SearchIcon } from '../../components/icons';
import MobileCardList from '../../components/MobileCardList';

type CustomerDrawerState = { mode: 'create' | 'view' | 'edit'; customer?: Customer } | null;

export default function CustomersList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [drawerState, setDrawerState] = useState<CustomerDrawerState>(null);

  useEffect(() => {
    listCustomers();
  }, []);

  // TODO: usando dados fictícios enquanto a integração com a API fica pausada.
  // Para voltar aos dados reais: `const customers = await fetchCustomers(); setCustomers(customers ?? []);`
  function listCustomers() {
    setCustomers(mockCustomers);
  }

  const closeDrawer = () => setDrawerState(null);

  const handleSubmit = async (form: CustomerFormState) => {
    if (drawerState?.mode === 'create') {
      await createCustomer({ 
          name: form.name, 
          email: form.email, 
          phone: form.phone 
        });
    }
    closeDrawer();
    listCustomers();
  };

  const drawerTitle =
    drawerState?.mode === 'create'
      ? 'Novo cliente'
      : drawerState?.mode === 'edit'
        ? `Editar ${drawerState.customer?.name}`
        : drawerState?.mode === 'view'
          ? `Consultar ${drawerState.customer?.name}`
          : undefined;

  return (
    <>
      <div className="my-4 flex flex-wrap items-center justify-between gap-2">
        <div className="text-xl">Clientes</div>
        <button
          type="button"
          onClick={() => setDrawerState({ mode: 'create' })}
          className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 active:bg-primary-800"
        >
          Novo cliente
        </button>
      </div>

      {/* Mobile: stacked cards */}
      <MobileCardList
        items={customers}
        keyExtractor={(row) => row.id}
        renderItem={(row) => (
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="truncate font-medium text-neutral-800">{row.name}</div>
              <div className="text-sm text-neutral-500">{row.phone}</div>
              <div className="text-xs text-neutral-400">{row.createdAt}</div>
            </div>
            <div className="flex shrink-0 gap-1">
              <button
                aria-label="consultar"
                className="p-2 rounded hover:bg-neutral-100"
                onClick={() => setDrawerState({ mode: 'view', customer: row })}
              >
                <SearchIcon />
              </button>
              <button
                aria-label="editar"
                className="p-2 rounded hover:bg-neutral-100"
                onClick={() => setDrawerState({ mode: 'edit', customer: row })}
              >
                <EditIcon />
              </button>
              <button aria-label="excluir" className="p-2 rounded hover:bg-neutral-100">
                <DeleteIcon />
              </button>
            </div>
          </div>
        )}
      />

      {/* Desktop / tablet: table */}
      <div className="hidden overflow-x-auto rounded shadow bg-white sm:block">
        <table className="w-full text-left" aria-label="simple table">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2 text-right">Telefone</th>
              <th className="px-4 py-2 text-right">Data inclusão</th>
              <th className="px-4 py-2 text-right" />
            </tr>
          </thead>
          <tbody>
            {customers.map((row) => (
              <tr key={row.id} className="border-b border-neutral-100 last:border-0">
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2 text-right">{row.phone}</td>
                <td className="px-4 py-2 text-right">{row.createdAt}</td>
                <td className="px-4 py-2 text-right whitespace-nowrap">
                  <button
                    aria-label="consultar"
                    className="p-1 rounded hover:bg-neutral-100"
                    onClick={() => setDrawerState({ mode: 'view', customer: row })}
                  >
                    <SearchIcon />
                  </button>
                  <button
                    aria-label="editar"
                    className="p-1 rounded hover:bg-neutral-100"
                    onClick={() => setDrawerState({ mode: 'edit', customer: row })}
                  >
                    <EditIcon />
                  </button>
                  <button aria-label="excluir" className="p-1 rounded hover:bg-neutral-100">
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CustomerForm
        open={drawerState !== null}
        title={drawerTitle}
        customer={drawerState?.customer}
        readOnly={drawerState?.mode === 'view'}
        onClose={closeDrawer}
        onSubmit={handleSubmit}
      />
    </>
  );
}
