import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../../api/axiosInstance'

export const usePersonalInformation = () => {
  const [profileImage, setProfileImage] = useState(null)
  const [paises, setPaises] = useState([])
  const [rhSanguineos, setRhSanguineos] = useState([])
  const [tipoDocumentos, setTipoDocumentos] = useState([])
  const [generos, setGeneros] = useState([])
  const [estadosCivil, setEstadosCivil] = useState([])
  const [departamentos, setDepartamentos] = useState([])
  const [ciudades, setCiudades] = useState([])

  const onSubmit = (data) => {
    for (const key in data) {
      if (data[key] === '' || data[key] === null) {
        delete data[key]
      }
    }
    axiosInstance.patch('/datos-personales', data)
  }

  const handlePaisSelection = async (id) => {
    const { data } = await axiosInstance.get(
        `/entidades-territoriales/departamentos/${id}`
    )
    setDepartamentos(data)
  }

  const handleDepartamentoSelection = async (id) => {
    const { data } = await axiosInstance.get(`entidades-territoriales/ciudades/${id}`)
    setCiudades(data)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setValue('documento', file)
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      nombres: '',
      apellidos: '',
      documento: '',
      ciudad: '',
      direccionResidencia: '',
      estadoCivil: '',
      linkFacebook: '',
      genero: '',
      linkInstagram: '',
      linkLinkedin: '',
      identificacion: '',
      rhSanguineo: '',
      celular: '',
      fechaNacimiento: '',
      tipoDocumento: '',
      linkTwitter: ''
    }
  })

  return {
    profileImage,
    paises,
    rhSanguineos,
    tipoDocumentos,
    generos,
    estadosCivil,
    departamentos,
    ciudades,
    control,
    errors,
    handleFileChange,
    handleSubmit,
    setProfileImage,
    onSubmit,
    handlePaisSelection,
    handleDepartamentoSelection
  }
}
