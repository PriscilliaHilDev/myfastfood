import React, {useState, useContext, useEffect} from 'react'
import { View, Text, TouchableWithoutFeedback, Modal, Dimensions} from 'react-native'
import { Dialog, Avatar, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { FirebaseContext } from '../../FirebaseContext';
import colors, {getHeight, getIconSize, getfontSize, getWidth} from "../../assets/colors";
import { infoModal } from '../../Redux/Actions/infos';
import Icon from 'react-native-vector-icons/FontAwesome';

const infos = () => {

    const {updateOrderItem, deleteOrderItem} = useContext(FirebaseContext);
    const [quantity, setQuantity] = useState(1);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  
  
    const dispatch = useDispatch()

    const {infos} = useSelector(state => state);

    
    const hiddenModal = () => {
         dispatch(infoModal(false))
           
    }
  
    return (

        <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={infos}
      >
      <TouchableWithoutFeedback  onPress={()=>hiddenModal()}>
          <View style={styles.centeredView}>              
              <TouchableWithoutFeedback>
                  <View style={styles.modalView}>
                  <Text style={{fontSize:18, textAlign:'center', fontWeight:'bold', color:colors.MarronDark, fontSize:getfontSize(windowWidth, 26, windowWidth, 18)}}>A quoi correspond le statut de mes commandes ? </Text>
                     <View style={{flexDirection:'column', padding:10}}>
                         <View style={{flexDirection:'row'}}>
                         <Text style={{textAlign:'left', fontWeight:'bold',fontSize:getfontSize(windowWidth, 28, windowWidth, 20)}}> 1. En cours </Text>
                            <Icon
                                name="circle"
                                size={getWidth(windowWidth, 15, windowWidth, 12)}
                                color="#259EBA"
                                />
                         </View>
                        
                           <Text style={{fontSize:getfontSize(windowWidth, 30, windowWidth, 22)}}>Votre commande est en attente d'exp??dition </Text>
                     </View>
                     <View style={{flexDirection:'column', padding:10}}>
                         <View style={{flexDirection:'row'}}>
                         <Text style={{textAlign:'left', fontWeight:'bold',fontSize:getfontSize(windowWidth, 28, windowWidth, 20)}}>  2. Exp??di??e </Text>
                            <Icon
                                name="circle"
                                size={getWidth(windowWidth, 15, windowWidth, 12)}
                                color="#0B398C"
                                />
                         </View>
                        
                           <Text style={{fontSize:getfontSize(windowWidth, 30, windowWidth, 22)}}>Votre commande ?? ??t?? exp??di??e et vous sera bientot livr?? chez vous.</Text>
                     </View>
                     <View style={{flexDirection:'column', padding:10}}>
                         <View style={{flexDirection:'row'}}>
                         <Text style={{textAlign:'left', fontWeight:'bold',fontSize:getfontSize(windowWidth, 28, windowWidth, 20)}}> 3. Livr??e </Text>
                            <Icon
                                name="circle"
                                size={getWidth(windowWidth, 15, windowWidth, 12)}
                                color="green"
                                />
                         </View>
                        
                           <Text style={{fontSize:getfontSize(windowWidth, 30, windowWidth, 22)}}>Votre commande vous ?? bien ??t?? parvenue. </Text>
                     </View>
                     <View style={{flexDirection:'column', padding:10}}>
                         <View style={{flexDirection:'row'}}>
                         <Text style={{textAlign:'left', fontWeight:'bold',fontSize:getfontSize(windowWidth, 28, windowWidth, 20)}}>  4. Annul??e </Text>
                            <Icon
                                name="circle"
                                size={getWidth(windowWidth, 15, windowWidth, 12)}
                                color="#E80606"
                                />
                         </View>
                        
                           <Text style={{fontSize:getfontSize(windowWidth, 30, windowWidth, 22)}}>Votre commande ?? ??t?? annul??e et un remboursement sera effectu??. </Text>
                     </View>
                      <Button
                          buttonStyle={styles.button}
                          title="Fermer"
                          onPress={()=>hiddenModal()}
                          titleStyle={{
                              textAlign:'center',
                              paddingRight:40,
                              paddingLeft:40,
                              fontSize:getfontSize(windowWidth, 28, windowWidth, 20)     
                          }}
                      />
                    </View>
              </TouchableWithoutFeedback>
          </View> 
      </TouchableWithoutFeedback>        
    </Modal>
    )
}

export default infos
