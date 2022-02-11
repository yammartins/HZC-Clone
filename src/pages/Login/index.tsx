import Button from '~/components/Button';
import Input from '~/components/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
 
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
      identifier: 'ymprado2010@gmail.com',
      password: 'Ziniti123!',
    })
    .then((res) => {
      //asdasd
      console.log(res.data);
    })
    .catch((err) => {
      //asdasd
      console.log(err.response);
    })
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
        <form action="" onSubmit={submit}>
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
        </form>
        <Button submit full size="hg" label="Entrar" />
      </div>
    </div>
  </main>
);
};

export default Login;
