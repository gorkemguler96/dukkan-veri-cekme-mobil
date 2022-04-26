import React, {useState,useEffect} from 'react';
import {View, Text, FlatList} from "react-native";
import styles from './Products.style'
import Config from 'react-native-config'
import axios from "axios";
import ProductCard from "../../components/ProductCard";

function Products(props) {

    const [data,setData]= useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const {data:productData} = await  axios.get("https://fakestoreapi.com/products")
        setData(productData)
    }

    const renderProduct = ({item}) => <ProductCard  product={item}/>
    return (
        <View>
            <Text>
                <FlatList data={data} renderItem={renderProduct}/>
            </Text>
        </View>
    );
}

export default Products;
