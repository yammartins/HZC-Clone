import Button from '~/components/Button';
import Input from '~/components/Input';

import Logo from '../../assets/logo.svg';

const Login: React.FC = () => (
  <main className="h-screen w-screen flex items-center justify-center">
    <div className="login-wrapper">
      <div className="welcome">
        <p>Bem-vindo à plataforma da</p>
        <img src={Logo} alt="logo do nosso site" className="w-40 h-[10.25rem]" />
        <p>Utilize seus dados para acessar a sua conta</p>
      </div>
      <div className="form">
        <form action="">
          <Input type="text" className="login" label="E-mail" way="e-mail" />
          <Input type="password" className="login" label="Senha" way="password" />
        </form>
        <Button submit full size="hg" label="Entrar" />
      </div>
    </div>
  </main>
);

export default Login;
