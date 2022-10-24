import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Text, Button, TextInput } from 'react-native-rapi-ui';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useBarCodeScanner } from '../../hooks/useBarCodeScanner';
import { addBarCode } from '../../api/barCode';

export const Scanner: React.FC = () => {
  const [newName, setNewName] = useState<string | undefined>(undefined)
  const [newDetails, setNewDetails] = useState<string | undefined>(undefined)
  const [newData, setNewData] = useState<string | undefined>(undefined)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const { setScanned, scanned, hasPermission } = useBarCodeScanner()

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    setNewData(data)
    // alert(`Kod kreskowy typu ${type} o danych ${data} został zeskanowany.`);
  };

  const handleAddBarCode = async () => {
    console.log(newData)
    if (!newName || !newData) return
    const { data, error } = await addBarCode({ data: newData, name: newName, details: newDetails })
    console.log(error)
    console.log(data)
    setScanned(false)
  }

  const handleChangeNewName = (name: string) => {
    setNewName(name)
  }

  const handleChangeNewDetails = (details: string) => {
    setNewDetails(details)
  }

  return (
    <>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={ StyleSheet.absoluteFillObject }
        />
        <KeyboardAvoidingView behavior="height" enabled style={{ flex: 0.25 }} />
        {scanned && 
        <>
          <View style={{ padding: 20 }}>
            <Text style={{ color: 'red' }}>{ errorMsg }</Text>
            <Text style={{ color: 'white' }}>Nazwa produktu</Text>
            <TextInput 
              value={ newName }
              onChangeText={ handleChangeNewName }
            />
            <Text style={{ color: 'white' }}>Opis produktu</Text>
            <TextInput 
              value={ newDetails }
              onChangeText={ handleChangeNewDetails }
            />
            <Text style={{ color: 'white' }}>Odczytane dane</Text>
            <TextInput 
              placeholder={ newData }
              editable={ false }
            />
            <Button 
              text={ 'Dodaj do twojej listy' }
              style={{ marginTop: 10 }}
              onPress={ handleAddBarCode }
            />
            <Button 
              text={'Zeskanuj ponownie'} 
              style={{ marginTop: 10 }}
              onPress={() => setScanned(false)} 
            />
          </View>
        </>}
    </>
  );
}