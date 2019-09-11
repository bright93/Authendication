import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import { LoginForm } from './Components/LoginForm';

class Index extends Component {
  componentWillMount() {
      firebase.initializeApp({
          apiKey: 'AIzaSyCFLq-PdE-wSXV9DnnuOoIisN4ISsetbfQ',
          authDomain: 'authentication-bb722.firebaseapp.com',
          databaseURL: 'https://authentication-bb722.firebaseio.com',
          projectId: 'authentication-bb722',
          storageBucket: '',
          messagingSenderId: '429419338762',
          appId: '1:429419338762:web:75308e44926186c7f9d3f3'
});
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default Index;
