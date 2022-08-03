import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Button, Card, Title, Paragraph, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const SoruCozumSayfasi = ({navigation, route, navigation: {goBack}}) => {
  const { testId, numberId } = route.params;
  var sorular;

  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isDisabled, setDisabled] = useState(false);
  const [checked, setChecked] = React.useState();
  const [sayfa, setSayfa] = useState(0);
  const [son, setSon] = useState(false);
  const [cevap, setCevap] = useState(false);
  const [goster, setGoster] = useState(0);
  const [dSayisi, setDSayisi] = useState(0);
  const [ySayisi, setYSayisi] = useState(0);
  const [bSayisi, setBSayisi] = useState(0);
  const [nSayisi, setNSayisi] = useState(0);
  const [sikColor, setsikColor] = useState();
  const [deger1, ataDeger1] = useState(0);
  const [deger2, ataDeger2] = useState(0);
  const [deger3, ataDeger3] = useState(0);
  const [deger4, ataDeger4] = useState(0);
  const [deger5, ataDeger5] = useState(0);

  var myloop = [];

  myloop.push(deger1, deger2, deger3, deger4, deger5);

  const bHesapla = () => {
    var n = 5 - (dSayisi + ySayisi);

    setBSayisi(n);
  }

  const cevapGoster = (value) => {
    var x = value;

    setGoster(x);
  }

  if(testId === 1 && numberId === 1) {
     sorular = [
      {
        id: 1,
        name: 'Temel Kavramlar',
        soru: 'En küçük doğal sayı hangisidir?',
        sikA: 5,
        sikB: 3,
        sikC: 1,
        sikD: 0,
        sikE: -1,
        cevap: 0,
        cevabiGor: 'Doğal sayılar 0 saysından başlayıp sonsuza kadar gider. Dolayısıyla cevap 0 sayısıdır.',
      },
      {
        id: 2,
        name: 'Temel Kavramlar',
        soru: 'Hangisi iki basamaklı en küçük tamsayıdır?',
        sikA: -10,
        sikB: 10,
        sikC: 99,
        sikD: -99,
        sikE: 11,
        cevap: -99,
        cevabiGor: 'Negatif sayılarda tamsayılara dahildir. İki basamaklı sayılar -10 sayısından başlayıp sonsuza kadar gider. Dolayısıyla cevap -99 saysıdır.',
      },
      {
        id: 3,
        name: 'Temel Kavramlar',
        soru: '36 ile 48 sayısının EBOB değeri kaçtır?',
        sikA: 50,
        sikB: 35,
        sikC: 24,
        sikD: 16,
        sikE: 12,
        cevap: 12,
        cevabiGor: 'bu soru şöyle çözülür',
      },
      {
        id: 4,
        name: 'Temel Kavramlar',
        soru: '24 ile 32 saysının EKOK değeri kaçtır?',
        sikA: 40,
        sikB: 96,
        sikC: 52,
        sikD: 38,
        sikE: 26,
        cevap: 96,
        cevabiGor: 'bu soru şöyle çözülür',
      },
      {
        id: 5,
        name: 'Temel Kavramlar',
        soru: 'Hangisi bir asal sayı değildir?',
        sikA: 3,
        sikB: 7,
        sikC: 13,
        sikD: 12,
        sikE: 17,
        cevap: 12,
        cevabiGor: 'Asal sayılar sadece 1 ve kendisine bölünebilen sayılardır. Dolayısıyla cevap 12 sayısıdır.',
      },
      {
        id: 6,
        title: 'Test Sonucu',
        dogruSayisi: '',
        yanlisSayisi: '',
        mesaj: 'Başarılar dileriz.',
      },
    ]
  } else if(testId === 1 && numberId === 2) {
     sorular = [
      {
        id: 1,
        name: 'Sayı Basamakları',
        soru: 'İki basamaklı AB sayısı ile BA saysının toplamı 55 olmak üzere A+B değeri kaçtır?',
        sikA: '5',
        sikB: '3',
        sikC: '1',
        sikD: '0',
        sikE: '6',
        cevap: '6'
      },
      {
        id: 2,
        name: 'Sayı Basamakları',
        soru: 'Rakamları farklı iki basamaklı en büyük sayı ile en küçük sayının toplamı kaçtır?',
        sikA: '-15',
        sikB: '10',
        sikC: '99',
        sikD: '0',
        sikE: '11',
        cevap: '0'
      },
      {
        id: 3,
        name: 'Sayı Basamakları',
        soru: 'Üç basamaklı pozitif en büyük sayı ile en küçük sayı arasındaki fark kaçtır?',
        sikA: '350',
        sikB: '160',
        sikC: '899',
        sikD: '400',
        sikE: '600',
        cevap: '899'
      },
      {
        id: 4,
        name: 'Sayı Basamakları',
        soru: 'İki basamaklı AB sayısı rakamları toplamının 3 katına eşittir. Buna göre, A+B toplamı kaçtır?',
        sikA: '40',
        sikB: '50',
        sikC: '13',
        sikD: '38',
        sikE: '26',
        cevap: '13'
      },
      {
        id: 5,
        name: 'Sayı Basamakları',
        soru: '{0, 1, 3, 7} rakamları kullanılarak oluşturulabilecek negatif en küçük sayı ile pozitif en küçük sayı arasındaki fark kaçtır?',
        sikA: '-205',
        sikB: '400',
        sikC: '-6273',
        sikD: '105',
        sikE: '2040',
        cevap: '-6273'
      },
      {
        id: 6,
        title: 'Test Sonucu',
        dogruSayisi: '',
        yanlisSayisi: '',
        mesaj: 'Başarılar dileriz.',
      },
    ]
  }

   const cevaplaTest = (value, cevap) => {
  
    if(testId === 1 && numberId ===1) {
      if(value === 1) {

        if (0 === cevap) {
          setDSayisi(dSayisi + 1);
          setsikColor("green");
        } else if(cevap === 5 || cevap === 3 || cevap === 1 || cevap === -1) {
          setYSayisi(ySayisi + 1);
          setsikColor("red");
        }
      }

      if(value === 2) {

        if (-99 === cevap) {
          setDSayisi(dSayisi + 1);
          
        } else if(cevap === -10 || cevap === 10 || cevap === 99 || cevap === 11) {
          
          setYSayisi(ySayisi + 1);

        }
      }

      if(value === 3) {

        if (12 === cevap) {
          setDSayisi(dSayisi + 1);
 
        } else if(cevap === 50 || cevap === 35 || cevap === 24 || cevap === 16) {
          
          setYSayisi(ySayisi + 1);

        } else if(cevap === -10 || cevap === 10 || cevap === 99 || cevap === 11 || cevap === 12) {
          setBSayisi(bSayisi +1);

        }
      }

      if(value === 4) {

        if (96 === cevap) {
          setDSayisi(dSayisi + 1);
          setsikColor("green");
        } else if(cevap === 40 || cevap === 52 || cevap === 38 || cevap === 26) {
          setYSayisi(ySayisi + 1);
          setsikColor("red");
        } 
      }

      if(value === 5) {

        if (12 === cevap) {
          setDSayisi(dSayisi + 1);
 
        } else if(cevap === 3 || cevap === 7 || cevap === 13 || cevap === 17) {
          
          setYSayisi(ySayisi + 1);

        } 
      }
    }

    if(testId === 2 && numberId === 1) {
      if(value === 1) {
        if ("6" === cevap) {
          setDSayisi(dSayisi + 1);

  
        } else {
          setYSayisi(ySayisi + 1);


        }
      }

      if(value === 2) {

        if ("0" === cevap) {
          setDSayisi(dSayisi + 1);
 
        } else {
          setYSayisi(ySayisi + 1);

        }
      }

      if(value === 3) {

        if ("899" === cevap) {
          setDSayisi(dSayisi + 1);
 
        } else {
          setYSayisi(ySayisi + 1);

        }
      }

      if(value === 4) {

        if ("13" === cevap) {
          setDSayisi(dSayisi + 1);
 
        } else {
          setYSayisi(ySayisi + 1);

        }
      }

      if(value === 5) {

        if ("-6273" === cevap) {
          setDSayisi(dSayisi + 1);
 
        } else {
          setYSayisi(ySayisi + 1);

        }
      }
    }

   }

  return (
    <ScrollView style={styles.container}>
        <View style={{ flex: 1, marginBottom: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <CountdownCircleTimer
            size= {135}
            isPlaying={!son ? isPlaying : !isPlaying}
            duration={600}
            colors={"#538cf5"}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => setSon(!son) + bHesapla()}
        >
          {({ remainingTime, color }) => (
            <Text style={{ color, fontSize: 40 }}>
              {Math.floor(remainingTime / 60) + ":" + remainingTime % 60}
            </Text>
          )}
        </CountdownCircleTimer>
        </View>
        {
          sorular.map((u,i) => {
            if((sayfa === sayfa) ? (i=== sayfa && sayfa != 5 && son === false && cevap === false) : (i === sayfa && sayfa != 5)) {
              return(
                  <View key={i}>
                      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ flex: 1, marginTop: -180, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <Icon
                             name="check"
                             size={32}
                             color={'green'}
                          />
                          <Text style={{fontWeight: 'bold'}}>{dSayisi}</Text>
                        </View>
                        <View style={{ flex: 1, marginTop: -180, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                          <Icon
                             name="times"
                             size={32}
                             color={'red'}
                          />
                          <Text style={{fontWeight: 'bold'}}>{ySayisi}</Text>
                        </View>
                      </View>

                    <View style={{flex: 1, marginTop: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{ flex: 1, marginBottom: 30, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <Button 
                          onPress = { () => setSon(!son) + bHesapla() }
                          title="Press Me"
                          uppercase={false}
                          mode="contained" color="red">
                          Testi Bitir 
                          </Button>
                      </View>
                      <View style={{ flex: 1, marginBottom: 30, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                          <Button 
                          onPress = { () => setCevap(!cevap) + cevapGoster(u.id) }
                          title="Press Me"
                          uppercase={false}
                          mode="contained" color="green">
                          Cevabı Gör 
                          </Button>
                      </View>
                    </View>

                    <Title style={{textAlign: 'center'}}>{u.name}</Title>
                    <Title style={{textAlign: 'center', fontSize: 18}}>Test-{numberId}</Title>
                    <Title style={{fontSize: 15, marginLeft: 15}}>Soru-{u.id}</Title>
                    <Title style={{fontSize: 15}}>{u.soru}</Title>

                    {
                      u.id === 1
                      ?
                      <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikA ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(1) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikA) + ataDeger1(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikA}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikB ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(1) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikB) + ataDeger1(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikB}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikC ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(1) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikC) + ataDeger1(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikC}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikD ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(1) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikD) + ataDeger1(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikD}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikE ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(1) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikE) + ataDeger1(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikE}</Text>
                        </View>
                      </View>
                      : 
                      undefined

                      ||

                      u.id === 2
                      ?
                      <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikA ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(2) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikA) + ataDeger2(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikA}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikB ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(2) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikB) + ataDeger2(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikB}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikC ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(2) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikC) + ataDeger2(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikC}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikD ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(2) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikD) + ataDeger2(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikD}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikE ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(2) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikE) + ataDeger2(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikE}</Text>
                        </View>
                      </View>
                      : 
                      undefined

                      ||

                      u.id === 3
                      ?
                      <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikA ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(3) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikA) + ataDeger3(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikA}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikB ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(3) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikB) + ataDeger3(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikB}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikC ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(3) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikC) + ataDeger3(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikC}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikD ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(3) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikD) + ataDeger3(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikD}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikE ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(3) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikE) + ataDeger3(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikE}</Text>
                        </View>
                      </View>
                      : 
                      undefined

                      ||

                      u.id === 4
                      ?
                      <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikA ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(4) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikA) + ataDeger4(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikA}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikB ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(4) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikB) + ataDeger4(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikB}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikC ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(4) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikC) + ataDeger4(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikC}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikD ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(4) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikD) + ataDeger4(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikD}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikE ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(4) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikE) + ataDeger4(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikE}</Text>
                        </View>
                      </View>
                      : 
                      undefined

                      ||

                      u.id === 5
                      ?
                      <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikA ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(5) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikA) + ataDeger5(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikA}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikB ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(5) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikB) + ataDeger5(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikB}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikC ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(5) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikC) + ataDeger5(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikC}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikD ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(5) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikD) + ataDeger5(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikD}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Checkbox
                            status={checked === u.sikE ? 'checked' : 'unchecked'}
                            disabled={myloop.includes(5) ? !isDisabled : isDisabled}
                            onPress={() => {
                              cevaplaTest(u.id, u.sikE) + ataDeger5(u.id)
                            }}
                            color= "#538cf5"
                          />
                          <Text style={{}}>{u.sikE}</Text>
                        </View>
                      </View>
                      : 
                      undefined
                    }

                    {/*
                      u.id === 1
                      ?
                            <Button 
                            style={{marginTop:20, backgroundColor: '#808080'}}
                            disabled={myloop.includes(1) ? !isDisabled : isDisabled}
                            onPress = {
                            () => cevaplaTest(u.id, checked) + ataDeger1(u.id)
                            }
                            mode="contained" 
                            >
                            Cevapla 
                            </Button>
                      :
                      undefined

                      ||
                      u.id === 2
                      ?
                            <Button 
                            style={{marginTop:20, backgroundColor: '#808080'}}
                            disabled={myloop.includes(2) ? !isDisabled : isDisabled}
                            onPress = {
                            () => cevaplaTest(u.id, checked) + ataDeger2(u.id)
                            }
                            mode="contained" 
                            >
                            Cevapla 
                            </Button>
                      :
                      undefined
                      ||
                      u.id === 3
                      ?
                            <Button 
                            style={{marginTop:20, backgroundColor: '#808080'}}
                            disabled={myloop.includes(3) ? !isDisabled : isDisabled}
                            onPress = {
                            () => cevaplaTest(u.id, checked) + ataDeger3(u.id)
                            }
                            mode="contained" 
                            >
                            Cevapla 
                            </Button>
                      :
                      undefined
                      ||
                      u.id === 4
                      ?
                            <Button 
                            style={{marginTop:20, backgroundColor: '#808080'}}
                            disabled={myloop.includes(4) ? !isDisabled : isDisabled}
                            onPress = {
                            () => cevaplaTest(u.id, checked) + ataDeger4(u.id)
                            }
                            mode="contained" 
                            >
                            Cevapla 
                            </Button>
                      :
                      undefined
                      ||
                      u.id === 5
                      ?
                            <Button 
                            style={{marginTop:20, backgroundColor: '#808080'}}
                            disabled={myloop.includes(5) ? !isDisabled : isDisabled}
                            onPress = {
                            () => cevaplaTest(u.id, checked) + ataDeger5(u.id)
                            }
                            mode="contained" 
                            >
                            Cevapla 
                            </Button>
                      :
                      undefined
                    */}

                    <View style={{flex: 1, flexDirection: 'row'}}> 
                      <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Button disabled={sayfa >= 1 ? false : true} style={{width: 100, backgroundColor: '#808080', marginVertical: 30}} mode="contained" onPress={() => setSayfa(sayfa - 1) + cevaplaTest(u.id)}>
                          Geri
                        </Button>
                      </View>
                      <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Button disabled={sayfa <= 3 ? false : true} style={{width: 100, backgroundColor: '#808080', marginVertical: 30}} mode="contained" onPress={() => setSayfa(sayfa + 1) + cevaplaTest(u.id)}>
                          İleri
                        </Button>
                      </View>
                    </View>



                  </View>
                )
            } else if(cevap === true && goster === u.id) {

                  return(
                   <View key={i}  style={{ backgroundColor: '#f5f5f5', borderRadius: 20,}}>
                          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <Text>{u.cevabiGor}</Text>
                            </View>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                              <Button onPress={() => setCevap(!cevap) } 
                                style={{width: 100, marginRight: 0, backgroundColor: '#808080', marginBottom: 100, marginVertical: 30}}
                                title="Press Me"
                                mode="contained" 
                                color="#808080"
                                >
                                <Text style={{color: '#fff'}}>GERİ</Text>
                              </Button>
                          </View>
                      </View>  
               
                    );            
              }
          })
        }

            {(() => {
              if (son === true){
                  return (
                   <View style={styles.container, {  backgroundColor: '#f5f5f5',  borderRadius: 20,}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                          {dSayisi > ySayisi 
                              ? 
                              <Icon
                                 name="thumbs-up"
                                 size={72}
                                 color={'green'}
                              />
                              :
                              <Icon
                                 name="thumbs-down"
                                 size={72}
                                 color={'red'}
                              />
                        }
                        </View>
                          <View style={{flex: 1, marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                              <Icon
                                 name="check"
                                 size={32}
                                 color={'green'}
                              />
                              <Text style={{fontWeight: 'bold'}}>{dSayisi}</Text>
                            </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                          <Icon
                             name="dropbox"
                             size={32}
                             color={'blue'}
                          />
                          <Text style={{fontWeight: 'bold'}}>{bSayisi}</Text>
                        </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                              <Icon
                                 name="times"
                                 size={32}
                                 color={'red'}
                              />
                              <Text style={{fontWeight: 'bold'}}>{ySayisi}</Text>
                            </View>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                              <Button onPress={() => navigation.goBack()} 
                                style={{width: 100, marginRight: 0, backgroundColor: '#808080', marginBottom: 100, marginVertical: 30}}
                                title="Press Me"
                                mode="contained" 
                                color="#808080"
                                >
                                <Text style={{color: '#fff'}}>GERİ</Text>
                              </Button>
                          </View>
                      </View>
                  )
              }
            })()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 30, paddingTop: 45 },
});

export default SoruCozumSayfasi;