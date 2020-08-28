import React, {useContext, useState, useEffect} from 'react';
import {MyContext} from '../context';
import {Card, ListItem, Button, Text} from 'react-native-elements';
import {View} from 'react-native';
import USER_SERVICE from '../services/users';

const Home = ({history}) => {
  const context = useContext(MyContext);

  const logout = () => {
    context.handleLogout().then().catch();
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const {
        data: {users},
      } = await USER_SERVICE.users();
      console.log(users);
      setUsers(users);
    };
    loadUsers();
  }, [setUsers]);

  return (
    <MyContext.Consumer>
      {(context) => {
        const {isLogged} = context.state;
        if (isLogged)
          return (
            <>
              <Card>
                <Card.Title>Usuarios registrados</Card.Title>
                <Card.Divider />
                <View>
                  {users.map((e, i) => (
                    <ListItem key={i} bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title>
                          {e.name} {e.lastName}
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          {e.date} - {e.email}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  ))}
                </View>
                <Button title="Cerrar sesion" onPress={logout} />
              </Card>
            </>
          );
        else {
          history.push('/');
        }
      }}
    </MyContext.Consumer>
  );
};

export default Home;
