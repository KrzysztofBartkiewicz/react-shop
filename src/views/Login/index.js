import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../../components/organisms/Forms/LoginForm';
import AuthContext from '../../context/AuthContext';
import { routes } from '../../helpers/routes';
import { StyledLogin } from './StyledLogin';

const Login = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser && <Redirect to={routes.products} />}
      <StyledLogin>
        <LoginForm />;
      </StyledLogin>
    </>
  );
};

export default Login;
