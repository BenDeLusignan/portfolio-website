import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile | Ben de Lusignan"; // Set your desired title here
  }, []);
  
  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the profile page content.</p>
    </div>
  );
};

export default Profile;
