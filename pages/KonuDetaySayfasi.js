import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const KonuDetaySayfasi = ({navigation: {goBack}}) => {
  return (
    <View style={styles.container}>
      <Text>Henüz içerik eklenmedi.</Text>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Button style={{width: 100, marginRight: 20, backgroundColor: '#808080', marginVertical: 30}} mode="contained" onPress={() => goBack()}>
          Geri
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#f5f5f5', padding: 30 },
});

export default KonuDetaySayfasi;