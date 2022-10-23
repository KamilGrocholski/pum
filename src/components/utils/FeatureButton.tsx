import { Button, themeColor } from 'react-native-rapi-ui'

interface Props {
    text: string
    icon: React.ReactNode
    action: () => void | Promise<void>
}

const FeatureButton: React.FC<Props> = ({ text, icon, action }) => {
    
    return (
      <Button
        onPress={ action }
        text={ text }
        rightContent={ icon } 
        width={ 280 }
        style={{
            marginBottom: 5,
        }}
        color={ themeColor.primary400 }
      />
    )
}

export default FeatureButton