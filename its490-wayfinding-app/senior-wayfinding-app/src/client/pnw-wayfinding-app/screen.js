/*
Notes:

2-15
A fair amount of the body code is me messing around trying to figure out what I'm doing with react

RRS
*/

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
  RouterView,
  Notifier
} from "@ombiel/aek-lib";


const url = screenLink("campusm://menu?menucode=1000005687")
const beacons = new Beacons({includePos: "Y"});
//const addressPicker = new AddressPicker();



let message = "Button pressed!"

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
  
  constructor() {
    super()
    this.state = {
      showMessage: 0
    }
    //this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  showMessage() {
    this.setState({
      showMessage: Boolean
    });
  }



  render() {

    



    return (
      
      //only stuff inside the container tags is actually going to show up in the app
      <Container>






        <VBox>
          <div className = "topStuff">
          <BannerHeader theme="alt" key="header" data-flex={0}>PNW Wayfinding App</BannerHeader>

           <Button href="campusm://menu?menucode=1000005687">Click Me</Button>

          <Field label="{Message(message)}"/>
          <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Change!</button>
          
          
          </div>
          
          <div>
          
          <label></label>
          </div>
        </VBox>
        <div>
            
          </div>

      
      </Container>
      
    )
    
  }
  
  //displayMessage(message) {console.log(message)}
}