import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ListItem = ({
  label,
  route,
  selected,
  onItemClick,
  Icon,
  visibility,
  userType
}) => {
  const [visible, setVisible] = useState(false)

  const shouldBeVisible = () => {
    setVisible(visibility === userType || visibility === 'all')
  }

  useEffect(() => {
    shouldBeVisible()
  }, [])

  return (
    <Link to={`/${route}`} className={`${!visible && 'hidden'}`}>
      <div
        onClick={onItemClick}
        className={` ${
          selected && 'bg-primary_soft/50 text-primary font-medium'
        } hover:bg-gray_soft hover:text-primary hover:font-medium rounded-full py-2 px-3 border-b-[1px] border-white`}
      >
        <li className='flex items-center'>
          <Icon />
          <span className='ml-2'>{label}</span>
        </li>
      </div>
    </Link>
  )
}
