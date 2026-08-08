import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-primary-50 to-primary-100 px-4 py-8 text-center">
      <div className="text-4xl font-semibold text-neutral-800">404</div>
      <div className="text-neutral-600">Página não encontrada</div>
      <Link
        to="/"
        className="mt-4 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 active:bg-primary-800"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
