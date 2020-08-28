import React, {useContext} from 'react';
import {Text} from 'react-native';
import {MyContext} from '../context';
import {Input, Card, Button} from 'react-native-elements';
import {Link} from 'react-router-native';
import {Formik} from 'formik';

const Login = ({history}) => {
  const context = useContext(MyContext);
  const login = (values) => {
    context.handleLoginSubmit(values).then((res) => {
      if (res.user) history.push('/home');
    });
  };

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <Card>
              <Card.Title>Bienvenido a tu cuenta OBLEK</Card.Title>
              <Card.Divider />
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={(values) => login(values)}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <>
                    <Input
                      placeholder="Email"
                      leftIcon={{type: 'font-awesome', name: 'envelope'}}
                      onBlur={handleBlur('email')}
                      onChangeText={handleChange('email')}
                      value={values.email}
                    />
                    <Input
                      placeholder="Contraseña"
                      leftIcon={{type: 'font-awesome', name: 'lock'}}
                      secureTextEntry={true}
                      onBlur={handleBlur('password')}
                      onChangeText={handleChange('password')}
                      value={values.password}
                    />
                    <Button title="Iniciar sesion" onPress={handleSubmit} />
                  </>
                )}
              </Formik>
              <Card.Divider />
              <Text>Aun no tienes una cuenta?</Text>
              <Link to="/signup">
                <Text>Registrate</Text>
              </Link>
            </Card>
          </>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Login;
