import { useTheme } from 'next-themes';
import {
  slate,
  slateDark,
  blue,
  blueDark,
  gray,
  grayDark,
  cyan,
  cyanDark,
  red,
  redDark,
  green,
  greenDark,
  violet,
  violetDark,
  pink,
  pinkDark,
} from '@radix-ui/colors';

export function useThemeLiveReact() {
  const { theme: currentMode } = useTheme();

  const isThemeLight = currentMode === 'light';

  const syntax0 = isThemeLight ? pink.pink11 : pinkDark.pink11;
  const syntax1 = isThemeLight ? violet.violet2 : violetDark.violet2;
  const syntax2 = isThemeLight ? gray.gray12 : grayDark.gray12;
  const syntax3 = isThemeLight ? green.green11 : greenDark.green11;
  const syntax4 = isThemeLight ? red.red11 : redDark.red11;
  const syntax5 = isThemeLight ? violet.violet11 : violetDark.violet11;
  const syntax6 = isThemeLight ? slate.slate10 : slateDark.slate10;
  const syntax7 = isThemeLight ? cyan.cyan11 : cyanDark.cyan11;
  const syntax8 = isThemeLight ? blue.blue11 : blueDark.blue11;

  const themeLiveReact = {
    plain: {
      color: syntax2,
      backgroundColor: syntax1,
    },
    styles: [
      {
        types: ['changed'],
        style: {
          color: syntax3,
        },
      },
      {
        types: ['deleted'],
        style: {
          color: syntax4,
        },
      },
      {
        types: ['inserted', 'attr-name'],
        style: {
          color: syntax5,
        },
      },
      {
        types: ['comment'],
        style: {
          color: syntax6,
        },
      },
      {
        types: ['string', 'url'],
        style: {
          color: syntax7,
        },
      },
      {
        types: ['variable'],
        style: {
          color: syntax5,
        },
      },
      {
        types: ['number'],
        style: {
          color: syntax7,
        },
      },
      {
        types: ['builtin', 'char', 'constant', 'function'],
        style: {
          color: syntax8,
        },
      },
      {
        types: ['punctuation'],
        style: {
          color: syntax8,
        },
      },
      {
        types: ['selector', 'doctype'],
        style: {
          color: syntax8,
        },
      },
      {
        types: ['class-name'],
        style: {
          color: syntax0,
        },
      },
      {
        types: ['tag', 'operator', 'keyword'],
        style: {
          color: syntax8,
        },
      },
      {
        types: ['boolean'],
        style: {
          color: syntax8,
        },
      },
      {
        types: ['property'],
        style: {
          color: syntax8,
        },
      },
      {
        types: ['namespace'],
        style: {
          color: syntax8,
        },
      },
      {
        types: ['attr-value'],
        style: {
          color: syntax8,
        },
      },
    ],
  };

  return {
    theme: themeLiveReact,
    themeMode: currentMode,
  };
}
