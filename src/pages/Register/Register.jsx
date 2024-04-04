import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Register = () => {
        const {createUser} = useContext(AuthContext)

        const handleRegister = e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password');
            // console.log(name,photo,email,password);

            //create user
            createUser(email,password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

        }    
        

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-4 text-center font-bold">Please Register</h2>
            <form onSubmit={handleRegister} className=" w-full lg:w-1/2 mx-auto">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" 
                        name="name"
                        placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" 
                        name="photo"
                        placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p className="text-center">Already have an account? <Link className="text-blue-600 font-bold" to={'/login'}>Login</Link></p>

         
        </div>
    );
};

export default Register;