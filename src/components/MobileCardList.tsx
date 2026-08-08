import type { ReactNode } from 'react';

type MobileCardListProps<T> = {
  items: T[];
  keyExtractor: (item: T) => string | number;
  renderItem: (item: T) => ReactNode;
  className?: string;
};

export default function MobileCardList<T>({
  items,
  keyExtractor,
  renderItem,
  className = 'sm:hidden',
}: MobileCardListProps<T>) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={keyExtractor(item)} className="rounded-lg bg-white p-4 shadow">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
