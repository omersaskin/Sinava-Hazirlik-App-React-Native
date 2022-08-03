import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const colors = [
  {
    u:'İstatistikler',
    a: 'İstatistiklerini öğrenerek çalış',
    icon: 'star',
    id: 1,
  },
  {
    u: 'Test Çöz', 
    a: 'Test çözerek pratik hız kazan',
    icon: 'pencil',
    id: 2,
  },
  {
    u:'Ajanda Tut',
    a: 'Ajanda tutarak planlı ilerle',
    icon: 'list',
    id: 3,
  },
  {
    u:'Puan Hesapla',
    a: 'Puanını hesapla ve seviyeni gör',
    icon: 'calculator',
    id: 4,
  },
  {
    u:'Sınav Takibi Yap',
    a: 'Sınavını takip et ve kaçırma',
    icon: 'calendar',
    id: 5,
  },
];

const ExploreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        paginationActiveColor = '#538cf5'
        showPagination = {true}
        paginationStyleItem ={{marginTop: 40}}
        data={colors}
        renderItem={({ item }) => (
          <Card style={[styles.child, { backgroundColor: '#538cf5' }]}>
            <Card.Content style={{marginTop: '30%', justifyContent: 'center', alignItems:'center'}}>
              <Icon name={item.icon} color='#fff' size={72} />                
              <Title style={{color: '#fff', textAlign: 'center', fontSize: 32, paddingVertical: 20}}>{item.u}</Title>
              <Paragraph style={{color: '#fff', textAlign: 'center', fontWeight:'bold'}}>{item.a}</Paragraph>
              <Button style={{backgroundColor: '#808080', marginTop: 30}} mode="contained" onPress={() => navigation.navigate(item.id === 1 ? 'KonularSayfasi' : undefined || item.id === 2 ? 'KonularSayfasi' : undefined || item.id === 3 ? 'AjandaTut' : undefined || item.id === 4 ? 'PuanHesapla' : undefined || item.id === 5 ? 'SinavTakibiYap' : undefined, {id: item.id})}>
                Hemen Başla
              </Button>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', width: 300, backgroundColor: '#f5f5f5', margin: 50 },
  child: { width: 300, alignItems: 'center', justifyContent: 'center', borderRadius: 20 },
});

export default ExploreScreen;