'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button type='button' onClick={() => setTheme('light')}>
        Light
      </button>
      <button type='button' onClick={() => setTheme('dark')}>
        Dark
      </button>
      <button type='button' onClick={() => setTheme('system')}>
        System
      </button>
    </div>
  );
}
