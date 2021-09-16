import React from 'react';
import { View, Text,ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props)=> {

	return (
		<View style ={styles.carContainer}>
			<ImageBackground
				source={require('../../assets/images/ModelX.jpeg')} style={styles.image} />
				<View style={styles.titles}>
					<Text style={styles.title}>Model S</Text>
					<Text style={styles.subtitle}>starting at $69,420</Text>
				</View>

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
	)
}

export default CarItem;