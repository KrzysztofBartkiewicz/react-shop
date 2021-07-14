import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import SignUpForm from '../../components/organisms/Forms/SignUpForm';
import AuthContext from '../../context/AuthContext';
import { routes } from '../../helpers/routes';
import { StyledSignup } from './StyledSignup';

const Signup = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser && <Redirect to={routes.products} />}
      <StyledSignup>
        <SignUpForm />
      </StyledSignup>
    </>
  );
};

export default Signup;
