import React, { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { Text, themeColor } from "react-native-rapi-ui"
import { getAllBarCodes } from "../../api/barCode"
import { definitions } from "../../types/supabase"

export const BarCodesList: React.FC = () => {
    const [barCodes, setBarCodes] = useState<definitions['BarCode'][] | null>(null)
    useEffect(() => {
        getAllBarCodes()
            .then(res => setBarCodes(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <FlatList
            style={{
                paddingHorizontal: 20,
                paddingVertical: 50
            }}
            data={barCodes}
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