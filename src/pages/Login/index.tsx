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
          <div className="e-mail">
            <label htmlFor="email">
              E-mail
              <input type="text" className="bg-n80 text-wt text-normal w-full outline-0" />
            </label>
          </div>
          <div className="password">
            <label htmlFor="password">
              Senha
              <input type="password" className="bg-n80 text-wt text-normal outline-0" />
            </label>
          </div>
          <Input type="password" label="Nome do servidor" way="password" input="login" />

          <Input type="text" label="Nome do servidor" way="password" input="login" />
        </form>
        <Button submit full size="hg" label="Entrar" />
      </div>
    </div>
  </main>
);

export default Login;
