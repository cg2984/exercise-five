import React from "react";

function CreateAccountForm({CreateFunc}){
	return (
		<div>
			<h1>Create Account Form</h1>
			<form className = "signUpForm" onSubmit={(e) => CreateFunc(e)}>
				<label htmlFor="createEmail">Email</label>
				<input type = "email" name = "createEmail"/>
				<label htmlFor="createPassword">Password</label>
				<input type = "password" name = "createPassword"/>
				<button>Create Account</button>
			</form>	
		</div>
	);
}

export default CreateAccountForm;