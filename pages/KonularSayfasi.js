import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function KonularSayfasi({ navigation, route, navigation: {goBack} }) {
  const { id } = route.params;
  var testId;

  return(
  <ScrollView style={{flex: 1}}>
    <List.AccordionGroup>
      <List.Accordion title="Türkçe" id="1" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Item 1" />
      </List.Accordion>
      <List.Accordion title="Temel Matematik" id="2" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Temel Kavramlar" left={props => <List.Icon {...props} icon="folder-open" />} onPress={() => navigation.navigate(id === 1 ? "KonuDetaySayfasi" : "TestlerSayfasi", { testId: 1 })} />
        <List.Item title="Sayı Basamakları" left={props => <List.Icon {...props} icon="folder-open" />} onPress={() => navigation.navigate(id === 1 ? "KonuDetaySayfasi" : "TestlerSayfasi", { testId: 2 })} />
        <List.Item title="Rasyonel Sayılar" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Ondalıklı Sayılar" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Basit Eşitsizlikler" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Mutlak Değer" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Üslü Sayılar" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Köklü Sayılar" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Çarpanlara Ayırma" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Bölme - Bölünebilme" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Ebob - Okek" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Denklem Çözme" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Oran-Orantı" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Problemler" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Kümeler" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Fonksiyonlar" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Permütasyon" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Kombinasyon" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Binom" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
        <List.Item title="Olasılık" left={props => <List.Icon {...props} icon="folder-open" />} onPress={()=>this.gg()} />
      </List.Accordion>
      <View>
        <List.Accordion title="Sosyal Bilimler" id="3" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Item 3" />
        </List.Accordion>
      </View>
      <View>
        <List.Accordion title="Temel Fen Bilimleri" id="4" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Item 4" />
        </List.Accordion>
      </View>
      <View>
        <List.Accordion title="Türk Dili ve Edebiyatı" id="5" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Item 5" />
        </List.Accordion>
      </View>
      <View>
        <List.Accordion title="Sosyal Bilimler-1" id="6" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Item 6" />
        </List.Accordion>
      </View>
      <View>
        <List.Accordion title="Sosyal Bilimler-2" id="7" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Item 7" />
        </List.Accordion>
      </View>
      <View>
        <List.Accordion title="Matematik" id="8" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Item 8" />
        </List.Accordion>
      </View>
      <View>
        <List.Accordion title="Fen Bilimleri" id="9" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="Item 9" />
        </List.Accordion>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Button style={{width: 100, marginRight: 50, backgroundColor: '#808080', marginVertical: 30}} mode="contained" onPress={() => goBack()}>
          Geri
        </Button>
      </View>
    </List.AccordionGroup>
  </ScrollView>
  );
}
