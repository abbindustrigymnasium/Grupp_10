import React from "react";
import Slider from "react-native-slider"; // importerar slidern från react native
import { AppRegistry, StyleSheet, View, Text } from "react-native"; // importerar komponeneter för att kunna styla text osv
import { LinearGradient, Constants }from 'expo'; // linear gradient gör så att mna kan få "fade" effekten på färgerna

export default class Component3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lampname: "L", // namnet på lampan som vi uppdaterar
            value: 100, 
            fetch:'http://iot.abbindustrigymnasium.se:3001/grupp10_light/' // vart vi uppdaterar värdet
        }
    }
  
  componentDidMount() { //körs när allt är inladdat
        let self = this; // kallar this för self för att lättare använda
         fetch(this.state.fetch+this.state.lampname, { //urlen där vi vill skicka ifrån (detta är datorns ipadress,hämtas via ipconfig i cmd, ipv4)
              method: 'GET' // säger att det är get vi vill använda 
        }).then((response) => response.json()) // gör om resultaten till json
        .then((responseJson) => {
            //console.log(responseJson);
            //om response.message är getter
                   // alert( responseJson.strength);
                    var strength= responseJson.strength/100;
        self.setState( // Sätter värden till startvärden
            {
                
                // tar första produkten i listans namn
                value: strength
            }
        )
        
             console.log(this.state); // för att se vad som är i startvariabeln 
      
    }).catch((error) => { // fångar error
        console.error(error);
    });
  }

    UpdateDataToServer = () =>{ // liknande insert men patch istället för port

        const { lampname } = this.state ;
        const { value } = this.state ;

        var adress=this.state.fetch;
        var strength =(value*10);

        jsonbody= JSON.stringify({
            name: lampname,
                  strength: strength,
                  hard:1,
            });

        console.log(jsonbody);
        fetch(adress, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
           body: jsonbody
        
        }).then((response) => response.json())
            .then((responseJson) => {

                //visar svarsmeddelande från servern efter nya värden sätts in

                console.log(responseJson);
               

            }).catch((error) => { // fångar errors och skriver ut det om det är nåt
              console.error(error);
            });


    }

    render() {
  
    return ( // vid linearGradient väljer man från och till vilken färg den ska skifta
      <View style={styles.container}>
     // <LinearGradient colors={['rgba(0, 0, 0, 1)', 'rgba(100, 100, 100, 1)']} style={styles.container}> 
          <Slider
          step={1}
          maximumValue={100} // maxvärdet
          value={this.state.value}
          onValueChange={value => this.setState({ value })} //om man ändrar på slidern ändras värdet
          onSlidingComplete={ this.UpdateDataToServer} // Uppdaterar inte föränn man släpper slidern
        />
        <Text style={styles.slidertext}>
          Value: {this.state.value}
        </Text>
        </LinearGradient>
      </View>
    );
  }
}


const styles = StyleSheet.create({ // här ändrar man font, storlek färg osv 
  container: {
    flex: 25,
    marginLeft: 0,
    marginRight: 0,
    alignItems: "stretch",
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: "center",
    
  },

  slidertext: {
      fontSize: 35,
      fontFamily:'Times New Roman',
      color: 'rgba(255, 255, 255, 1)'
  },

});

