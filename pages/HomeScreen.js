import * as React from 'react';
import { StyleSheet, StatusBar, View, ScrollView } from 'react-native';
import { Card, Title, List, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar hidden={true} />
      <View>
        <Card>
          <Card.Content style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#538cf5', paddingVertical: 50}}>
            <Title style={{width: '40%', marginLeft: '5%', color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Ben YKS Koçun, sizinle tanıştığım için çok mutluyum!</Title>
            <Card.Cover style={{width: '40%', height: 150, marginLeft: '10%'}} source={require('../assets/elections-g625b68819_640.png')} />
          </Card.Content>
        </Card>
      </View>
      <View style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 550, marginTop: -20, backgroundColor: '#fdfdfd'}}>
        <List.Section>
          <List.Subheader>Özellikleri Keşfet</List.Subheader>
          <List.Item style={{backgroundColor: '#f5f5f5', marginHorizontal: 25, marginVertical: 10, borderRadius: 45}} title="İstatistiklerini öğrenerek çalış" left={() => <List.Icon color="#538cf5" icon="rocket" />} />
          <List.Item style={{backgroundColor: '#f5f5f5', marginHorizontal: 25, marginVertical: 10, borderRadius: 45}} title="Test çözerek pratik hız kazan" left={() => <List.Icon color="#538cf5" icon="rocket" />} />
          <List.Item style={{backgroundColor: '#f5f5f5', marginHorizontal: 25, marginVertical: 10, borderRadius: 45}} title="Ajanda tutarak planlı ilerle" left={() => <List.Icon color="#538cf5" icon="rocket" />} />
          <List.Item style={{backgroundColor: '#f5f5f5', marginHorizontal: 25, marginVertical: 10, borderRadius: 45}} title="Puanını hesapla ve seviyeni gör" left={() => <List.Icon color="#538cf5" icon="rocket" />} />
          <List.Item style={{backgroundColor: '#f5f5f5', marginHorizontal: 25, marginVertical: 10, borderRadius: 45}} title="Sınavını takip et ve kaçırma" left={() => <List.Icon color="#538cf5" icon="rocket" />} />
        </List.Section>
      </View>
      {
        /*
      <View>
        <Card>
          <Card.Content style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f5f5f5', paddingVertical: 50}}>
            <View style={{width: '50%', marginLeft: '5%', height: 250, flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <Icon name="heart" color='#538cf5' size={30} />                
                <Title style={{marginLeft: 10, fontSize: 16}}>Çalışmayı Sev</Title>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Icon name="gift" color='#538cf5' size={30} />                
                <Title style={{marginLeft: 15, fontSize: 16}}>Kendini Ödüllendir</Title>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Icon name="plus" color='#538cf5' size={30} />                
                <Title style={{marginLeft: 15, fontSize: 16}}>Pozitif Ol</Title>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Icon name="asterisk" color='#538cf5' size={30} />                
                <Title style={{marginLeft: 15, fontSize: 16}}>Hayatı Önemse</Title>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Icon name="coffee" color='#538cf5' size={30} />                
                <Title style={{marginLeft: 15, fontSize: 16}}>Mola Ver</Title>
              </View>
            </View>
            <Title style={{width: '40%', marginLeft: '5%', paddingVertical: 50, marginTop: 36, color: '#000', fontSize: 15, textAlign: 'center'}}>
                <Icon name="thumbs-up" color='#538cf5' size={72} />                
            </Title>
          </Card.Content>
        </Card>
      </View>
        */
      }

    </ScrollView>
  );
};

export default HomeScreen;