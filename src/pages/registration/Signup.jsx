import { useState } from 'react';
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase/FirebaseConfig'


function Signup() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

   const signupfun = async () => {
      if(email === "" || password === ""){
        return alert("please fill all fields...!")
      };
        
       try {
         const user  = await createUserWithEmailAndPassword(auth, email, password);
         alert("signup- successfully");
         setEmail('');
         setPassword('');
       } catch (error) {
         console.log(error)
       }
   }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>

                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>

                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>

                <div className=' flex justify-center mb-3'>
                    <button 
                        onClick={signupfun}
                        className='bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-white'> have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup;