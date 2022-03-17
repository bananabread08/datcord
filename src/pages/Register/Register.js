import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  });
  const { signUp } = useUserAuth();
  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      setData({ ...data, error: err.message });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <div>
          <input
            type="email"
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={handleChange}
            placeholder="Password"
            name="password"
          />
        </div>
        <div>
          <button disabled={loading}>
            {loading ? 'Loading..' : 'Register'}
          </button>
        </div>
        <div>
          <p>
            Already have an account?<Link to="/">Log In</Link>
          </p>
        </div>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}
