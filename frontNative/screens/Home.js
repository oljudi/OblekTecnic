import React, {useContext} from 'react';
import {MyContext} from '../context';
import {Card, ListItem, Button} from 'react-native-elements';
import {View} from 'react-native';

const Home = ({history}) => {
  const context = useContext(MyContext);

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <>
            <Card>
              <Card.Title>Usuarios registrados</Card.Title>
              <Card.Divider />
              <View>
                <ListItem key="hola" bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>Diego Olvera</ListItem.Title>
                    <ListItem.Subtitle>Prueba de nacimiento</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </View>
              <Button title="Cerrar sesion" />
            </Card>
          </>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Home;
