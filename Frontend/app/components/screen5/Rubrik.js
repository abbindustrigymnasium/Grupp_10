import React from 'react'; // importerar olika komponenter
import { 
	StyleSheet,
	View,
	Text,
	
} from 'react-native'; 

import { FontAwesome } from '@expo/vector-icons';

export default class Rubrik extends React.Component {


    render() {

        if (!this.props.visible) {
            return false;
        }
        

        return (

            <View 
                style={styles.component}
            >

                <View style={styles.layouts}>

					<View style={styles.layout2}
					>

						<View 
						 style={styles.itemcontainer2}
						>

							<View 
							style={styles.itemcontainer2Inner}
							>

                                <View style={styles.item1}>
										<Text 
											style={styles.item1Text}  //rubriken i appen
										>
											Lampkontroll Grupp 10 
										</Text> 
									</View>

                			</View>

                		</View>

                	</View>
                

                	</View>
                	
                </View>
           
        );

    }

}

const styles = StyleSheet.create({
    
	component: {
	    width: '100%',
	    flexDirection: 'row',
	    backgroundColor: 'rgba(0, 0, 0, 1)',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout2: {
	    width: '100%',
	    height: 177,
	},
	
	itemcontainer2: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer2Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item1: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item1Text: {
	    color: 'rgba(255, 255, 255, 1)',
		fontSize: 30,
		textAlign: 'center',
		fontFamily:'Times New Roman',
	    width: '100%',
	},
	
	layout1: {
	    width: '33.33333333333333%',
	    height: 90,
	},
	
	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},
	
	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
	
	item2: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},
	
});