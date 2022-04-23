import {FC} from "react";
import {NavLink} from "react-router-dom";
import * as yup from 'yup';
import {useFormik} from "formik";
import {useAppDispatch} from "hooks/useAppDispatch";
import MQForm from "modules/MQForm";
import MQButton from "modules/MQButton";
import MQImage from "modules/MQImage";

import logo from 'assets/images/logo.png';
import './style.scss';
import {loginThunk} from "../../storage/slices/auth";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Invalid Email Address').required('Field is Required'),
      password: yup.string().required('Field is Required'),
    }),
    onSubmit: async (values) => {
      await dispatch(loginThunk(values));
    }
  })
  return (
    <div className="app-login">
      <MQForm className="app-login__form" onSubmit={formik.handleSubmit}>
        <MQForm.Group className="app-login__logo">
          <MQImage width={200} height="auto" src={logo}/>
        </MQForm.Group>
        <MQForm.Group>
          <MQForm.Label required>
            {"Email Address"}
          </MQForm.Label>
          <MQForm.Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={!!formik.touched.email && !!formik.errors.email}
          />
          <MQForm.Feedback type="invalid" touched={!!formik.touched.email}>{formik.errors.email}</MQForm.Feedback>
        </MQForm.Group>
        <MQForm.Group>
          <MQForm.Label required>
            {"Password"}
          </MQForm.Label>
          <MQForm.Input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={!!formik.touched.password && !!formik.errors.password}
          />
          <MQForm.Feedback type="invalid" touched={!!formik.touched.password}>{formik.errors.password}</MQForm.Feedback>
        </MQForm.Group>
        <MQForm.Group>
          <MQButton type="submit" full>{"Login"}</MQButton>
        </MQForm.Group>
        <MQForm.Group>
          <p className="mq-text-center">
            <span className="mq-mr-xs">{"Have not an Account?"}</span>
            <NavLink to={'/register/details'}>{"Register"}</NavLink>
          </p>
        </MQForm.Group>
      </MQForm>
    </div>
  );
}

export default Login;