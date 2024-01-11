import clsx from 'clsx';
import { CheckCircle } from 'react-feather';

type DisplayListInfoCardProps = {
  title?: string;
  items?: [];
  color: 'default' | 'success' | 'error';
};

export default function DisplayListInfoCard({ title, items = [], color = 'default' }: DisplayListInfoCardProps) {
  return (
    <div
      className={clsx('flex flex-col bg-neutral-900 border rounded-lg p-4 my-8', {
        'border-neutral-800': color === 'default',
        'border-rose-900': color === 'error',
        'border-emerald-900': color === 'success',
      })}
    >
      <span className='text-lg my-1 mb-4 dark:text-white'>{title}</span>

      <ul className='flex flex-col p-0 m-0'>
        {items?.map((item) => (
          <li key={item} className='flex flex-row items-baseline mb-2'>
            <div className='mr-4'>
              <CheckCircle
                size={18}
                className={clsx({
                  'text-white': color === 'default',
                  'text-rose-500': color === 'error',
                  'text-emerald-500': color === 'success',
                })}
              />
            </div>
            <p className='m-0 text-white'>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
