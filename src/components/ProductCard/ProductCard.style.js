import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#eeeeee',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:"row",
    },
    image:{
        width:100,
        height:100,
        resizeMode:"stretch",
    },
    body_container:{
        flex:1,
        justifyContent:"space-between",
        padding:5
    },
    title:{
        fontWeight:"bold",
        padding:5,
        fontSize:18

    },
    price:{
        padding:5,
        fontSize:16,
        fontStyle:"italic",

    },
})
