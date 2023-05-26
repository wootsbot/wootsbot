'use client';

import { signOut } from 'next-auth/react';
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon';

function SignOutButton() {
  return (
    <button className="flex flex-row items-center gap-3 text-white" onClick={() => signOut()}>
      <span>Desconectar</span>
      <ArrowRightOnRectangleIcon className="w-5" />
    </button>
  );
}

export default SignOutButton;
