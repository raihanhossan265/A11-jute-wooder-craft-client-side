import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const { createUser , signupGoogle} = useContext(AuthContext)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, photo, password);

        if(password.length < 6){
            setError('Password must be at least 6 character')
            return
        }else if(!/[A-Z]/.test(password)){
            setError('At least 1 UpperCase')
            return
        }else if(!/[a-z]/.test(password)){
            setError('At least 1 LowerCase')
            return
        }

        createUser(email, password)
            .then(result => {
                setSuccess('SuccessFully created')
            })
            .catch(error => {
                setError('Already Exits Email')
            })
        setSuccess('')
        setError('')

    }

    const handleSignupWithGoogle = () =>{
        signupGoogle()
        .then(result => {
            setSuccess('SuccessFully created')
        })
        .catch(error => {
            setError('Already exits email')
        })
    }




    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                    </label>
                                </div>
                            </div>
                            {
                                success && <p className="text-green-700 text-center font-bold text-xl">{success}</p>
                            }
                            {
                                error && <p className="text-red-700 text-center font-bold text-xl">{error}</p>
                            }
                            <div className="form-control">
                                <button onClick={handleSignupWithGoogle} className="btn">Sign Up With Google</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p class="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                                Don't have an account?
                                <Link to={'/login'}
                                    class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;