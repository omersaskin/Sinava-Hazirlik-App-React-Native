import React, { Component, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph, Divider, TextInput, Checkbox } from 'react-native-paper';

export default class PuanHesaplaTYT extends Component {
   state = {
      turkceDogruSayisi: 0,
      turkceYanlisSayisi: 0,
      sosDogruSayisi: 0,
      sosYanlisSayisi: 0,
      matDogruSayisi: 0,
      matYanlisSayisi: 0,
      fenDogruSayisi: 0,
      fenYanlisSayisi: 0,
      isChecked: false,
      diplomaPuani: 0,
      tytHamPuan: 0,
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

   tytPuanHesapla = (diplomaPuani, turkceDogruSayisi, turkceYanlisSayisi, sosDogruSayisi, sosYanlisSayisi, matDogruSayisi, matYanlisSayisi, fenDogruSayisi, fenYanlisSayisi) => {

      if (this.state.isChecked) {
         diplomaPuani = ((diplomaPuani * 0.6) / 2);
      } else {
         diplomaPuani = (diplomaPuani * 0.6);
      }

      var turNet = turkceDogruSayisi - turkceYanlisSayisi / 4;
      var sosNet = sosDogruSayisi - sosYanlisSayisi / 4;
      var matNet = matDogruSayisi - matYanlisSayisi / 4;
      var fenNet = fenDogruSayisi - fenYanlisSayisi / 4;

      var tytHamPuan = (turNet * 3.3) + (sosNet * 3.3) + (matNet * 3.4) + (fenNet * 3.4) + 100;
      var tytYerlestirmePuan = tytHamPuan + parseFloat(diplomaPuani);

      this.setState({ tytP: tytYerlestirmePuan })
   }

  render() {
    const state = this.state;

    return (
    <ScrollView style={styles.container}>
      <View>
      <Card style={{backgroundColor: '#f5f5f5'}}>
        <Card.Content>
          <Title>TYT Puan Hesapla</Title>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="T??rk??e"
              placeholder="Do??ru Say??s??"
              onChangeText = {this.turkceDogruSayisi}
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="T??rk??e"
              placeholder="Yanl???? Say??s??"
              onChangeText = {this.turkceYanlisSayisi}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Sosyal Bilimler"
              placeholder="Do??ru Say??s??"
              onChangeText = {this.sosDogruSayisi}
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Sosyal Bilimler"
              placeholder="Yanl???? Say??s??"
              onChangeText = {this.sosYanlisSayisi}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Temel Matematik"
              placeholder="Do??ru Say??s??"
              onChangeText = {this.matDogruSayisi}
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Temel Matematik"
              placeholder="Yanl???? Say??s??"
              onChangeText = {this.matYanlisSayisi}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              theme={{ colors: { primary: '#538cf5' }}}
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Fen Bilimleri"
              placeholder="Do??ru Say??s??"
              onChangeText = {this.fenDogruSayisi}
            />
            <TextInput
              style={{width: '45%', margin: '2.5%'}}
              mode="outlined"
              label="Fen Bilimleri"
              placeholder="Yanl???? Say??s??"
              onChangeText = {this.fenYanlisSayisi}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start'}}>
            <TextInput
              style={{width: '95%', margin: '2.5%'}}
              mode="outlined"
              label="Diploma Notu"
              placeholder="Orta????retim Ba??ar?? Puan??"
              onChangeText = {this.diplomaPuani}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              onPress={()=>{
               this.setState({isChecked: !this.state.isChecked})
              }}
              status={this.state.isChecked ? 'checked' : 'unchecked'}
              color= "#538cf5"
            />
            <Text>??nceki sene bir programa yerle??tim.</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
            <Button style={{width: 150, marginRight: '2.5%', backgroundColor: '#808080', marginVertical: 15}} mode="contained" onPress={() => this.tytPuanHesapla(this.state.diplomaPuani, this.state.turkceDogruSayisi, this.state.turkceYanlisSayisi, this.state.sosDogruSayisi, this.state.sosYanlisSayisi, this.state.matDogruSayisi, this.state.matYanlisSayisi, this.state.fenDogruSayisi, this.state.fenYanlisSayisi)}>
              Hesapla
            </Button>
          </View>
          <Text style={{textAlign: 'right'}}>{this.state.tytP != null ? this.state.tytP : "Puan??n??z Hen??z Hesaplanmad??"}</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Button style={{width: 100, marginRight: 20, backgroundColor: '#808080', marginVertical: 30,}} mode="contained" onPress={() => goBack()}>
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
  container: { flex: 1},
});