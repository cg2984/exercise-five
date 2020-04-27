import React from "react";
import CreateAccountForm from "../components/create_account_form"

function Account({CreateFunc}){
	return (
		<div>
			<h1>Create Account</h1>	
			<CreateAccountForm CreateFunc={CreateFunc}/>
		</div>
	);
}

export default Account;