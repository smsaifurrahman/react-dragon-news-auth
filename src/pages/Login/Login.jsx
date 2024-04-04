import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log('Location is the login file',location);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            // Navigate after login
            navigate(location?.state ? location.state : '/') 
        })
        .catch(error=> {
            console.log(error);
        })

        
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-4 text-center font-bold">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body w-full lg:w-1/2 mx-auto">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" 
                        name="email"
                        placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" 
                        name="password"
                        placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p className="text-center">Do not have an account <Link className="text-blue-600 font-bold" to={'/register'}>Register</Link></p>

         
        </div>
    );
};

export default Login;