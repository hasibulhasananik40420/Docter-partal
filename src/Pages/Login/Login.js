import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../Assets/icons/1534129544.svg'
import auth from '../../Firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Spinner from '../Shared/Spinner';
const Login = () => {
  //google sing in
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

  const onSubmit = data => {
    console.log(data)
    signInWithEmailAndPassword(data.email , data.password)
  }
   

  if(loading || googleLoading){
       return <Spinner></Spinner>
  }
    
     let errorMessage
    if(error || googleError){
      errorMessage=<p className='text-red-500 font-serif'> {error?.message || googleError?.message}</p>
    }

  if (googleUser) {
    console.log(googleUser);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="card w-96 bg-base-100 shadow-2xl ">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input

                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })}

                type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

              </label>
            </div>
            {/* password */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input {...register("password", {
                required: {
                  value: true,
                  message: 'Password is Required'
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer'
                }
              })} type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}

              </label>
            </div>
              
               {errorMessage}

            <input className="btn btn-accent text-white w-full max-w-xs" type="submit" value="LOGIN" />
          </form>
          <span>New to Docters portals? <Link className='text-primary font-medium' to="/singup">Create a account</Link></span>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent font-medium">Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;