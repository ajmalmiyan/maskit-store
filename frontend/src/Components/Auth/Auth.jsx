import React from "react";
import {Login} from "./Login";
import {Signup} from "./Signup";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {  AuthWrapper,AuthSection,AuthNav,AuthMain} from './Styles'

export const Auth = () => {
  const { auth } = useParams();
  const history = useHistory();
  const [current, setCurrent] = React.useState(auth);
  const isError = useSelector((state) => state.authReducer.isError);
  // eslint-disable-next-line 
  const [open, setOpen] = React.useState(false);

  const onSwitchHandler=(flag)=> {
    if (flag === 1) {
      setCurrent("signup");
      history.push("/auth/signup");
    } else {
      setCurrent("login");
      history.push("/auth/login");
    }
  }

  React.useEffect(() => {
    if (isError) {
      setOpen(true);
    }
  }, [isError]);

  return (
    <AuthWrapper>
      <AuthSection>
        <AuthNav status={current}>
          <div onClick={() => onSwitchHandler(0)}>
            <h1>Login</h1>
          </div>
          <div onClick={() => onSwitchHandler(1)}>
            <h1>Signup</h1>
          </div>
        </AuthNav>
        <AuthMain>{current === "login" ? <Login /> : <Signup />}</AuthMain>
      </AuthSection>
    </AuthWrapper>
  );
}