import Button from '~/components/Button';

import Logo from '../../assets/logo.svg';

const Login: React.FC = () => (
  <main className="w-screen h-screen">
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
              <input type="text" name="email" />
            </label>
          </div>
          <div className="password">
            <label htmlFor="password">
              <input type="password" name="password" />
            </label>
          </div>
        </form>
        <Button submit full label="Entrar" />
      </div>
    </div>
  </main>
);

export default Login;
