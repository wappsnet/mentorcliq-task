import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import MQImage from "modules/MQImage";
import logo from "assets/images/logo.png";
import RegisterDetails from "./RegisterDetails";
import RegisterAuth from "./RegisterAuth";
import './style.scss';
import RegisterJobInfo from "./RegisterJobInfo";

const Register: FC = () => (
  <div className="app-register">
    <div className="app-register__step">
      <div className="app-register__logo">
        <MQImage width={200} height="auto" src={logo}/>
      </div>
      <Switch>
        <Route path="/register/details" exact>
          <RegisterDetails/>
        </Route>
        <Route path="/register/job" exact>
          <RegisterJobInfo/>
        </Route>
        <Route path="/register/auth" exact>
          <RegisterAuth />
        </Route>
      </Switch>
    </div>
  </div>
);

export default Register;