import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { styled } from '@/stitches';

import Box from '@/design-system/Box';
import Heading from '@/design-system/Heading';
import Flex from '@/design-system/Flex';
import Text from '@/design-system/Text';

const StyledInputEmail = styled('input', {
  width: 300,
  height: '100%',
  minHeight: 45,
  maxHeight: 45,
  border: 'none',
  borderRadius: '$md',
  backgroundColor: '$sage5',
  my: '$1',
  pl: '$2',
  fontSize: '$md',
  color: '$sage12',
  outline: 'none',

  '&:hover': {
    boxShadow: '$cardHover',
  },

  '&:focus': {
    boxShadow: '$cardHover',
  },
  '&:disabled': {
    boxShadow: 'none',
    backgroundColor: '$sage7',
  },

  '@phone': {
    width: 'auto',
  },

  variants: {
    error: {
      true: {
        boxShadow: '$cardError !important',
        backgroundColor: '$red5',
      },
    },
  },
});

const ButtonSubscribe = styled('button', {
  height: '100%',
  minHeight: 45,
  maxHeight: 45,
  border: 'none',
  borderRadius: '$md',
  backgroundColor: '$sage5',
  my: '$1',
  px: '$2',
  fontSize: '$md',

  '&:hover': {
    backgroundColor: '$sage6',
    cursor: 'pointer',
    boxShadow: '$cardHover',
  },

  '&:focus': {
    backgroundColor: '$gray5',
    boxShadow: '$cardHover',
  },

  '&:disabled': {
    backgroundColor: '$sage7',
    boxShadow: 'none',
    cursor: 'default',
  },
});

const StyledHelperText = styled('p', {
  position: 'absolute',
  marginTop: 64,
  color: '$sage12',
  fontSize: '$xs',
  lineHeight: '$md',
  mb: '$1',

  variants: {
    error: {
      true: {
        color: '$red11',
      },
    },

    success: {
      true: {
        color: '$green11',
      },
    },
  },
});

const schema = yup.object({
  emailField: yup.string().required('Por favor ingrese un correo electrónico'),
});

function Subscribe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange', resolver: yupResolver(schema) });

  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmitData(data) {
    setIsLoading(true);
    setIsError(null);
    setData(null);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: data?.emailField,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      setIsError(error);
      setIsLoading(false);
      return;
    }

    setData('¡Gracias por suscribirte!');
    setIsLoading(false);
    reset({ emailField: null });
  }

  useEffect(() => {
    return () => {
      reset({ emailField: null });
      setIsLoading(false);
      setIsError(null);
      setData(null);
    };
  }, [reset]);

  return (
    <Box
      css={{
        display: 'flex',
        width: '100%',
        height: 'auto',
        backgroundColor: '$gray1',
        borderRadius: '$md',
        boxShadow: '$cardBase',
        p: '$3',

        '&:hover': {
          boxShadow: '$cardHover',
        },
      }}
    >
      <Flex flexDirection="column" gap={2}>
        <Flex flexDirection="column" gap={1}>
          <Heading size="lg">Suscríbete al boletín</Heading>
          <Text>
            Reciba correos electrónicos míos sobre desarrollo web, tecnología y acceso anticipado a nuevos artículos.
          </Text>
        </Flex>

        <Flex
          alignItems={{ '@initial': 'center', '@phone': 'start' }}
          flexDirection={{ '@initial': 'row', '@phone': 'column' }}
          gap={2}
        >
          <Flex flexDirection="column" gap={1} css={{ '@phone': { width: '100%' } }}>
            <StyledInputEmail
              type="text"
              error={Boolean(errors?.emailField)}
              disabled={isLoading}
              {...register('emailField')}
            />

            {errors?.emailField && <StyledHelperText error>{errors?.emailField?.message}</StyledHelperText>}
            {isError && !errors?.emailField && <StyledHelperText error>{isError}</StyledHelperText>}
            {data && !errors?.emailField && !isError && <StyledHelperText success>{data}</StyledHelperText>}
          </Flex>
          <ButtonSubscribe disabled={isLoading} onClick={handleSubmit(handleSubmitData)}>
            {isLoading ? 'suscribiendo...' : 'Suscribirme'}
          </ButtonSubscribe>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Subscribe;
