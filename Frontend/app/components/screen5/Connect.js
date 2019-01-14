import React from 'react'; // importerar komponenter från react
import { 
	StyleSheet,
	View,
	Text,
} from 'react-native';

export default class showproducts extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			Name: 'victor',
			lampaV: {name:'idunno2', strength:'60'}	
		}
    }

componentDidMount(){ // hämtar värden 
	let self=this;
	fetch('http://iot.abbindustrigymnasium.se:3000/grupp10_light/', {
		method: 'GET'
	}).then((response) => response.json()).then((responseJSON) =>
{	console.log(this.state);
	console.log(resposneJSON);
	var resultat=responseJSON.result;
	if (message='Getter')
	if (resultat.length!=0)
	{
		self.setState({
			Name: responseJSON.result[0].name,
			products:resultat
		})
	}
	else
	alert('are your databas table empty?')
	console.log(this.state);
})
	}

    render() {
        return ( //vart på skärmen olika delar ska vara
            <View 
                style={styles.component}
            >
                <View style={styles.layouts}>
                	<View style={styles.layout1}>
                		<View style={styles.itemcontainer1}>
                			<View style={styles.itemcontainer1Inner}>
                                <View style={styles.item1}>
								<Switch 
								value={this.state.switchValue}
								onValueChange={(val) => this.setState({ switchValue : val })} 
	                                                         // ändrar valuet
								/>
									</View>
                			</View>
                		</View>
                	</View>
                	<View style={styles.layout2}>
                		<View style={styles.itemcontainer2}>
                			<View style={styles.itemcontainer2Inner}>
                                <View style={styles.item2}>
										<Text
											style={styles.item2Text}
										>
											
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
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},
	
	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},
	
	layout1: {
	    width: '50%',
	    height: 97.5,
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
	
	item1: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},
	
	layout2: {
	    width: '50%',
	    height: 97.5,
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
	
	item2: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	    padding: 10,
	},
	
	item2Text: {
	    color: '#181818',
	    fontSize: 18,
	    textAlign: 'center',
	    width: '100%',
	},
	
});
