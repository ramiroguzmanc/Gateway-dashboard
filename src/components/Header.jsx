import React from 'react'
import { RiNotification3Line, RiCheckboxBlankCircleFill } from 'react-icons/ri'
import { ClickAwayListener, Paper } from '@mui/material'
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
import { HamburgerMenuIcon } from '../assets/icons'

import { useHeader } from './hooks'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/auth'

const Header = ({ toggleSidebar }) => {
  const { isMenuOpen, handleClickAway, handleClickButton } = useHeader()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const handleLogOut = () => {
    dispatch(logout())
    window.localStorage.clear()
  }

  return (
    <>
      {/* header */}
      <header className='bg-backgroundColor sticky top-0 right-0 left-0 flex items-center p-4 py-2.5 z-40'>
        <nav className='w-full flex items-center justify-between relative'>
          <div>
            <div
              onClick={toggleSidebar}
              className='bg-white rounded-full p-2.5 shadow-lg cursor-pointer lg:hidden'
            >
              <HamburgerMenuIcon />
            </div>
          </div>
          <ul className='flex items-center gap-4 '>
            <div className='p-2.5 rounded-full bg-white shadow-md'>
              <li>
                <a href='#' className='relative'>
                  <RiNotification3Line className='text-xl text-gray' />
                  <RiCheckboxBlankCircleFill className='absolute -right-1 -top-1 text-xs text-red' />
                </a>
              </li>
            </div>
            <li>
              <ClickAwayListener
                onClickAway={handleClickAway}
              >
                <div>
                  <div
                    onClick={handleClickButton}
                    className='w-11 h-11 p-2 bg-white rounded-full cursor-pointer shadow-md'
                  >
                    <AiOutlineUser className='w-full h-full text-gray' />
                  </div>
                  <Paper
                    elevation={2}
                    variant='elevation'
                    className={`${
                    !isMenuOpen && 'hidden'
                  } h-72 w-60 absolute right-0 top-16`}
                  >
                    <div className='border-b-2 border-gray_soft h-3/5 flex items-center flex-col p-4'>
                      <div className='rounded-full border-2 w-16 h-16 border-gray_soft flex items-center justify-center overflow-hidden text-gray bg-gray_soft'>
                        <AiOutlineUser className='w-full h-full' />
                      </div>
                      <p className='font-semibold mt-2'>{user?.displayName}</p>
                      <p className='text-gray mt-2'>{user?.email}</p>
                    </div>
                    <div className='p-3 flex flex-col justify-center h-2/5'>
                      <div className='flex items-center py-1 my-1 px-3 rounded-full cursor-pointer hover:bg-gray_soft'>
                        <AiOutlineLogout className='text-gray text-2xl mr-2' />
                        <p onClick={handleLogOut} className='font-semibold'>Cerrar Sesión</p>
                      </div>
                    </div>
                  </Paper>
                </div>
              </ClickAwayListener>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
