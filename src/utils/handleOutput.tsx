import { Text } from "react-native-rapi-ui"

export const handleOutput = (label: string, data: number | string | undefined | null, n: number = 2) => {
    let result 
    if (!data) result = 'Nie udalo się pozyskać wyniku.'

    if (typeof data === 'number') result = data.toFixed(n)

    if (typeof data === 'string') result = data

    return (
        <Text>
            <Text fontWeight='light'>{ label }: </Text>
            <Text fontWeight='bold'>{ result }</Text>
        </Text>
    )
}