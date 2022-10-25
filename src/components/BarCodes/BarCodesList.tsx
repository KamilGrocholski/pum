import React from "react"
import { FlatList, View } from "react-native"
import { Text, themeColor } from "react-native-rapi-ui"
import { getAllBarCodes } from "../../api/barCode"
import { useQuery } from "@tanstack/react-query"

export const BarCodesList: React.FC = () => {
    const { data: barCodes } = useQuery(['barCodes'], getAllBarCodes, {
        onError: (err) => {
            console.log(err)
        }
    })

    return (
        <FlatList
            style={{
                paddingHorizontal: 20,
                paddingVertical: 50
            }}
            data={barCodes?.reverse()}
            renderItem={({ item }) => (
                <View
                    onTouchEnd={ () => console.log(item.id) }
                    style={{
                        backgroundColor: themeColor.info500,
                        marginBottom: 20,
                        padding: 10
                    }}
                >
                    <Text>{ item.name }</Text>
                    <Text>{ item.created_at }</Text>
                    <Text>{ item.data }</Text>
                    <Text>{ item.details }</Text>
                </View>
            )}
        />
    )
}