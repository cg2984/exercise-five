import React from "react";

function Header({LogoutFunction, isLoggedIn}){
	return (
		<div>
			<nav>
				{isLoggedIn && <a href="/">Profile</a>}
				{!isLoggedIn &&<a href="/login">Log Out</a>}
				{!isLoggedIn &&<a href="/create-account">Create Account</a>}
				{isLoggedIn && <a onClick = {() => LogoutFunction()}>Log Out</a>}
			</nav>
		</div>
	);
}

export default Header;