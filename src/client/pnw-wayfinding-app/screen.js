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
const beacons = new Beacons({includePos: "N"});

beacons.on("data", (data) => {
  setBeaconData(data);
});


export default class Screen extends React.Component {

  componentDidMount() {
    
  }

  render() {

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