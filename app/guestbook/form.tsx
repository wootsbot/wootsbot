'use client';

import { useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export const helloFormSchema = z.object({
  bodyField: z.string().min(1),
});

type FormValues = z.infer<typeof helloFormSchema>;

function Form() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(helloFormSchema),
  });

  async function handleSubmitValues(data: FormValues) {
    setIsFetching(true);

    await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: data.bodyField,
      }),
      method: 'POST',
    });

    setIsFetching(false);
    reset();
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <form className="flex flex-row gap-3" onSubmit={handleSubmit(handleSubmitValues)}>
      <input
        className="w-full h-11 py-2 px-4 text-black dark:text-white text-md placeholder:text-neutral-400 dark:placeholder:text-neutral-400 rounded-md border border-neutral-400 dark:border-white bg-gray-100 dark:bg-white/5"
        placeholder="Escribe un mensaje"
        //   isError={Boolean(errors?.nameField)}
        //   errMsg={errors?.nameField?.message}
        {...register('bodyField')}
      />

      <button
        className="flex flex-row items-center justify-center gap-3 border border-neutral-400 dark:border-white py-2 px-3 rounded-sm bg-gray-100 dark:bg-zinc-950 w-56"
        type="submit"
      >
        {isMutating ? 'Saludando... 🤟' : 'Saludar 👋'}
      </button>
    </form>
  );
}

export default Form;
