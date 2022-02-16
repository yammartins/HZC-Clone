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
  const [confirmPassword, onConfirmPassword] = useState('');

  const {
    create,
  } = useAuth();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (! text || ! nickname || ! password || ! confirmPassword || password !== confirmPassword) {
      if (! text || ! nickname || ! password || ! confirmPassword) {
        onError('Preencha os campos');

        return;
      }

      onError('As senhas precisam ser iguais.');

      return;
    }

    const data = {
      email: text,
      username: nickname,
      password,
    };

    await create(data, onError);

    navigate('/');
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
              type="email"
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
            <Input
              type="password"
              className="login"
              label="Confirme sua senha"
              way="password"
              value={confirmPassword}
              onChange={({ target }) => onConfirmPassword(target.value)}
            />
            <Link to="/" className="to-acess">
              Já possui conta? Acesse por aqui
            </Link>

            <Button submit full size="hg" label="Registrar" />

            {error && <span className="text-red font-semibold text-normal text-center">{error}</span>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
