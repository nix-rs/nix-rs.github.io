import pic from '../assets/pic.jpeg';

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center justify-item-center item-center md:p-10'>

        <div className='text-center md:text-xl font-mono'>
          This is the paragraph intro...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
          {window.innerHeight} {window.innerWidth}
        </div>
        </div>
      <img className='border-2 shadow-lg contrast-125 brightness-105 sm:rounded-md md:mr-20' src={pic} alt='myphotot' />
    </>
  )
} 
