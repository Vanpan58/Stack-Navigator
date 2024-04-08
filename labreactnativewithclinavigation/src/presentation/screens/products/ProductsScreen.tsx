import  {Text, View} from "react-native";
import { globalStyles } from "../../theme/theme";
import { FlatList } from "react-native-gesture-handler";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const productos = [

    { id: 1, name: 'Camiseta de algodón', price: 20.99, category: 'Ropa' },
    { id: 2, name: 'Zapatos deportivos', price: 49.99, category: 'Calzado' }, 
    { id: 3, name: 'Portátil HP', price: 799.99, category: 'Tecnología' },
    { id: 4, name: 'Libro de cocina', price: 14.50, category: 'Libros' },
    { id: 5, name: 'Gafas de sol polarizadas', price: 35.75, category: 'Accesorios' },
    { id: 6, name: 'Reloj inteligente', price: 129.99, category: 'Tecnología' }
  
  ];

const ProductsScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={globalStyles.container}>
            <Text style={{marginBottom:10, fontSize:20}}>Productos</Text>

        <FlatList
           data={productos}
           renderItem={
            ({item}) => (
                <PrimaryButton
                 onPress={() => {navigation.navigate('Product' as never)}}
                 label={item.name}
                 />
             )
           }
        />

        <Text style={{marginBottom:10, fontSize:20}}>Ajustes</Text>
           <PrimaryButton label="Configuración" onPress={()=>navigation.navigate('Settings' as never)}/>

           </View>
        
    )
}

export default ProductsScreen;