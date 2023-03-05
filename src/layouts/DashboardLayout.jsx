import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '../components'

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <div className='flex relative bg-backgroundColor'>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className='bg-background w-screen max-h-screen overflow-y-scroll overflow-x-scroll'>
        <Header toggleSidebar={toggleSidebar} />
        <div className='pt-4 px-4 pb-4 min-h-screen'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
