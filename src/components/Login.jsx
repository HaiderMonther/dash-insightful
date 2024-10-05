import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // لاستيراد useNavigate
import logo from '../assets/images/logo3.svg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiError, setApiError] = useState('');

  const navigate = useNavigate(); // استخدام useNavigate لتوجيه المستخدم

  const handleLogin = async (e) => {
    e.preventDefault();
    setUsernameError(false);
    setPasswordError(false);
    setApiError('');

    let hasError = false;

    if (username === '') {
      setUsernameError(true);
      hasError = true;
    }

    if (password === '') {
      setPasswordError(true);
      hasError = true;
    }

    if (!hasError) {
      try {
        const response = await fetch('http://198.244.227.48:8082/auth/admins/login', {
          method: 'POST',
          headers: {
            "Authorization" : `dfdf a415862b-3114-418b-ab6c-31388938680d`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Login successful:', data);
          
          navigate('/');  
        } else {
        
          console.log('Login failed:', data);
          setApiError(data.message || 'خطأ في تسجيل الدخول');
        }
      } catch (error) {

        console.error('Error connecting to API:', error);
        setApiError('حدث خطأ أثناء الاتصال بالسيرفر. حاول مرة أخرى.');
      }
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={logo} className="mx-auto h-30 w-60" />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight login-text-color">
            تسجيل الدخول
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-7" autoComplete="off">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-bold leading-6 login-text-color"
              >
                اسم المستخدم
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                  className={`block w-full pr-3 rounded-md border-0 focus:border-blue-500 focus:ring-2 focus:ring-blue-500  py-1.5 shadow-sm ring-1 ring-inset placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    usernameError ? 'ring-red-900' : 'ring-gray-300'
                  }`}
                  placeholder="أدخل اسم المستخدم"
                />
                {usernameError && (
                  <p className="text-red-900 text-sm mt-2">اسم المستخدم مطلوب</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold leading-6 login-text-color"
              >
                كلمة المرور
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className={`block w-full pr-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                    passwordError ? 'ring-red-900' : 'ring-gray-300'
                  }`}
                  placeholder="أدخل كلمة المرور"
                />
                {passwordError && (
                  <p className="text-red-900 text-sm mt-2">كلمة المرور مطلوبة</p>
                )}
              </div>
            </div>

            {apiError && (
              <p className="text-red-500 text-sm mt-2">{apiError}</p>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md login-btn-bg text-white px-3 py-1.5 text-sm font-light leading-6 shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                تسجيل الدخول
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
