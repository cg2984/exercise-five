import React from "react";
import LoginForm from "../components/login_form.js"

function Login({LoginFunc}){
	return (
		<div>
			<h1>Login</h1>	
			<LoginForm LoginFunc={LoginFunc}/>
		</div>
	);
}

export default Login;