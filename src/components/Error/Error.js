import React from 'react';
import {View} from "react-native";
import LottieView from 'lottie-react-native';


function Error(props) {
    return (
    <LottieView source={require('../../asset/error.json')} autoPlay loop />
    );
}

export default Error;
