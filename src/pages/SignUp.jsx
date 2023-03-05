import { useMemo } from 'react'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { useAuthStore } from '../GeneralHooks/useAuthStore'
import projectLogo from '../assets/images/projectLogo.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      nombres: '',
      apellidos: '',
      userType: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const pwd = watch('password')

  const { status, errorMessage } = useAuthStore()

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='grid min-h-screen bg-backgroundColor grid-cols-12 items-center'>
      <div className='shadow-lg rounded-xl overflow-hidden bg-white col-span-8 col-start-2 col-end-12 md:col-start-4 md:col-end-11 text-center lg:flex'>
        <div className='bg-primary_soft p-2 flex justify-center items-center lg:w-1/2 lg:p-6'>
          <img src={projectLogo} alt='Tornado Digital' className='max-w-xs' />
        </div>
        <div className='text-center lg:w-1/2 p-4'>
          {errorMessage && (
            <div className='bg-red w-full rounded p-2'>
              <p className='text-white'>{errorMessage}</p>
            </div>
          )}
          <h1 className='text-2xl font-bold text-primary uppercase my-4'>
            Regístrate
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <Controller
                name='nombres'
                control={control}
                rules={{ required: 'El nombre es requerido' }}
                render={({ field }) => (
                  <TextField
                    label='Nombres'
                    size='small'
                    error={!!errors.nombres}
                    helperText={errors.nombres?.message}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </div>
            <div className='mb-4'>
              <Controller
                name='apellidos'
                control={control}
                rules={{ required: 'El apellido es requerido' }}
                render={({ field }) => (
                  <TextField
                    label='Apellidos'
                    size='small'
                    error={!!errors.apellidos}
                    helperText={errors.apellidos?.message}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </div>
            <div className='mb-4 text-start'>
              <InputLabel id='userType-label'>Tipo de usuario</InputLabel>
              <Controller
                name='userType'
                control={control}
                rules={{ required: 'Debe seleccionar un tipo de usuario' }}
                render={({ field }) => (
                  <>
                    <Select
                      labelid='userType-label'
                      size='small'
                      error={!!errors.userType}
                      fullWidth
                      {...field}
                    >
                      <MenuItem value={1}>Persona</MenuItem>
                      <MenuItem value={2}>Empresa</MenuItem>
                    </Select>
                    {errors.userType?.message && <span className='text-red'>{errors.userType.message}</span>}
                  </>
                )}
              />
            </div>
            <div className='mb-4'>
              <Controller
                name='email'
                control={control}
                rules={{ required: 'El correo es requerido' }}
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
            <div className='mb-4'>
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
            <div className='mb-4'>
              <Controller
                name='confirmPassword'
                control={control}
                rules={{
                  required: 'Debe confirmar la contraseña',
                  validate: (value) => value === pwd || 'Las contraseñas no coinciden'
                }}
                render={({ field }) => (
                  <TextField
                    label='Confirmar Contraseña'
                    type='password'
                    size='small'
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
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
                Registrarse
              </Button>
              <p className='mt-4 font-light'>
                ¿Ya tienes una cuenta?
                <Link to='/login'>
                  <span className='font-semibold text-primary hover:underline cursor-pointer ml-1'>
                    Iniciar Sesión
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

export default SignUp
