import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../redux/actions';

const TodoApp = ({ todo_list, addTodo, editTodo, deleteTodo, navigation: {goBack}}) => {
  const [task, setTask] = React.useState('');
  const [durum, setDurum] = React.useState(false);
  const [aktif, setAktif] = React.useState(false);
  const [editId, seteditId] = React.useState(false);

  const handleAddTodo = () => {
    addTodo(task)
    setTask('')
  }

  const handleDeleteTodo = (id) => {
    deleteTodo(id)
  }

  const handleEditTodo = (id) => {
    setDurum(true);
    setAktif(false);

    editTodo(id, task)
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={{margin: 30, marginTop: 50}}>
      <TextInput
        theme={{ colors: { primary: '#538cf5' }}}
        style={{width: '100%'}}
        mode="outlined"
        label="Yapılacak Görev"
        placeholder="Açıklama"
        onChangeText={task => setTask(task)}
      />
      <Button mode="contained"
        style={{marginTop: 30, marginBottom: 30, backgroundColor: '#808080'}}
        onPress={handleAddTodo} color="#000"
       >
        Görevi Ekle
      </Button>
        {todo_list.map((u, i) => {
          return(
            <View key={i}>
              <Card style={{borderRadius: 20, marginVertical: 15}}>
                <Card.Content>
                <TextInput
                  theme={{ colors: { primary: '#538cf5' }}}
                  editable={aktif}
                  style={{width: '100%'}}
                  mode="outlined"
                  label="Yapılacak Görev"
                  placeholder="Açıklama"
                  onChangeText={task => setTask(task) + (u.task = task)}
                  value={u.task}
                />
                <View style={{flex: 1, flexDirection: 'row'}}>
                  {
                    aktif === true && u.id === editId
                    ?
                      <View style={{flex: 1, alignItems: 'flex-start', paddingTop: 15, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                        {
                          /*
                          <Text>{u.task === task && durum === true ? "Notunuz güncellendi." : undefined}</Text>
                          */
                        }
                        <Button style={{borderRadius: 10}} color="#538cf5" onPress={() => handleEditTodo(u.id)}>
                          <Icon name="check" color='#538cf5' size={24} />                
                        </Button>
                      </View>
                    :
                    undefined
                  }
                  <View style={{flex: 1, alignItems: 'flex-end', paddingTop: 15, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Button style={{borderRadius: 10}} color="#538cf5" onPress={() => setAktif(true) + seteditId(u.id)}>
                      <Icon name="edit" color='#538cf5' size={24} />                
                    </Button>
                    <Button style={{borderRadius: 10}} color="#538cf5" onPress={() => handleDeleteTodo(u.id)}>
                      <Icon name="dropbox" color='#538cf5' size={24} />                
                    </Button>
                  </View>
                </View>
                </Card.Content>
              </Card> 
            </View>
            );

        })}
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Button style={{width: 100, marginRight: 0, backgroundColor: '#808080', marginVertical: 30}} mode="contained" onPress={() => goBack()}>
                Geri
              </Button>
            </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list,
  }
}

const mapDispatchToProps = { addTodo, deleteTodo, editTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)