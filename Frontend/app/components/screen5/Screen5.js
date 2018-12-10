import React from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';



import Component1 from './Component1'; // importerar component 1 och 3 till screen 5
import Component3 from './Component3';
import showproducts from './Comp1';

export default class Screen5 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            Component1Visible: true,
            Component2Visible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }

    render() {
        return (

            
            <View style={styles.container}>

                <View style={styles.screencontainer}>

                    <View style={styles.screencontainerInner}>

                        <Component1 
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component1Visible }
                        />
                        
                        <Component3/>

                       
                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
	screencontainer: {
	    backgroundColor: 'rgba(133, 135, 134, 1)',
	    flex: 1,
	},
	
	screencontainerInner: {
	    flex: 1,
	},
	
});