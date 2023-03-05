import { useState } from 'react'
import { PersonalInformation } from './formsPersona'

import {
  RiContactsLine,
  RiGlobalLine,
  RiSteamLine,
  RiGroupLine,
  RiMedalLine,
  RiLuggageCartLine,
  RiUserHeartLine
} from 'react-icons/ri'

const steps = [
  { id: '0', title: 'Datos personales', icon: <RiContactsLine /> },
  { id: '1', title: 'Información familiar', icon: <RiGroupLine /> },
  { id: '2', title: 'Estudios formales', icon: <RiMedalLine /> },
  { id: '3', title: 'Información seguridad social', icon: <RiUserHeartLine /> },
  { id: '4', title: 'Educación no formal', icon: <RiMedalLine /> },
  { id: '5', title: 'Idiomas', icon: <RiGlobalLine /> },
  { id: '6', title: 'Experiencia laboral', icon: <RiLuggageCartLine /> },
  { id: '7', title: 'Habilidades', icon: <RiSteamLine /> }
]

const MiscDashboard = () => {
  const [selectedStep, setSelectedStep] = useState('0')

  const handleStepSelection = (step) => {
    setSelectedStep(step)
  }

  return (
    <>
      <h1 className='text-center font-semibold text-gray_dark text-3xl mb-6'>Formulario Personas</h1>
      <div className='grid lg:grid-cols-12 gap-4'>
        {/* Barra de navegación */}

        <div className='bg-white p-5 pb-2 rounded-lg shadow-lg md:col-start-1 md:col-end-4 h-fit'>
          {steps.map(({ id, title, icon }) => (
            <div key={id} className='flex hover:text-primary'>
              <div className='mt-1.5 text-gray_dark'>{icon}</div>
              <h2
                key={id}
                onClick={() => handleStepSelection(id)}
                className={`text-base mb-3 cursor-pointer ml-1.5  ${
                  selectedStep === id && 'font-bold text-primary'
                }`}
              >
                {title}
              </h2>
            </div>
          ))}
        </div>

        <div className='bg-white rounded-lg shadow-lg p-5 md:col-start-4 md:col-end-13'>
          {/* Contenido */}
          {/* Información personal */}
          {selectedStep === '0' && <PersonalInformation />}
        </div>
      </div>
    </>
  )
}

export default MiscDashboard
