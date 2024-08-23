import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {signupGoogle , signUpGithub, signInWithEandP} = useContext(AuthContext)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)
    const location = useLocation()
    const navegate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 character')
            return
        }
        signInWithEandP(email, password)
        .then(result => {
            setSuccess('SuccessFully Logged In')
            {
                navegate(location.state ? location.state : '/')
            }
        })
        .catch(error => {
            setError('Please Provide valied email or password')
        })
    }

    const handleSignupWithGoogle = () => {
        signupGoogle()
            .then(result => {
                setSuccess('SuccessFully Logged In by Google')
            })
            .catch(error => {
                setError('Already exits email')
            })
    }
    const handleSignupWithGithub = () =>{
        signUpGithub()
        .then(result => {
            setSuccess('SuccessFully Logged In by Github')
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
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="flex gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="form-control w-full">
                                    <label className="label ">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type='password'
                                            name="password"
                                            placeholder="password"
                                            className="input w-full input-bordered" required />
                                       
                                    </div>
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
                                <button onClick={handleSignupWithGoogle} className="btn">Sign In With Google</button>
                            </div>
                            <div className="form-control">
                                <button onClick={handleSignupWithGithub} className="btn">Sign In With GitHub</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p class="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                                Don't have an account?
                                <Link to={'/register'}
                                    class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;