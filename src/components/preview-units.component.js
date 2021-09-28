import React, {useState, useEffect} from "react"
import {

    View,
    Text,
    Animated,
    Image, ScrollView, Dimensions
} from "react-native"
import styled from "styled-components/native";



export const PreviewUnits = ({ data={}, type=""}) => {

    const { items } = data[type];
    const { width } = Dimensions.get("window")



    return <>

    <Text style={{
        fontSize: 30,
        textAlign: "center",
        marginBottom: 10,
        textTransform: "capitalize"
    }}> {type} </Text>

    <Animated.ScrollView

    pagingEnabled
    snapToAlignment="center"
    horizontal
    showsHorizontalScrollIndicator={false}
    scrollEventThrottle={16}
    >
                {
                    items.map( item => {

                        return <View key={item.name} style={{
                            width: width
                        }}>
                            <Image 

                                    source={item.images[0]}
                                    style={{
                                        width: "100%",
                                        height: 300
                                    }}
                            />
                           <View style={{
                               flexDirection: "row",
                               flexWrap: "wrap"
                           }}> 

                                <Text style={{
                                fontSize: 18
                            }}> {item.name}sss </Text>
                           </View>
                        </View>
                    })
                }
    </Animated.ScrollView>
    </>

    
}