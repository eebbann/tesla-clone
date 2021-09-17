import React from 'react';
import { View, Text,ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props)=> {
 const {name,taglineCTA, tagline, image} = props.car;

 return (
		<View style ={styles.carContainer}>
			<ImageBackground
				source={image}
				style={styles.image} />

				<View style={styles.titles}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subtitle}>{tagline}</Text>
					 <Text style={styles.subtitle}>{taglineCTA}</Text>

				</View>


    <View style = {styles.buttonContainer}>

				<StyledButton type='primary'
				 name={'custom order'}
				 onPress ={()=>{
           console.warn('custom order was pressed')
				 }}
			/>

				<StyledButton type='secondary'
				 name={'Existing Inventory'}
				 onPress ={()=>{
           console.warn('Existing was pressed')
				 }}
			/>

			 </View>

			</View>
	)
}

export default CarItem;