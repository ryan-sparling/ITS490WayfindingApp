
  
/*
Notes:
2-15
A fair amount of the body code is me messing around trying to figure out what I'm doing with react
RRS
*/

//import SQLite, {openDatabase} from "react-native-sqlite-storage";
import * as React from 'react';
import { useState, useEffect } from "react";
import {
  Beacons,
  Container,
  Listview,
  VBox,
  BannerHeader,
  BasicSegment,
  screenLink,
  Button, 
  ButtonGroup,
  Divider,
  Field,
  AddressPicker,
  Message,
  Header,
  NavMenu,
  NavMenuItem,
  AekReactRouter,
  RouterView,
  Notifier,
  Form,
  Panel,
  getPlatform
} from "@ombiel/aek-lib";



class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      locations: []
    };
  }

  async componentDidMount() {
    try {
      let r = await fetch('/api/locations');
      let locations = await r.json();
      this.setState({ locations });
    } catch (error) {
      console.log(error);
    }
  }

}
const Screen = () => {
  const [disabled] = useState(getPlatform() === "web2");
  const [loading, setLoading] = useState(false);
  const [beaconData, setBeaconData] = useState({});
  const [includePos, setIncludePos] = useState("Y");
  //const [database] = openDatabase({name : "wayFindingApp.db" , 1: null});
  
  const getLocation = () => {
    setLoading(true);
    const beacons = new Beacons({includePos: includePos});

    beacons.on("data", (res) => {
      setBeaconData(res);
      setLoading(false);
    }); 
  };

  let errorPara;
  if (disabled) {
    errorPara = <p className="error"> Browser does not support Beacons </p>;
  }
  
  
  return (
    <Container>
      <VBox>
        <BannerHeader theme="alt" key="header" data-flex={0}> Where can we help you get to? </BannerHeader>
        <Panel>
          <BasicSegment loading={loading}>
            <Field 
              label="Include Positions" 
              type="select" 
              size="mini" 
              options={["Y", "N"]} 
              name="includePos" 
              onChange={(e) => { setIncludePos(e.target.value); }} 
              value={includePos}
            />
            <Field
              label="Starting Location"
              type="select"
              size="regular"
              options={["Here", "There", "Everywhere"]}
              name="startLocation"
              />
            <Field
              label="Destination"
              type="select"
              size="regular"
              options={["Here", "There", "Everywhere"]}
              name="destination"
              />
            <Field
              label="Points of Interest"
              type="select"
              size="regular"
              options={["IT Helpdesk","Restrooms","Systems Admin Office","CIVS Center"]}
              name="interest"
              />
            <Divider />
            <Button 
              onClick={getLocation} 
              fluid 
              variation="prime"
              disabled={disabled}
            >
              Let's Go!
            </Button>
            <p style={{wordBreak: "break-all"}}> {JSON.stringify(beaconData)} </p>
            {errorPara}

            
          </BasicSegment>
        </Panel>
      </VBox>
    </Container>
  );
};

export default Screen;

/*export class App extends Screen {
  constructor() {
    super();
    SQLite.openDatabase(
      {
        name: 'wayfindingApp.db',
        createFromLocation: 1,
      },
      this.successToOpenDB,
      this.failToOpenDB,
    );
  }
  successToOpenDB() {
    alert('success');
  }

  failToOpenDB(err) {
    console.log(err);
  }
}

/*const fields = 
[
  {address:"street address",required:true},
  {city:"city",required:true},
  {zip :"zip code",required:true},
  {state:"state",required:true}
]*/

/*export default class Screen extends React.Component {
  
  constructor() 
  {
    super();
    this.state = 
    {
      formData:{}
    };
  }
  onChange = (e, name, value)=> 
  {
    const formData = extend({},this.state.formData,{[name]:value});
    this.setState({formData:formData});
  }
  /*click = (a) => {
    alert(a);
  }*/

  /*constructor() {
    super()
    this.beacons.data = 
    {
      [
        {
          uuid: "3cfc4026-5e81-4b76-a682-d54b7e252d12",
          major : 34,
          minor : 402,
          rssi : -72,
          positions : //Only exists if includePos is "Y"
          [ 
            {
              posCode : "42",
              locRef : "ref",
              desc : "Harrison House",
              note : "This is the house on Harrison",
              //img : "https://portal.campusm.exlibrisgroup.com/assets/image.jpg",
              mapCode : "10",
              locCode : "6",
              locCatDesc : "Buildings",
              houseName : "Harrison House",
              flat : "Flat 1",
              streetName : "Harrison",
              district : "University Quarter",
              town : "Lowell",
              county : "Indiana",
              postCode : "46356",
              showOnMap : true,
              longitude : "-87.405738",
              latitude : "41.293544"   
            }
          ]
        },
        {
          uuid: "3cfc4026-5e81-4b76-a682-d54b7e252d12",
          major : 34,
          minor : 401,
          rssi : -72,
          positions : //Only exists if includePos is "Y"
          [ 
            {
              posCode : "43",
              locRef : "ref1",
              desc : "Harrison Backyard",
              note : "This is the backyard of the house on Harrison",
              //img : "https://portal.campusm.exlibrisgroup.com/assets/image.jpg",
              mapCode : "10",
              locCode : "6",
              locCatDesc : "Buildings",
              houseName : "Harrison House",
              flat : "Flat back",
              streetName : "Harrison",
              district : "University Quarter",
              town : "Lowell",
              county : "Indiana",
              postCode : "46356",
              showOnMap : true,
              longitude : "-87.405955",
              latitude : "41.293681"   
            }
          ]
        }
      ]
    }
  
     
    
  
  componentDidMount() {
    
  }
  render() {
    
    /*return (
      
      //only stuff inside the container tags is actually going to show up in the app
      <Container>
        <VBox>
          <div className = "topStuff">
          <BannerHeader theme="alt" key="header" data-flex={0}>PNW Wayfinding App</BannerHeader>
           <Button href="campusm://menu?menucode=1000005687">Click Me</Button>
            
          
          
          </div>
          
          <div>
          
          <label></label>
          </div>
        </VBox>
        <div>
            
          </div>
      
      </Container>
      
    )*/
    
