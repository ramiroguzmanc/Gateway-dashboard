import { ThreeDots } from 'react-loader-spinner'

const LoadingPage = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <ThreeDots
        height='80'
        width='80'
        radius='9'
        color='#7C3AED'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible
      />
    </div>
  )
}

export default LoadingPage
