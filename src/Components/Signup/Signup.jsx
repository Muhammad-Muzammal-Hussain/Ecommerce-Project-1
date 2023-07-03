import axios from 'axios'
import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
export default function Signup() {
  const nav=useNavigate()
	const {register,handleSubmit}=useForm()
const submitdata = (data) => {
	console.log(data)
	axios.post('/signup',data).then((res)=>{
		toast.success("User Created Successfully");
		nav("/login");
	})
  
}
  return (
    <>
    <div className='pt-12  sm:pt-0'>
<form 
onSubmit={handleSubmit(submitdata)}
method='post'
>
       <section className='mySection  scroll-hidden    overflow-x-hidden'> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
   <div className="signin "> 

    <div className="content "> 

     <h2>Sign Up</h2> 

     <div className="form"> 

      <div className="inputBox"> 

       <input type="text" required {...register('name')} name="Username"/> <i>Username</i> 

      </div> 
      <div className="inputBox"> 

       <input type="text" required {...register('email')}/> <i>Email</i> 

      </div> 

      <div className="inputBox"> 

       <input type="password" required {...register('password')}/> <i>Password</i> 

      </div> 

      <div className="links hover:text-pink-600 text-white transition-all"> <Link
       to='/login'>Already Have an Account? </Link> 

      </div> 

      <div className="inputBox"> 

       <input type="submit" value="Signup"/> 

      </div> 

     </div> 

    </div> 

   </div> 

  </section>
  </form>
  </div>
    </>
  )
}
