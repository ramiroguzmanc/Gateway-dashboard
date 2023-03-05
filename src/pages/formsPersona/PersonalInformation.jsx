import { TextField, Select, MenuItem, InputLabel, Button } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Controller } from 'react-hook-form'
import { usePersonalInformation } from './hooks'

const PersonalInformation = () => {
  const {
    ciudades,
    control,
    departamentos,
    errors,
    estadosCivil,
    generos,
    handleDepartamentoSelection,
    handlePaisSelection,
    handleSubmit,
    onSubmit,
    paises,
    profileImage,
    rhSanguineos,
    setProfileImage,
    tipoDocumentos,
    handleFileChange
  } = usePersonalInformation()

  return (
    <>
      <div className='border-b border-gray_soft pb-2 px-2'>
        <h2 className='font-semibold text-lg text-gray_dark'>
          Datos personales
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid lg:grid-cols-2 my-4 gap-4 items-end'>
          <div className='lg:col-span-2 text-center mb-4'>
            <div className='w-40 h-40 mb-4 mx-auto rounded-full border-2 border-gray_soft flex items-center justify-center overflow-hidden'>
              <img
                src={profileImage}
                alt='Profile'
                className='h-full w-full object-cover'
              />
            </div>
            <TextField
              type='file'
              id='profile-image'
              inputProps={{
                accept: 'image/*',
                onChange: (e) => setProfileImage(e.target.files[0])
              }}
              style={{ display: 'none' }}
            />
            <label
              htmlFor='profile-image'
              className='font-semibold text-primary cursor-pointer'
            >
              Editar foto de perfil
            </label>
          </div>
          <div>
            <Controller
              name='nombres'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  id='nombres'
                  label='Nombres'
                  size='small'
                  error={!!errors.nombres}
                  {...field}
                  fullWidth
                />
              )}
            />
          </div>
          <div>
            <Controller
              name='apellidos'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  id='apellidos'
                  label='Apellidos'
                  size='small'
                  error={!!errors.apellidos}
                  {...field}
                  fullWidth
                />
              )}
            />
          </div>
          <div>
            <InputLabel id='documento'>Documento de identidad</InputLabel>

            <TextField
              id='documento'
              size='small'
              inputProps={{
                maxLength: 16777216, //* Tamaño máximo: 16MB
                onChange: handleFileChange
              }}
              error={!!errors.documento}
              type='file'
              fullWidth
            />
          </div>
          <div>
            <InputLabel id='tipo-documento-label'>Tipo documento</InputLabel>
            <Controller
              name='tipoDocumento'
              control={control}
              render={({ field }) => (
                <Select
                  labelid='tipo-documento-label'
                  size='small'
                  fullWidth
                  {...field}
                >
                  {tipoDocumentos?.map(({ id, descripcion }) => (
                    <MenuItem key={id} value={id}>
                      {descripcion}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
          <div>
            <InputLabel id='genero-label'>Género</InputLabel>
            <Controller
              name='genero'
              control={control}
              render={({ field }) => (
                <Select
                  size='small'
                  labelid='genero-label'
                  id='genero'
                  fullWidth
                  {...field}
                >
                  {generos?.map(({ id, descripcion }) => (
                    <MenuItem key={id} value={id}>
                      {descripcion}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
          <div>
            <Controller
              name='identificacion'
              control={control}
              render={({ field }) => (
                <TextField
                  labelid='numero_documento-label'
                  size='small'
                  type='number'
                  label='Número de documento'
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <InputLabel id='pais-label'>País</InputLabel>
            <Select size='small' labelid='pais-label' defaultValue='' fullWidth>
              {paises?.map(({ id, nombre }) => (
                <MenuItem
                  key={id}
                  value={nombre}
                  onClick={() => handlePaisSelection(id)}
                >
                  {nombre}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <Controller
              name='fechaNacimiento'
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label='Fecha de nacimiento'
                    maxDate={new Date()}
                    renderInput={(params) => (
                      <TextField size='small' {...params} fullWidth />
                    )}
                    {...field}
                  />
                </LocalizationProvider>
              )}
            />
          </div>
          <div>
            <InputLabel id='departamento-label'>Departamento</InputLabel>
            <Select
              defaultValue=''
              labelid='departamento-label'
              size='small'
              id='departamento'
              fullWidth
            >
              {departamentos?.map(({ id, nombre }) => (
                <MenuItem
                  key={id}
                  value={nombre}
                  onClick={() => handleDepartamentoSelection(id)}
                >
                  {nombre}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel id='estado-civil-label'>Estado Civil</InputLabel>
            <Controller
              name='estadoCivil'
              control={control}
              render={({ field }) => (
                <Select
                  labelid='estado-civil-label'
                  size='small'
                  fullWidth
                  {...field}
                >
                  {estadosCivil?.map(({ id, descripcion }) => (
                    <MenuItem key={id} value={id}>
                      {descripcion}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
          <div>
            <InputLabel id='ciudad-label'>Ciudad</InputLabel>
            <Controller
              name='ciudad'
              control={control}
              render={({ field }) => (
                <Select
                  labelid='ciudad-label'
                  size='small'
                  id='ciudad'
                  fullWidth
                  {...field}
                >
                  {ciudades?.map(({ id, nombre }) => (
                    <MenuItem key={id} value={id}>
                      {nombre}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
          <div>
            <Controller
              name='celular'
              control={control}
              render={({ field }) => (
                <TextField
                  labelid='telefono-label'
                  size='small'
                  type='number'
                  label='Teléfono'
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <InputLabel id='rh-label'>RH Sanguíneo</InputLabel>
            <Controller
              name='rhSanguineo'
              control={control}
              render={({ field }) => (
                <Select labelid='rh-label' size='small' fullWidth {...field}>
                  {rhSanguineos?.map(({ id, descripcion }) => (
                    <MenuItem key={id} value={id}>
                      {descripcion}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
          <div>
            <Controller
              name='direccionResidencia'
              control={control}
              render={({ field }) => (
                <TextField
                  labelid='direccion-label'
                  size='small'
                  label='Dirección de residencia'
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name='linkLinkedin'
              control={control}
              render={({ field }) => (
                <TextField
                  size='small'
                  label='Link LinkedIn'
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name='linkFacebook'
              control={control}
              render={({ field }) => (
                <TextField
                  labelid='facebook-label'
                  label='Link de Facebook'
                  size='small'
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name='linkInstagram'
              control={control}
              render={({ field }) => (
                <TextField
                  labelid='instagram-label'
                  label='Link de Instagram'
                  size='small'
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name='linkTwitter'
              control={control}
              render={({ field }) => (
                <TextField
                  labelid='twitter-label'
                  label='Link de Twitter'
                  size='small'
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          <div className='lg:col-span-2 justify-center text-center'>
            <Button type='submit' variant='contained'>
              Guardar Cambios
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default PersonalInformation
