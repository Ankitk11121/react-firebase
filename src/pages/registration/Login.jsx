import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/FirebaseConfig';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

   const loginfun = async () => {
       if(email === "" || password === "") {
         return alert("please fill all fields....")
       }
        

       try {
        const user  = await signInWithEmailAndPassword(auth, email, password);
        const users = localStorage.setItem('user', JSON.stringify(user));
        console.log(users)
        alert("sign in successfully...!");
        navigate('/');
        setEmail("");
        setPassword("");

       } catch (error) {
        console.log(error)
       };
       
   }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-orange-500 px-10 py-10 rounded-xl '>

                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>

                <div>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name='email' className=' bg-orange-800	 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none' placeholder='Email'/>
                </div>

                <div>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className='bg-orange-800	 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none' placeholder='Password'/>
                </div>

                <div className=' flex justify-center mb-3'>
                    <button onClick={loginfun} className=' bg-blue-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-white'>Dont have an account <Link className=' text-teal-950	 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    )
}

export default Login;















// .................explanation...........................

// <h2 className='text-white'>Dont have an account <Link className=' text-teal-950 font-bold' to={'/signup'}>Signup</Link></h2>
// Explanation:----
// Link: Ye ek Link component hai jo /signup route pe navigate karega.
