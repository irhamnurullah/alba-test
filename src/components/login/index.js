import { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, InputPassword } from '../input';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post(`https://reqres.in/api/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        const token = localStorage.setItem('token', response?.data.token);
        setIsLoading(false);
        setEmail('');
        setPassword('');
        window.location.replace('/profile');

        return;
      }
      return;
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile');
    }
  }, []);

  return (
    <div className="text-sm sm:text-base ">
      <div className="container mx-auto mt-5">
        <div className="flex justify-center">
          <div className="space-y-4 border rounded-xl p-4">
            <h1 className="font-bold text-2xl">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                labelName="email"
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={handleChangeEmail}
              />
              <InputPassword
                labelName="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={handleChangePassword}
              />

              <div className="pt-4 flex justify-end">
                {isLoading ? (
                  <p>Processing</p>
                ) : (
                  <button
                    type="submit"
                    className="px-3 py-1 bg-primary rounded text-yellow-700 block"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
