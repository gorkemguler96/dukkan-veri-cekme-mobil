import React from 'react';
import {View} from "react-native";
import LottieView from 'lottie-react-native';

function Loading(props) {
    return (
             <LottieView source={require('../../asset/loading.json')} autoPlay loop />
    );
}

export default Loading;
