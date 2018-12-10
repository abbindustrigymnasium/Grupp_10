#define AI_Sensor 0                 // definerar sensorn    
#define DO_YLed 12                  // definerar röd lampan

int newvalue[] = {0 , 0 , 0,  0,  0,  0,  0,  0,  0,  0}; // gör en array 
int SensorValue = 0;              // gör start valuen (ljusstirkan) till 0 d.v.s. släckt

typedef enum LightState {           // definerar state som vi kommer att använda
  StartingState,
  ProgrammingMode,
};

int OnOff(int ljus){              // definerar en variabel för värden som är minde än 200
  if(ljus<200){
    return 0;                     // om väden är mindre än 200 då värdet ska bli 0 d.v.s lampan ska släckas 
  }
  return ljus;
}

LightState LS;                        // ändrar namnet 

void setup(){                     
  pinMode(DO_YLed, OUTPUT);             // vi bestämmer vilket port ska vara output eller input
  pinMode(AI_Sensor, INPUT);
  Serial.begin(9600);                   // vi väljer typet (språket)
  analogWrite(DO_YLed, SensorValue);    // vad ska vara från början 
  LS = StartingState;                   // vilket state ska vara från början
}

void loop(){                             // satartar loopet
  switch (LS){                           // börjar staterna
    case StartingState:                  // säger vad ska göra den här staten  
      SensorValue = analogRead(AI_Sensor);      // bestämmer att sensorvalue ska ta värdena från AI Sensor
      Serial.print("Startingstate");            // vad ska den skriva ut  
      Serial.println(SensorValue);                
      delay(1000);                              // längden
      if (SensorValue > 900 and SensorValue < 950 ){                  // avståndet i vilket sensorn ska börja mätta värdena och ändra styrkan
        delay (500);
          
        LS = ProgrammingMode;                   // går till nästa state
      } else {
        LS = StartingState;                     // eller kommer tillback till samma
    break;
      }
    case ProgrammingMode:                               // nästa state
      SensorValue = analogRead(AI_Sensor);
      
      Serial.print("ProgrammingMode");
      Serial.println(SensorValue);   
      for(int i = 0; i < 10; i++){                        // for loop som säger hur många gånger ska det hända
        analogWrite(DO_YLed, analogRead(AI_Sensor));     // det ska lyssa lampan med den styrkan som vi bestämde
        newvalue[i] = analogRead(AI_Sensor);             // den nya värdet ska deffineras som i 
        Serial.print("newvalue");     
        Serial.print(i);                                  // det ska skriva ut det nya värdet 
        Serial.print(" ");
        Serial.println(newvalue[i]);                      
        delay(100);
        }
        int tot = newvalue[0] + newvalue[1] + newvalue[2] + newvalue[3] + newvalue[4] + newvalue[5] + newvalue[6] + newvalue[7] + newvalue[8] + newvalue[9];   // det lägger in värdena i arrayen
        if( tot/10 < SensorValue + 30 and tot/10 > SensorValue -30) {                     // vi kollar att värdena som sensorn får är ungefar lika 
          Serial.println("changing state");
          SensorValue = OnOff(SensorValue);                                             // om värden är mindre än 200 då lampan ska släckas
          analogWrite(DO_YLed, SensorValue);
          LS = StartingState;                                                            // går tillback till första state
        }
        break;
  }
}
