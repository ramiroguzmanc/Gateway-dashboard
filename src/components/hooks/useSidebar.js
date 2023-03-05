import { useState } from 'react'
import { SparklesIcon } from '../../assets/icons'

export const useSidebar = () => {
  const visibility = {
    persona: 'persona',
    empresa: 'empresa',
    all: 'all'
  }

  const links = [
    {
      label: 'Perfil Personas',
      route: 'dashboard/perfil/personas',
      visibility: visibility.all,
      icon: SparklesIcon
    },
    {
      label: 'Perfil Empresas',
      route: 'dashboard/perfil/empresas',
      visibility: visibility.empresa,
      icon: SparklesIcon
    },
    {
      label: 'Proyectos',
      route: 'dashboard/perfil/empresas',
      visibility: visibility.all,
      icon: SparklesIcon
    }
  ]

  const [selectedLink, setSelectedLink] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return {
    links,
    selectedLink,
    showSidebar,
    setSelectedLink,
    toggleSidebar
  }
}
