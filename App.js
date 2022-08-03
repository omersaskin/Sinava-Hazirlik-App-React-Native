import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import { Button, Switch } from 'react-native-paper';

import {NavigationContainer,} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Provider, DefaultTheme, Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './pages/HomeScreen';
import ExploreScreen from './pages/ExploreScreen';
import SettingScreen from './pages/SettingScreen';
import KonularSayfasi from './pages/KonularSayfasi';
import KonuDetaySayfasi from './pages/KonuDetaySayfasi';
import SoruCozumSayfasi from './pages/SoruCozumSayfasi';
import PuanHesapla from './pages/PuanHesapla';
import SinavTakibiYap from './pages/SinavTakibiYap';
import AjandaTut from './pages/AjandaTut';
import TestlerSayfasi from './pages/TestlerSayfasi';
import PuanHesaplaAYT from './pages/PuanHesaplaAYT';
import PuanHesaplaTYT from './pages/PuanHesaplaTYT';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2196f3",
    accent: "#e91e63",
  },
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#538cf5',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarStyle: { height: 80, backgroundColor: '#fff', paddingBottom: 10, },
      }}
      >
      <Tab.Screen
        name="Merhaba"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Merhaba',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="smile-o"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Keşfet"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Keşfet',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="rocket"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

{
  /*
function Stack() {
  return(

    );
}
  */
}

function CustomDrawerContent(props) {

  const [isSwitchOn, setIsSwitchOn] = React.useState(true);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{flex: 1, paddingVertical: 20}}>
       <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'flex-start', marginLeft: 20, alignItems: 'center'}}>
             <Image style= {{width: 50, height: 50,  borderColor: '#000', borderRadius: 25}} source={require('./assets/avatar-gbe97c1a7d_640.png')} />
             <Text style={{fontSize: 15, marginLeft: 10, fontSize:16, fontWeight: 'bold', color: '#808080'}}>@kullaniciadi</Text>
       </View>

      <DrawerContentScrollView style={{ marginTop: 30}} {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
        
      <View>
        <View style={{                
              borderTopWidth: 0.5,
              borderTopColor:'#808080',
              flexDirection: 'row', 
              alignItems: 'center', 
              padding: 20
              }}>
              <Text style={{fontSize: 15, color: '#808080', fontWeight: 'bold'}}>Tercihler</Text>
        </View>
        <View style={{              
              flexDirection: 'row', 
              alignItems: 'center', 
              padding: 20}}>
          <Text style={{fontSize: 15, color: '#808080', fontWeight: 'bold'}}>Açık Tema</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="#538cf5" style={{marginLeft: 130}} />
        </View>
        </View>

        <View style={{                
              borderTopWidth: 0.5,
              borderTopColor:'#808080',
              flexDirection: 'row', 
              alignItems: 'center', 
              padding: 20,}}>
          <Icon name="share" color='#538cf5' size={30} />                
          <Text style={{fontSize: 15, marginLeft: 10, color: '#808080', fontWeight: 'bold'}}>Uygulamayı Paylaşın</Text>
        </View>
        <View style={{                
              flexDirection: 'row', 
              alignItems: 'center', 
              padding: 20,}}>
          <Icon name="sign-out" color='#538cf5' size={30} />                
          <Text style={{fontSize: 15, marginLeft: 10, color: '#808080', fontWeight: 'bold'}}>Çıkış Yap</Text>
        </View>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
    <Provider theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown:false}}
           />
        <Stack.Screen
          name="Keşfet"
          component={ExploreScreen}
          options={{
            title: 'Keşfet', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="KonularSayfasi"
          component={KonularSayfasi}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="KonuDetaySayfasi"
          component={KonuDetaySayfasi}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="SoruCozumSayfasi"
          component={SoruCozumSayfasi}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="AjandaTut"
          component={AjandaTut}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="PuanHesapla"
          component={PuanHesapla}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="SinavTakibiYap"
          component={SinavTakibiYap}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="TestlerSayfasi"
          component={TestlerSayfasi}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="PuanHesaplaAYT"
          component={PuanHesaplaAYT}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="PuanHesaplaTYT"
          component={PuanHesaplaTYT}
          options={{
            title: 'Setting', //Set Header Title
            headerShown:false,
          }}
        />
      </Stack.Navigator>
    </Provider>
    {
      /* 

      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Root"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
            headerShadowVisible: false,
            drawerStyle: {
              backgroundColor: '#fff',
              width: 290,
            },
            focused: false,
            drawerActiveBackgroundColor: 'transparent',
            drawerInactiveTintColor: '#808080',
            drawerActiveTintColor: '#538cf5',
            drawerLabelStyle: {
              fontSize: 15,
               fontWeight: 'bold'
            },
            headerTitle: 'YKS Koçun',
            headerTintColor: '#fff',
            headerStyle: {
              height: 50,
              backgroundColor: '#538cf5'
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 16,
            },

        }}
      >
        <Drawer.Screen
          name="Anasayfa"
          options={{drawerLabel: 'Anasayfa'}}
          component={Anasayfa}
          options={{
             drawerIcon: (tintColor) => (
                <Icon
                   name="home"
                   size={32}
                   color={tintColor.color}
                />
             ),
          }}
        />
        <Drawer.Screen
          name="Profil"
          options={{drawerLabel: 'Profil'}}
          component={SettingScreen}
          options={{
             drawerIcon: (tintColor) => (
                <Icon
                   name="user-circle"
                   size={32}
                   color={tintColor.color}
                />
             ),
          }}
        />
        <Drawer.Screen
          name="Destek"
          options={{drawerLabel: 'Destek'}}
          component={SettingScreen}
          options={{
             drawerIcon: (tintColor) => (
                <Icon
                   name="support"
                   size={32}
                   color={tintColor.color}
                />
             ),
          }}
        />
      </Drawer.Navigator>      
      */
    }

    </NavigationContainer>
  );
};

export default App;