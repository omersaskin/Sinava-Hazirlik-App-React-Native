import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function PuanHesapla({ navigation, route, navigation: {goBack} }) {
  const { testId } = route.params;
  var numberId;

  return(
  <ScrollView style={{flex: 1, paddingHorizontal: 30, paddingVertical: 50}}>
    <Button icon="calculator" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => navigation.navigate("PuanHesaplaTYT")}>
      TYT Puan Hesapla
    </Button>
    <Button icon="calculator" mode="contained" theme={{ colors: { primary: '#538cf5' }}} uppercase={false} style={{borderRadius: 10, marginVertical: 10}} labelStyle={{ color: "white", fontSize: 15 }} onPress={() => navigation.navigate("PuanHesaplaAYT")}>
      AYT Puan Hesapla
    </Button>
    <View style={{flex: 1, alignItems: 'flex-end'}}>
      <Button style={{width: 100, marginRight: 0, backgroundColor: '#808080', marginBottom: 100, marginVertical: 30}} mode="contained" onPress={() => goBack()}>
        Geri
      </Button>
    </View>
  </ScrollView>
  );
}