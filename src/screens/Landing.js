import React, { useEffect } from "react"
import {
    View,
    Image,
    Button
} from "react-native"
import styled from "styled-components"

import { landingBg } from "../constants/images"

const Container = styled.View`

        flex: 1;
        background-color: orange;
`

export const Landing = ({ navigation }) => {

    useEffect(() => {

        setTimeout(() => {
            navigation.navigate("MainTabs")

        }, 2000)

    }, [])



    return <Container>
        <Image source={landingBg} style={{
            width: "100%",
            height: "100%"
        }}

        />
    </Container>
}