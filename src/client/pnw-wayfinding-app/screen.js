import React from "react";
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
  RouterView
} from "@ombiel/aek-lib";


const url = screenLink("campusm://menu?menucode=1000005687")
const beacons = new Beacons({includePos: "Y"});


let data = 
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
export default class Screen extends React.Component {

  componentDidMount() {
    
  }

  render() {

    beacons.on("data", (data) => {
      setBeaconData(data);
      alert("Beacons detected");
    });

    return (
      
      
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>PNW Wayfinding App</BannerHeader>

          <Button href="campusm://menu?menucode=1000005687">Click Me</Button>

          <Field label="My Input"/>
          
          
          
        </VBox>
        

      
      </Container>
      
    )
  }

}