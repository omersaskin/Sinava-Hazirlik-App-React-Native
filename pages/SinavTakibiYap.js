import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import {Button, List} from 'react-native-paper';
import moment from 'moment';

const App = ({route, navigation: {goBack}}) => {
    const [start, setStart] = useState(true);
    const { id } = route.params;

    const [totalDuration, setTotalDuration] = useState(0);
    useEffect(() => {
        let date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
        let expirydate = '2023-06-24 10:00:00';
        let diffr = moment.duration(moment(expirydate).diff(moment(date)));
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        
        setTotalDuration(d);
    }, []);

    const [totalDuration2, setTotalDuration2] = useState(0);
    useEffect(() => {
        let date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
        let expirydate = '2023-06-25 10:00:00';
        let diffr = moment.duration(moment(expirydate).diff(moment(date)));
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        
        setTotalDuration2(d);
    }, []);

    const [totalDuration3, setTotalDuration3] = useState(0);
    useEffect(() => {
        let date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
        let expirydate = '2023-03-17 10:00:00';
        let diffr = moment.duration(moment(expirydate).diff(moment(date)));
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        
        setTotalDuration3(d);
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <List.AccordionGroup>
              <List.Accordion title="Tahmini Başvuru Başlangıç Tarihi" id="1" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
                <CountDown
                    until={totalDuration}
                    isPlaying={true}
                    digitStyle={{backgroundColor: "#538cf5"}}
                    digitTxtStyle={{color: '#fff'}}
                    timetoShow={('H', 'M', 'S')}
                    onFinish={() => alert('finished')}
                    size={30}
                    timeLabels={{d: 'Gün', h: 'Saat', m: 'Dakika', s: 'Saniye'}}
                />
              </List.Accordion>
              <List.Accordion title="Tahmini TYT Oturum Tarihi" id="2" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
                <CountDown
                    until={totalDuration2}
                    isPlaying={true}
                    digitStyle={{backgroundColor: "#538cf5"}}
                    digitTxtStyle={{color: '#fff'}}
                    timetoShow={('H', 'M', 'S')}
                    onFinish={() => alert('finished')}
                    size={30}
                    timeLabels={{d: 'Gün', h: 'Saat', m: 'Dakika', s: 'Saniye'}}
                />
              </List.Accordion>
              <List.Accordion title="Tahmini AYT Oturumu Tarihi" id="3" theme={{ colors: { primary: '#538cf5' }}} left={props => <List.Icon {...props} icon="folder" />}>
                <CountDown
                    until={totalDuration3}
                    isPlaying={true}
                    digitStyle={{backgroundColor: "#538cf5"}}
                    digitTxtStyle={{color: '#fff'}}
                    timetoShow={('H', 'M', 'S')}
                    onFinish={() => alert('finished')}
                    size={30}
                    timeLabels={{d: 'Gün', h: 'Saat', m: 'Dakika', s: 'Saniye'}}
                />
              </List.Accordion>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Button style={{width: 100, marginRight: 50, backgroundColor: '#808080', marginVertical: 30}} mode="contained" onPress={() => goBack()}>
                  Geri
                </Button>
              </View>
            </List.AccordionGroup>
        </SafeAreaView>
    );
}

export default App;