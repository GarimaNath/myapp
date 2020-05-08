
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

// import all the required packages

export default class CreateCustomer extends Component {

    constructor(props){
        super(props);
        this.state = {
            custId: '',
            custName : '',
            country: '',
            businessType: '',
            addone : '',
            addtwo: '',
            addthree: '',
            postcode: '',
            countrylist: [],
            businesstypelist: [],
            modal: false
            
            // remember -- change modal to true - while integrating with landing page            
        };
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeBusinessTyp = this.onChangeBusinessTyp.bind(this);
        this.onChangeAddOne = this.onChangeAddOne.bind(this);
        this.onChangeAddTwo = this.onChangeAddTwo.bind(this);
        this.onChangeAddThree = this.onChangeAddThree.bind(this);
        this.onChangePostCode = this.onChangePostCode.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    // create an instance of the properties for the component and bind their change methods to this.
    
    componentDidMount(){
        this.setState({
            countrylist: ['','Afghanistan','Akrotiri','Albania','Algeria','American Samoa','Andorra','Angola','Antarctica','Argentina','Australia','Austria','Bangladesh','Belgium','Bhutan','Brazil','Bulgaria','Cameroon','Canada','Chile','China','Colombia','Costa Rica','Croatia','Cuba','Czech Republic','Denmark','Ecuador','Egypt','Estonia','Ethiopia','Fiji','Finland','France','Georgia','Germany','Ghana','Greece','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Japan','Jordan','Kenya',"Korea, North","Korea, South",'Kuwait','Malaysia','Mexico','Nepal','Netherlands','New Zealand','Norway','Oman','Pakistan','Poland','Russia','Saudi Arabia','Singapore','Spain','Sri Lanka','Sweden','Switzerland','Thailand','Turkey','Uganda','Ukraine','United Kingdom','United States','Venezuela'
        ],
            businesstypelist: ['','Banking','Construction','Consumer Retail','Energy','Entertainment','Finance','Health','Hospitality','Media','Real Estate','Transportation']
        });
    }
    
    // will be done only once - just after the component is loaded for the first time
    
    toggle(){
        this.setState({modal: !this.state.modal});
        console.log(this.state.modal);
        this.setState({
            custName : '',
            country: '',
            businessType: '',
            addone : '',
            addtwo: '',
            addthree: '',
            postcode: ''
        });
    }   
    //  method to reset the states required

        onChangeName(e){
            this.setState( {
                custName : e.target.value
            }
            );
        }
        //update state when - user enters custName
    
        onChangeCountry(e){
            this.setState( {
                country : e.target.value
            }
            );
        }
        //update state when - user selects a country
    
        
        onChangeBusinessTyp(e){
            this.setState( {
                businessType : e.target.value
            }
            );
        }
        //update state when - user selects a business type
    
        onChangeAddOne(e){
            this.setState( {
                addone : e.target.value
            }
            );
        }
    
        //update state when - user enters address line 1
        
        onChangeAddTwo(e){
            this.setState( {
                addtwo : e.target.value
            }
            );
        }
    
        //update state when - user enters address line 2
    
        onChangeAddThree(e){
            this.setState( {
                addthree : e.target.value
            }
            );
        }
    
        //update state when - user enters address line 3
    
        onChangePostCode(e){
            this.setState( {
                postcode : e.target.value
            }
            );
        }
        //update state when - user enters post code
    
        onSubmit(e){
            e.preventDefault();
        
            const customer = {
                custId: Math.random(),
                custName: this.state.custName,
                country: this.state.country,
                businessType: this.state.businessType,
                addone: this.state.addone,
                addtwo: this.state.addtwo,
                addthree: this.state.addthree,
                postcode: this.state.postcode
            };
            
            // create a customer object to be passes and add all the properties
            
            console.log(customer);
            
            // for my own testing
            
            axios.post('https://onboardingapplication.azurewebsites.net/customers/',customer)
            .then(res => {
                console.log(res.data);
                alert("Customer Saved Successfully!")})
            .catch((error) => {
                console.log(error);
                alert("There was an error saving the customer : " + error)
            });

            //connect with backend API and do a post and check for errors, or alert on a successful addition

            this.setState ({
                custId : '',
                custName : '',
                country: '',
                businessType: '',
                addone : '',
                addtwo: '',
                addthree: '',
                postcode: '',
                modal: false
            });
            
            // reset the states before leaving the component to initialise the values for the next render.
            
//            window.location = '/';
            
            // remember - Comment/Remove window.location also before integrating with landing page
            // meant for a stand alone testing of the page
             
        }
    
    // submit the form
    
    //remember - remove the below button used for stand alone testing (1st to be rendered) for integrating with the landing page

    render(){
        return(
        <div>
            <Button onClick={this.toggle}>New Customer</Button>
            <Modal  show={this.state.modal} fade="false" style={{width: "1400px", display: "block"}}>
                <Modal.Header>
                    <h6>Customer Registration Form</h6>
                </Modal.Header>
                    <Modal.Body>
                        <Form horizontal="true" className="col-sm-12 offset sm-3" onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Name</Form.Label>
                                <Form.Control inline="true" type="text" required size="sm" value = {this.state.custName} 
                                onChange = {this.onChangeName} placeholder="Enter name" />
                            </Form.Group>
                            <Form.Row>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">Country of Registration</Form.Label>
                                <Form.Control as ="select"  required size="sm" value={this.state.country}
                                        onChange = {this.onChangeCountry}>
                                        {
                                            this.state.countrylist.map(function(country){
                                                return <option
                                                key={country}
                                                value={country}>{country}
                                                </option>;
                                            })
                                        }
                                </Form.Control>
                            </Form.Group>
                            <Form.Group  className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">Business Type</Form.Label>
                                <Form.Control as ="select" placeholder="Select" required size="sm" value = {this.state.businessType} 
                                        onChange = {this.onChangeBusinessTyp}>
                                            {
                                                this.state.businesstypelist.map(function(businessType){
                                                    return <option
                                                    key={businessType}
                                                    value={businessType}>{businessType}
                                                    </option>;
                                                    })
                                            }
                                </Form.Control>
                            </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Main Address Line 1</Form.Label>
                                <Form.Control inline="true" type="text" required size="sm" value = {this.state.addone} 
                                        onChange = {this.onChangeAddOne} placeholder="Enter Address Line 1" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Main Address Line 2</Form.Label>
                                <Form.Control inline="true" type="text" required="" size="sm" value = {this.state.addtwo} 
                                    onChange = {this.onChangeAddTwo} placeholder="Enter Address Line 2" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Main Address Line 3</Form.Label>
                                <Form.Control inline="true" type="text" required="" size="sm" value = {this.state.addthree} 
                                    onChange = {this.onChangeAddThree} placeholder="Enter Address Line 3" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Post Code</Form.Label>
                                <Form.Control inline="true" type="text" required size="sm" value = {this.state.postcode} 
                                    onChange = {this.onChangePostCode} placeholder="Enter Post Code" />
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit" className="btn btn-primary">Create Customer</Button>
                                    {' '}
                                <Button onClick={this.toggle}>Cancel</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>);
            }
        }
