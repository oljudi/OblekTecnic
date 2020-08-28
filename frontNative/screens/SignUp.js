import React, {useContext, useState} from 'react';
import {MyContext} from '../context';
import {Text} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import {Link} from 'react-router-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {Formik} from 'formik';

const SignUp = ({history}) => {
  const context = useContext(MyContext);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const signup = (values) => {
    context.handleSignupSubmit(values).then((res) => {
      console.log(res);
      if (res.data.success) history.push('/');
    });
  };

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <Card>
              <Card.Title>Crea tu cuenta OBLEK</Card.Title>
              <Card.Divider />
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  name: '',
                  lastName: '',
                  date: new Date(),
                }}
                onSubmit={(values) => signup(values)}>
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
                    <Input
                      placeholder="Nombre"
                      leftIcon={{type: 'font-awesome', name: 'user'}}
                      onBlur={handleBlur('name')}
                      onChangeText={handleChange('name')}
                      value={values.name}
                    />
                    <Input
                      placeholder="Apellidos"
                      leftIcon={{type: 'font-awesome', name: 'users'}}
                      onBlur={handleBlur('lastName')}
                      onChangeText={handleChange('lastName')}
                      value={values.lastName}
                    />
                    <Card.Divider />
                    <Button title="Registro!" onPress={handleSubmit} />
                  </>
                )}
              </Formik>
              <Card.Divider />
              <Text>Ya tienes Cuenta?</Text>
              <Link to="/">
                <Text>Inicia Sesion</Text>
              </Link>
            </Card>
          </>
        );
      }}
    </MyContext.Consumer>
  );
};

export default SignUp;
