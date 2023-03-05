import { useSidebar } from './hooks'
import { ListItem } from './'
import { CloseIcon } from '../assets/icons'
import logo from '../assets/images/projectLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const { links, selectedLink, setSelectedLink } = useSidebar()
  const { user } = useSelector(state => state.auth)

  return (
    <div
      className={`shadow-md w-full lg:w-auto min-w-[17.5rem] h-screen ${
        showSidebar
          ? 'transition-transform translate-x-0 duration-500'
          : 'transition-transform -translate-x-full duration-500'
      } lg:block absolute z-50 lg:static bg-white lg:translate-x-0`}
    >
      <div
        onClick={toggleSidebar}
        className='mx-5 mt-5 lg:hidden cursor-pointer'
      >
        <CloseIcon />
      </div>
      <Link to='/dashboard' onClick={() => setSelectedLink('')}>
        <div className='flex items-center py-5'>
          <figure className='mx-5 w-full'>
            <img src={logo} alt='Project Logo' width={230} />
          </figure>
        </div>
      </Link>
      <nav className='p-2 pt-4 overflow-y-scroll scroll'>
        <ul>
          <p className='font-semibold text-gray ml-3 text-xs uppercase'>
            SubMenu
          </p>
          {links.map((link) => (
            <ListItem
              key={link.label}
              label={link.label}
              route={link.route}
              selected={link.label === selectedLink}
              onItemClick={() => setSelectedLink(link.label)}
              Icon={link.icon}
              userType={user.userType}
              visibility={link.visibility}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
