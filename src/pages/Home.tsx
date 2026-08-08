import { useEffect } from 'react';
import { fetchCustomers } from '../services';

async function listCustomers() {
  const customers = await fetchCustomers();
  console.log(customers);
}

export default function Home() {
  useEffect(() => {
    console.log('useEffect');
    listCustomers();
  }, []);

  return <div className="text-xl my-4">Homepage - pipeline test v1.0</div>;
}
