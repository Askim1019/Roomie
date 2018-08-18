import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";
import Big from "../components/Modal";
import Modal from 'react-responsive-modal';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component{
  state={
    events:[
      {
         //*******There is something to note the months are displayed 1 back which means if you want 
        //to display for month 8 then code must be for month 7 */
        //change to automatically make rent due the first day of the moment by utilizing moment (need to research more!) use regular javascript and maybe math but best to do this on the server side
        //start: new Date(moment().add(1,'days')),
        //end: new Date(moment().add(1, "days")), 
        start: new Date(2018, 7, 1),
        end: new Date(2018, 7, 1),
        title:"Rent Due"
      },
      {
        //start: new Date(moment().add(11,'days')),
        //end: new Date(moment().add(11, "days")),
        start: new Date(2018, 7, 5),
        end: new Date(2018, 7, 5),
        title:"Electricity Bill Due"
      },
      {
        //start: new Date(moment().add(7,'days')),
        //end: new Date(moment().add(7, "days")),
        start: new Date(2018, 7, 7),
        end: new Date(2018, 7, 7),
        title:"Internet Bill Due"
      },
      {
        //start: new Date(moment().add(15,'days')),
        //end: new Date(moment().add(15, "days")),
        start: new Date(2018, 7, 15),
        end: new Date(2018, 7, 15),
        title:"Water Bill Due"
      },
      {
       
        //start: new Date(moment().add(7,'days')),
       // end: new Date(moment().add(10, "days")),
        start: new Date(2018, 7, 18),
        end: new Date(2018, 7, 22),
        title:"Joanne's Vacation"
      } 
    ],

    bigModal: false
  }
  //events = state
  // retrieve from database and iterate through changing state dynamically.
  // handleGetEvents = ()=>{
  //   this.setState
  // }

/*   rentDueDate = () => {
    
  } */

  eventFunc = () => {
    this.setState({bigModal: true});
    //somehow render the modal

  };
  

  render(){
    return(
      <div>
        <Navbar1 />

           {
             this.state.bigModal ? 
        <Modal open={true}>
          <Big />
        </Modal> : false
          
          }


        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
           
              <BigCalendar
              className="customCal"
              // className = if classname doesnt work go to node modules, react-big-calendar lib css react-big-calendar.css and change css there but try to use our own classes****
              defaultDate={new Date()}
              defaultView="month"
              selectable  
              //instead of alert, make a modal
              onSelectEvent={this.eventFunc}  
              events={this.state.events}
              style={{height:"100vh"}}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>

    )
  }

};

export default Calendar;