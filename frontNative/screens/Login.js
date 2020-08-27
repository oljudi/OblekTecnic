import React, {useContext} from 'react';
import {Text} from 'react-native';
import {MyContext} from '../context';
import {Input, Card, Button} from 'react-native-elements';
import {Link} from 'react-router-native';

const Login = ({history}) => {
  const context = useContext(MyContext);
  doLogin = () => {};

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <Card>
              <Card.Title>Bienvenido a tu cuenta OBLEK</Card.Title>
              <Card.Divider />
              <Input
                placeholder="Email"
                leftIcon={{type: 'font-awesome', name: 'envelope'}}
              />
              <Input
                placeholder="Contraseña"
                leftIcon={{type: 'font-awesome', name: 'lock'}}
                secureTextEntry={true}
              />
              <Button title="Iniciar sesion" />
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
