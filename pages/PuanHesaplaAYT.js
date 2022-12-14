import React, { Component, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph, Divider, TextInput, Checkbox } from 'react-native-paper';

export default class PuanHesaplaAYT extends Component {
   state = {
      turkceDogruSayisi: '',
      turkceYanlisSayisi: '',
      sosDogruSayisi: '',
      sosYanlisSayisi: '',
      matDogruSayisi: '',
      matYanlisSayisi: '',
      fenDogruSayisi: '',
      fenYanlisSayisi: '',
      tded: '',
      tdey: '',
      tad: '',
      tay: '',
      cod: '',
      coy: '',
      ta2d: '',
      ta2y: '',
      co2d: '',
      co2y: '',
      feld: '',
      fely: '',
      dinad: '',
      dinay: '',
      matd: '',
      maty: '',
      fizd: '',
      fizy: '',
      kimd: '',
      kimy: '',
      biyod: '',
      biyoy: '',
      tytHamPuan: '',
   }

   turkceDogruSayisi = (text) => {
      this.setState({ turkceDogruSayisi: text })
   }

   turkceYanlisSayisi = (text) => {
      this.setState({ turkceYanlisSayisi: text })
   }

   sosDogruSayisi = (text) => {
      this.setState({ sosDogruSayisi: text })
   }

   sosYanlisSayisi = (text) => {
      this.setState({ sosYanlisSayisi: text })
   }

   matDogruSayisi = (text) => {
      this.setState({ matDogruSayisi: text })
   }

   matYanlisSayisi = (text) => {
      this.setState({ matYanlisSayisi: text })
   }

   fenDogruSayisi = (text) => {
      this.setState({ fenDogruSayisi: text })
   }

   fenYanlisSayisi = (text) => {
      this.setState({ fenYanlisSayisi: text })
   }

   diplomaPuani = (text) => {
      this.setState({ diplomaPuani: text })
   }

   aytPuanHesapla = (diplomaPuani, tded, tdey, tad, tay, cod, coy, ta2d, ta2y, co2d, co2y, feld, fely, dinad, dinay, matd, maty, fizd, fizy, kimd, kimy, biyod, biyoy) => {

      if (this.state.isChecked) {
         diplomaPuani = ((diplomaPuani * 0.6) / 2);
      } else {
         diplomaPuani = (diplomaPuani * 0.6);
      }

      var tdenet = tded - tdey / 4;
      var tanet = tad - tay / 4;
      var conet = cod - coy / 4;
      var ta2net = ta2d - ta2y / 4;
      var co2net = co2d - co2y / 4;
      var felnet = feld - fely / 4;
      var dinanet = dinad - dinay / 4;
      var mat2net = matd - maty / 4;
      var fiznet = fizd - fizy / 4;
      var kimnet = kimd - kimy / 4;
      var biyonet = biyod - biyoy / 4;

      var tytAYTHamPuan = (tytTurkceNet * 1.32) + (tytTemelMatematikNet * 1.32) + (tytSosyalBilimlerNet * 1.36) + (tytFenBilimleriNet * 1.36);

      var aytHamPuanSozel = (tdeNet * 3) + (taNet * 2.8) + (cogNet * 3.33) + (taikiNet * 2.91) + (cogikiNet * 2.91) + (felNet * 3) + (dinNet * 3.33) + 100 + tytAYTHamPuan;
      var aytHamPuanSayisal = (maNet * 3) + (faNet * 2.85) + (kaNet * 3.07) + (baNet * 3.07) + 100 + tytAYTHamPuan;
      var aytHamPuanEsit = (maNet * 3) + (tdeNet * 3) + (taNet * 2.8) + (cogNet * 3.33) + 100 + tytAYTHamPuan;

      var aytYerlestirmePuanSozel = aytHamPuanSozel + parseFloat(aytdiplomaPuani);
      var aytYerlestirmePuanSayisal = aytHamPuanSayisal + parseFloat(aytdiplomaPuani);
      var aytYerlestirmePuanEsit = aytHamPuanEsit + parseFloat(aytdiplomaPuani);
      
       Alert.alert(
         "Hesaplama Sonucu",
         tytYerlestirmePuan,
         [
           { text: "Tamam", onPress: () => console.log("OK Pressed") }
         ],
       );
   }

  render() {
    const state = this.state;

    return (
    <ScrollView style={styles.container}>
      <View>
      <Card>
        <Card.Content>
          <Title>AYT Puan Hesapla</Title>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="T??rk Dili ve Edebiyat??"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="T??rk Dili ve Edebiyat??"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Tarih-1"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Tarih-1"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Co??rafya-1"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Co??rafya-1"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Tarih-1"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Tarih-1"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Tarih-2"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Tarih-2"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Felsefe Grubu"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Felsefe Grubu"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Din K??lt??r??"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Din K??lt??r??"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Matematik"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Matematik"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Fizik"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Fizik"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Kimya"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Kimya"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Biyoloji"
              placeholder="Do??ru Say??s??"
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Biyoloji"
              placeholder="Yanl???? Say??s??"
            />
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start'}}>
            <TextInput
              style={{width: '95%', margin: '2.5%'}}
              mode="outlined"
              label="Diploma Notu"
              placeholder="Orta????retim Ba??ar?? Puan??"
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              onPress={() => {
                setChecked({isChecked:!checked })
              }}
              color= "#538cf5"
            />
            <Text>??nceki sene bir programa yerle??tim.</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
            <Button style={{width: 150, marginRight: '2.5%', backgroundColor: '#808080', marginVertical: 15}} mode="contained" onPress={() => goBack()}>
              Hesapla
            </Button>
          </View>
          <Text style={{textAlign: 'right'}}>Puan??n??z Hen??z Hesaplanmad??</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Button style={{width: 100, marginRight: 20, backgroundColor: '#808080', marginVertical: 30}} mode="contained" onPress={() => goBack()}>
              Geri
            </Button>
          </View>
        </Card.Content>
      </Card>
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});