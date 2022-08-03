import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function TestlerSayfasi({ navigation, route, navigation: {goBack} }) {
  const { testId } = route.params;
  var numberId;

  return(
  <ScrollView style={{flex: 1, paddingHorizontal: 30, paddingVertical: 50}}>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => navigation.navigate("SoruCozumSayfasi", { testId: testId, numberId: 1 })}>
      Test-1
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-2
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-3
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-4
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-5
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-6
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-7
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-8
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-9
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-10
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-11
    </Button>
    <Button icon="pencil" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => console.log('Pressed')}>
      Test-12
    </Button>
    <View style={{flex: 1, alignItems: 'flex-end'}}>
      <Button style={{width: 100, marginRight: 0, backgroundColor: '#808080', marginBottom: 100, marginVertical: 30}} mode="contained" onPress={() => goBack()}>
        Geri
      </Button>
    </View>
  </ScrollView>
  );
}
