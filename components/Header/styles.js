import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
	position:'absolute',
	top:60,
	zIndex:100,
  flexDirection:'row',
	justifyContent:'space-between',
  width: '100%',

},
logo:{
width:100,
height: 20,
resizeMode:'contain',
 left:20
},
menu:{
	width:100,
	height: 30,
	resizeMode:'contain'
	}
})
export default styles;