
import "../components/css/logs.css";
import { FormContext } from '../components/Context/LoginContext'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'


function Logs() {
  const { formData, setFormData } = useContext(FormContext);

  const  navigate  = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    navigate('/')
  };

  return (
    <div className="Lbody">
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p style={{color: 'grey'}}>Login in Large Library of Free Movies</p>
          <input
            id='userName'
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
          <input
            id='email'
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
          <input
            id='password'
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          
            <button type="submit"  className="subtn">Login</button>
          
          <p className="fpas" onClick={() => alert('type anything')}>Forget the password?</p>
        </form>
      </div>
      <div className="back">
      </div>
    </div>
  );
}
export default Logs;
