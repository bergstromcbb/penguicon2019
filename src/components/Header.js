import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
	DropdownToggle,
  DropdownMenu,
	DropdownItem } from 'reactstrap';
import ConnectwithUs from './ConnectwithUs';
import Form from './Form';
import News from './News';
import HeaderLogo from "../img/2019_pcon_logo_hex-75.png";
import TitleBar from './TitleBar';
import Home from './Home';
import PresentAnEvent from "./PresentAnEvent";
import HotelInfo from "./HotelInfo";
import MakersMarket from "./MakersMarket";
import ProgrammingSchedule from "./ProgrammingSchedule";
import PurchaseBadge from "./PurchaseBadge";
import Ribbons from "./Ribbons";
import SpecialEvents from "./SpecialEvents";
import SpecialGuests from "./SpecialGuests";
import ConSuite from "./ConSuite";
import WritersBlock from "./WritersBlock";
import Footer from "./Footer";
import Accessibility from "./Accessibility";
import CodeOfConduct from "./CodeOfConduct";
import EventCalendar from "./EventCalendar";
import Facts from "./Facts";
import Flyer from "./Flyer";
import JoinMakerMarket from "./JoinMakerMarket";
import JoinOurStaff from "./JoinOurStaff";
import Penguicon101 from "./Penguicon101";
import PhotosVideos from "./PhotosVideos";
import PreviousEvents from "./PreviousEvents";
import SponsorPenguicon from "./SponsorPenguicon";
import StaffList from "./StaffList";
import SubmitFeedback from "./SubmitFeedback";
import Volunteer from "./Volunteer";


export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
	}
	
  render() {
    return (
		  <Router>
				<Navbar light expand="md">
          <NavbarBrand className="header-logo-container" href="/">
					<img className="header-logo" src={ HeaderLogo }  alt="twitter"/>
					</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/News">News</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  This Year
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/PurchaseBadge">Purchase Badge</DropdownItem>
                  <DropdownItem href="/HotelInfo">Hotel Information</DropdownItem>
                  <DropdownItem href="/SpecialGuests">Special Guests</DropdownItem>
                  <DropdownItem href="/ProgrammingSchedule">Programming Schedule</DropdownItem>
                  <DropdownItem href="/SpecialEvents">Special Events</DropdownItem>
                  <DropdownItem href="/WritersBlock">Writers' Block</DropdownItem>
                  <DropdownItem href="/ConSuite">ConSuite</DropdownItem>
                  <DropdownItem href="/MakersMarket">Makers Market</DropdownItem>
                  <DropdownItem href="/Ribbons">Ribbons</DropdownItem>                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
		            <DropdownToggle nav caret>
                  Get Involved
                </DropdownToggle>
                <DropdownMenu right>
								<DropdownItem href="/Volunteer">Volunteer</DropdownItem>                  
								<DropdownItem href="/JoinOurStaff">Join Our Staff</DropdownItem>                  
								<DropdownItem href="/PresentAnEvent">Present An Event</DropdownItem>                  
								<DropdownItem href="/JoinMakerMarket">Join Maker Market</DropdownItem>                  
								<DropdownItem href="/Flyers">Flyers</DropdownItem>                  
								<DropdownItem href="/SponsorPenguicon">Sponsor Penguicon</DropdownItem>                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
						    <DropdownToggle nav caret>
                  About Penguicon
                </DropdownToggle>
                <DropdownMenu right>
								<DropdownItem href="/EventCalendar">Event Calendar</DropdownItem>                  
								<DropdownItem href="/CodeOfConduct">Code Of Conduct</DropdownItem>                  
								<DropdownItem href="/Penguicon101">Penguicon 101</DropdownItem>                  
								<DropdownItem href="/PreviousEvents">Previous Events</DropdownItem>                  
								<DropdownItem href="/Accessibility">Accessibility</DropdownItem>                  
								<DropdownItem href="/PhotosVideos">Photos and Videos</DropdownItem>                  
								<DropdownItem href="/Facts">Facts</DropdownItem>                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact Us
                </DropdownToggle>
                <DropdownMenu right>
								<DropdownItem href="/ConnectwithUs">Connect with Us</DropdownItem>                  
								<DropdownItem href="/StaffList">Staff List</DropdownItem>                  
								<DropdownItem href="/SubmitFeedback">Submit Feedback</DropdownItem>                  
                </DropdownMenu>
              </UncontrolledDropdown>
							<NavItem>
                <NavLink href="/ConnectwithUs">Connect with Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <TitleBar />
				<div className="header">
					<Route path="/PresentAnEvent" component={PresentAnEvent}/>
					<Route exact path="/" component={Home}/>
					<Route path="/News" component={News}/>
					<Route path="/Form" component={Form}/>
					<Route path="/ConnectwithUs" component={ConnectwithUs}/>   
					<Route path="/PurchaseBadge" component={PurchaseBadge}/>                             
					<Route path="/HotelInfo" component={HotelInfo}/>                
					<Route path="/SpecialGuests" component={SpecialGuests}/>                
					<Route path="/ProgrammingSchedule" component={ProgrammingSchedule}/>                
					<Route path="/SpecialEvents" component={SpecialEvents}/>                
					<Route path="/WritersBlock" component={WritersBlock}/>                
					<Route path="/ConSuite" component={ConSuite}/>                
					<Route path="/Ribbons" component={Ribbons}/>                
					<Route path="/MakersMarket" component={MakersMarket}/>
					<Route path="/SubmitFeedback" component={SubmitFeedback}/>                
					<Route path="/StaffList" component={StaffList}/>                
					<Route path="/EventCalendar" component={EventCalendar}/>                
					<Route path="/CodeOfConduct" component={CodeOfConduct}/>                
					<Route path="/Penguicon101" component={Penguicon101}/>                
					<Route path="/PreviousEvents" component={PreviousEvents}/>                
					<Route path="/PhotosVideos" component={PhotosVideos}/>                
					<Route path="/Facts" component={Facts}/>                
					<Route path="/Accessibility" component={Accessibility}/>                
					<Route path="/Volunteer" component={Volunteer}/>                
					<Route path="/JoinOurStaff" component={JoinOurStaff}/>                
					<Route path="/Flyer" component={Flyer}/>                
					<Route path="/SponsorPenguicon" component={SponsorPenguicon}/>                
					<Route path="/JoinMakerMarket" component={JoinMakerMarket}/>                
				</div>
				<Footer />
		</Router>

    )
  }
}

export default Header;
