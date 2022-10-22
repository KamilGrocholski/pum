import { Section, SectionContent, SectionImage } from "react-native-rapi-ui"

interface Props {
    sensorComponent: JSX.Element,
    icon: React.ReactNode
}

export const SensorContainer: React.FC<Props> = ({ sensorComponent, icon }) => {

    return (
        <Section 
            style={{ 
                width: 280,
                alignItems: 'center'
            }}
        >
            <SectionImage 
                source={require('../../../assets/favicon.png')}  
            />
            <SectionContent 
                style={{
                    alignItems: 'center'
                }}
            >
                { sensorComponent } 
            </SectionContent>
        </Section>
    )
}