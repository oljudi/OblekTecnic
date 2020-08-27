import React, {useContext, useState} from 'react';
import {MyContext} from '../context';
import {Text} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import {Link} from 'react-router-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUp = ({history}) => {
  const context = useContext(MyContext);

  const currentDay = new Date();
  const [date, setDate] = useState(currentDay);
  const [show, setShow] = useState(false);

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <Card>
              <Card.Title>Crea tu cuenta OBLEK</Card.Title>
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
              <Input
                placeholder="Nombre"
                leftIcon={{type: 'font-awesome', name: 'user'}}
              />
              <Input
                placeholder="Apellidos"
                leftIcon={{type: 'font-awesome', name: 'users'}}
              />
              <Input
                placeholder="Selecciona una fecha"
                rightIcon={{type: 'font-awesome', name: 'calendar-day'}}
                onFocus={setShow(true)}
              />
              {show ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  display="default"
                />
              ) : null}
              <Button title="Iniciar sesion" />
              <Card.Divider />
              <Text>Ya tienes Cuenta?</Text>
              <Link to="/">
                <Text>Incia Sesion</Text>
              </Link>
            </Card>
          </>
        );
      }}
    </MyContext.Consumer>
  );
};

export default SignUp;
