import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import Input from '~/components/Input';

import Logo from '../../assets/logo.svg';
import api from '../../services';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, onError] = useState(false);
  const [text, onText] = useState('');
  const [password, onPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    await api.post('/auth/local', {
      identifier: text,
      password,
    })
      .then(({ data }) => navigate('/picos'))
      .catch(({ message }) => onError(message));

    setTimeout(() => onError(false), 3000);
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="login-wrapper">
        <div className="welcome">
          <p>Bem-vindo à plataforma da</p>
          <img src={Logo} alt="logo do nosso site" className="w-40 h-[10.25rem]" />
          <p>Utilize seus dados para acessar a sua conta</p>
        </div>
        <div className="form">
          <form action="" onSubmit={submit} id="acess">
            <Input
              type="text"
              className="login"
              label="E-mail"
              way="e-mail"
              value={text}
              onChange={({ target }) => onText(target.value)}
            />
            <Input
              type="password"
              className="login"
              label="Senha"
              way="password"
              value={password}
              onChange={({ target }) => onPassword(target.value)}
            />
            {error && (<span className="text-red font-semibold text-normal text-center">Por favor, insira um usuário ou senha válidos!</span>)}

            <Button submit full size="hg" label="Entrar" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
