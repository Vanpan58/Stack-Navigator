import  {Pressable, Text, View} from "react-native";
import { globalStyles } from "../../theme/theme.tsx";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton.tsx";


const HomeScreen = () => {

  const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>

        <PrimaryButton label="Productos" onPress={()=>navigation.navigate('Products' as never)}/>
        <PrimaryButton label="Coniguración" onPress={()=>navigation.navigate('Settings' as never)}/>
            
        </View>
    )
}

export default HomeScreen;