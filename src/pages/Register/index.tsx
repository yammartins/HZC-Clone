import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '~/assets/logo.svg';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { useAuth } from '~/contexts';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [text, onText] = useState('');
  const [nickname, onNickname] = useState('');
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
          <img src={Logo} alt="logo do nosso site" className="w-40 h-[12rem]" />
          <p>Bem-vindo à nossa plataforma!</p>
          <p>Se é a sua primeira vez em nosso site, registre-se:</p>
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
              type="text"
              className="login"
              label="Apelido"
              way="user"
              value={nickname}
              onChange={({ target }) => onNickname(target.value)}
            />
            <Input
              type="password"
              className="login"
              label="Senha"
              way="password"
              value={password}
              onChange={({ target }) => onPassword(target.value)}
            />
            <Link to="/login">
              <span className="to-register">Já possui conta? Acesse por aqui</span>
            </Link>

            <Button submit full size="hg" label="Registrar" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
