import React from "react";

function Header({LogoutFunc, loggedIn}){
	return (
		<div>
			<nav>
				{loggedIn && <a href="/">Profile</a>}
				{!loggedIn &&<a href="/login">Log Out</a>}
				{!loggedIn &&<a href="/create-account">Create Account</a>}
				{loggedIn && <a onClick = {() => LogoutFunc()}>Log Out</a>}
			</nav>
		</div>
	);
}

export default Header;