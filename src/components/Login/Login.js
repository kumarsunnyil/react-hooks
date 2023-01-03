import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

import "./Login.scss";

const Login = () => {
  const {setUsername, setShowProfile} = useContext(LoginContext);
  const handleChange = (e) => {
    setUsername(e.target.value);

  }
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label for="username">Username</label>
          <div className="requirements">Must be a valid username address.</div>
        </div>

        <div>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder=" "
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          />
          <label for="password">Password</label>
          <div className="requirements">
            Your password must be at least 6 characters as well as contain at
            least one uppercase, one lowercase, and one number.
          </div>
        </div>

        <button onClick={()=>setShowProfile(true)}> Login </button>
      </form>
    </div>
  );
};

export default Login;
