/*
Notes:

2-15
A fair amount of the body code is me messing around trying to figure out what I'm doing with react

RRS
*/

import React, {Component, memo, useState} from "react";
import AddressForm from './AddressForm';
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
  getPlatform,
  LocationPicker
} from "@ombiel/aek-lib";
import { render } from "stylus";

const fields = [
  {}
]
const Screen = () => {
  const [disabled] = useState(getPlatform() === "web2");
  const [loading, setLoading] = useState(false);
  const [beaconData, setBeaconData] = useState({});
  const [includePos, setIncludePos] = useState("Y");
  
  const getLocation = () => {
    setLoading(true);
    const beacons = new Beacons({includePos: includePos});
    const picker = new LocationPicker({initLat:-51.234234234234234,initLon:23.43234234234234});

    picker.on("complete",(lat,lon,details)=>{
      alert("you picked " + lat + "," + lon);
    });
    picker.on("error",(message,details)=> {
      alert(message);
    });
    picker.on("cancel",()=> {
      alert("You must provide a location");
    });
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
        <BannerHeader theme="alt" key="header" data-flex={0}> Beacons Test </BannerHeader>
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
            <Divider />
            <Button 
              onClick={getLocation} 
              fluid 
              variation="prime"
              disabled={disabled}
            >
              Get Beacon Data
            </Button>
            <p style={{wordBreak: "break-all"}}> {JSON.stringify(beaconData)} </p>
            {errorPara}
          </BasicSegment>
        </Panel>
      </VBox>
      <VBox>
        <BannerHeader theme="alt" key="header" data-flex={0}> Location Picker </BannerHeader>
        <Panel>
          <BasicSegment loading={loading}>
            <Field>
              <LocationPicker></LocationPicker>
              <Button
                onClick={alert("You clicked the button! :O")}
                disable={disabled}
                fluid variation="prime">Submit</Button>
            </Field>
          </BasicSegment>
        </Panel>
      </VBox>
    </Container>
  );
};

export default Screen;

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

