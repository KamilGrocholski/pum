import { BarCodeScanner } from "expo-barcode-scanner"
import { useEffect, useState } from "react"

export const useBarCodeScanner = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState<string | null>(null)
  
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);

    return {
        hasPermission,
        scanned,
        setScanned,
    }
}