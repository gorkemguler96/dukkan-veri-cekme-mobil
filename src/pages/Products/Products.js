import React, {useState,useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from "react-native";
import styles from './Products.style'
import Config from 'react-native-config'
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function Products({navigation}) {

    const [data,setData]= useState([])
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState(null)

    const handleProductSelect= ({id}) => {
        navigation.navigate("DetailPage",{id})
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try{
            const {data:productData} = await  axios.get("https://fakestoreapi.com/products")
            setData(productData)
            setLoading(false)
        }catch (err){
            setError(err.message)
            setLoading(false)
        }

    }

    const renderProduct = ({item}) => <ProductCard  product={item} onSelect={()=>handleProductSelect(item.id)}/>

    if(loading){
        return <Loading/>
    }

    if(error){
       return <Error/>
    }

    return (
        <View>
            <Text>
                <FlatList data={data} renderItem={renderProduct}/>
            </Text>
        </View>
    );
}

export default Products;
