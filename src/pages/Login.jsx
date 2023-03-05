import { Button, TextField } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useAuthStore } from '../GeneralHooks/useAuthStore'
import Swal from 'sweetalert2'
import projectLogo from '../assets/images/projectLogo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  const { startLogin, errorMessage, status } = useAuthStore()
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    startLogin(data)
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error')
    }
  }, [errorMessage])

  return (
    <div className='grid min-h-screen bg-backgroundColor grid-cols-12 grid-rows-6'>
      <div className='shadow-lg rounded-xl overflow-hidden bg-white row-start-2 row-end-6 col-span-8 col-start-2 col-end-12 md:col-start-4 md:col-end-11 text-center lg:flex'>
        <div className='bg-primary_soft p-2 flex justify-center items-center lg:w-1/2 lg:p-6'>
          <img src={projectLogo} alt='Project Logo' className='max-w-xs' />
        </div>
        <div className='text-center lg:w-1/2 p-4 lg:flex lg:flex-col lg:justify-center lg:h-full'>
          {errorMessage && (
            <div className='bg-red w-full rounded p-2'>
              <p className='text-white'>{errorMessage}</p>
            </div>
          )}
          <h1 className='text-2xl font-bold text-primary uppercase my-8'>
            Iniciar Sesión
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-8'>
              <Controller
                name='email'
                control={control}
                rules={{ required: 'El correo electrónico es requerido' }}
                render={({ field }) => (
                  <TextField
                    label='Correo electrónico'
                    size='small'
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </div>
            <div className='mb-8'>
              <Controller
                name='password'
                control={control}
                rules={{ required: 'La contraseña es requerida' }}
                render={({ field }) => (
                  <TextField
                    label='Contraseña'
                    type='password'
                    size='small'
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <Button
                disabled={isAuthenticating}
                type='submit'
                variant='contained'
              >
                Iniciar Sesión
              </Button>
              <p className='mt-4 font-light'>
                ¿No tienes cuenta aún?
                <Link to='/sign-up'>
                  <span className='font-semibold text-primary hover:underline cursor-pointer ml-1'>
                    Regístrate
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
