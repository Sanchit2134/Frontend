import React, {useState} from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async(e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='flex items-center gap-2 mt-10 mb-2'> 
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '':<input className='w-full p-2 border border-gray-300 rounded' type="text" placeholder='Full Name' />}
      <input className='w-full p-2 border border-gray-300 rounded' type="email" placeholder='Email' />
      <input className='w-full p-2 border border-gray-300 rounded' type="password" placeholder='Password' />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursoe-pointer'>Forgot your Password</p>
        {
          currentState === 'Login' ? <p onClick={()=>setCurrentState('Sign Up')} className='cursoe-pointer'>Create account</p> : <p onClick={()=>setCurrentState('Login')} className='cursoe-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login'? 'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login