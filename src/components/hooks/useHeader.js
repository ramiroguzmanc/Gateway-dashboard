import { useState } from 'react'

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClickAway = () => {
    setIsMenuOpen(false)
  }

  const handleClickButton = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return {
    isMenuOpen,
    handleClickAway,
    handleClickButton
  }
}
