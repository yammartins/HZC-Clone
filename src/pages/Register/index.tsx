import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '~/assets/logo.svg';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { useAuth } from '~/contexts';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [text, onText] = useState('');
  const [error, onError] = useState<string | null>(null);
  const [password, onPassword] = useState('');

  const {
    user,
    auth,
  } = useAuth();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      password,
      identifier: text,
    };

    await auth(data, onError);
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
          <form onSubmit={submit}>
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
            {error && (<span className="text-red font-semibold text-normal text-center">{error}</span>)}

            <Button submit full size="hg" label="Entrar" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
