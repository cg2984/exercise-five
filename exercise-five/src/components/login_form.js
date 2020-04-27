import React from "react";

function LoginForm({LoginFunc}){
	return (
		<div>
			<h1>Login Form</h1>	
			<form className = "signUpForm" onSubmit={(e) => LoginFunc(e)}>
				<label htmlFor="loginEmail">Email</label>
				<input type = "email" name = "loginEmail"/>
				<label htmlFor="loginPassword">Password</label>
				<input type = "password" name = "loginPassword"/>
				<button>Login</button>
			</form>
		</div>
	);
}

export default LoginForm;