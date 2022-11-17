import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContex";
import useToken from "../../Houcks/useToken";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signupemail, updatename } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  // const [useremail , setuseremail] = useState('')
  // const [token] = useToken(useremail)
  const navegate = useNavigate();


  // if(token){
  //   navegate('/')
  // }


  // submit function

  const signupbtn = (value) => {
    console.log(value);
    signupemail(value.email, value.password)
      .then((result) => {
        setLoginError("");
        const user = result.user;
        console.log(user);
        updatename(value.name).then((res) => {
          setuserf(value.email, value.name);
          });
      })
      .catch((error) => {
        setLoginError(error.message);
        console.error(error);
      });
  };

  const setuserf = (email, name) => {
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setuseremail(email)
        tokenfunction(email)
      });
  };

  //joot token

  const tokenfunction = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accesstoken) {
          localStorage.setItem("token", data.accesstoken);
          navegate("/");
        }
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96  border-2  p-7">
        <h2 className="text-xl text-center">Sogn Up</h2>
        <form onSubmit={handleSubmit(signupbtn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is requird" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors?.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is requird" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors?.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is requird",
                minLength: { value: 6, message: "password min length 6 " },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors?.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent mt-4 w-full"
            value="Signup"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          have an account{" "}
          <Link className="text-secondary" to="/login">
            log in
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Signup;
