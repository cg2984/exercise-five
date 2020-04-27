import React from "react";

function UserProfile({userInfo}){
	return (
		<div>
			<h1> User Profile</h1>	
			<p> User Email: {userInfo.email}</p>
		</div>
	);
}

export default UserProfile;