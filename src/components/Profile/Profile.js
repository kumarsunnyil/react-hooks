import React, {useContext} from 'react'
import { LoginContext } from '../../Context/LoginContext'


const Profile = () => {

  const {username, showProfile} = useContext(LoginContext);
  return (
    <div>
      <h1>Profile</h1>
      <h2>UserName:{ username }</h2>
    </div>
  )
}

export default Profile
