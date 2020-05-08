
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
            addOne : '',
            addTwo: '',
            addThree: '',
            postCode: '',
            Status: 'New',
            Purpose: '',
            RMTeam: '',
            PEP: '',
            AnnualTurnOver: '',
            EstimateTurnOver: '',
            countryList: [],
            businessTypeList: [],
            modal: true
            
            // remember -- change modal to true - while integrating with landing page            
        };
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeBusinessTyp = this.onChangeBusinessTyp.bind(this);
        this.onChangeaddOne = this.onChangeaddOne.bind(this);
        this.onChangeaddTwo = this.onChangeaddTwo.bind(this);
        this.onChangeaddThree = this.onChangeaddThree.bind(this);
        this.onChangepostCode = this.onChangepostCode.bind(this);
        this.onChangePurpose = this.onChangePurpose.bind(this);
        this.onChangeRMTeam = this.onChangeRMTeam.bind(this);
        this.onChangePEP = this.onChangePEP.bind(this);
        this.onChangeAnnualTurnOver = this.onChangeAnnualTurnOver.bind(this);
        this.onChangeEstimateTurnOver = this.onChangeEstimateTurnOver.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };
    // create an instance of the properties for the component and bind their change methods to this.
    
    componentDidMount(){
        this.setState({
            countryList: ['','Afghanistan','Akrotiri','Albania','Algeria','American Samoa','Andorra','Angola','Antarctica','Argentina','Australia','Austria','Bangladesh','Belgium','Bhutan','Brazil','Bulgaria','Cameroon','Canada','Chile','China','Colombia','Costa Rica','Croatia','Cuba','Czech Republic','Denmark','Ecuador','Egypt','Estonia','Ethiopia','Fiji','Finland','France','Georgia','Germany','Ghana','Greece','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Japan','Jordan','Kenya',"Korea, North","Korea, South",'Kuwait','Malaysia','Mexico','Nepal','Netherlands','New Zealand','Norway','Oman','Pakistan','Poland','Russia','Saudi Arabia','Singapore','Spain','Sri Lanka','Sweden','Switzerland','Thailand','Turkey','Uganda','Ukraine','United Kingdom','United States','Venezuela'
        ],
            businessTypeList: ['','Banking','Construction','Consumer Retail','Energy','Entertainment','Finance','Health','Hospitality','Media','Real Estate','Transportation']
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
            addOne : '',
            addTwo: '',
            addThree: '',
            postCode: '',
            Purpose: '',
            RMTeam: '',
            PEP: '',
            AnnualTurnOver: '',
            EstimateTurnOver: ''
        });
        window.location = '/';
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
    
        onChangeaddOne(e){
            this.setState( {
                addOne : e.target.value
            }
            );
        }
    
        //update state when - user enters address line 1
        
        onChangeaddTwo(e){
            this.setState( {
                addTwo : e.target.value
            }
            );
        }
    
        //update state when - user enters address line 2
    
        onChangeaddThree(e){
            this.setState( {
                addThree : e.target.value
            }
            );
        }
    
        //update state when - user enters address line 3
    
        onChangepostCode(e){
            this.setState( {
                postCode : e.target.value
            }
            );
        }
        //update state when - user enters post code

        onChangePurpose(e){
            this.setState({
                Purpose : e.target.value
            });
        }
        // update state for Purpose

        onChangeRMTeam(e){
            this.setState({
                RMTeam : e.target.value
            });
        }
        // update state for RM Team

        onChangePEP(e){
            this.setState({
                PEP : e.target.value
            });
        }
        // update state for PEP

        onChangeAnnualTurnOver(e){
            this.setState({
                AnnualTurnOver : e.target.value
            });
        }
        // update state for AnnualTurnOVer

        onChangeEstimateTurnOver(e){
            this.setState({
                EstimateTurnOver : e.target.value
            });
        }
        // update state for Estimate TurnOVer

        onSubmit(e){
            e.preventDefault();
        
            const customer = {
                custId: Date.now(),
                custName: this.state.custName,
                country: this.state.country,
                businessType: this.state.businessType,
                addOne: this.state.addOne,
                addTwo: this.state.addTwo,
                addThree: this.state.addThree,
                postCode: this.state.postCode,
                Status: this.state.Status,
                Purpose: this.state.Purpose,
                RMTeam: this.state.RMTeam,
                PEP: this.state.PEP,
                AnnualTurnOver: this.state.AnnualTurnOver,
                EstimateTurnOver: this.state.EstimateTurnOver
            };
            
            // create a customer object to be passes and add all the properties
            
            console.log(customer);
            
            // for my own testing
            
            axios.post('https://onboardingapplication.azurewebsites.net/customers/',customer)
            .then(res => {
                console.log(res.data);
                alert("Customer Saved Successfully!")

                this.setState ({
                    custId : '',
                    custName : '',
                    country: '',
                    businessType: '',
                    addOne : '',
                    addTwo: '',
                    addThree: '',
                    postCode: '',
                    Status: '',
                    Purpose: '',
                    RMTeam: '',
                    PEP: '',
                    AnnualTurnOver: '',
                    EstimateTurnOver: '',
                    modal: false
                });

                window.location = '/';
                
            })
            .catch((error) => {
                console.log(error);
                alert("There was an error saving the customer : " + error);
                window.location = '/';
            });

            //connect with backend API and do a post and check for errors, or alert on a successful addition
            // reset the states before leaving the component to initialise the values for the next render.             
        }
    
    // submit the form
    
    //remember - remove the below button used for stand alone testing (1st to be rendered) for integrating with the landing page

    render(){
        return(
        <div>
            
            <Modal  show={this.state.modal} fade="false" style={{width: "1400px", display: "block"}}>
                <Modal.Header>
                    <h5>Customer Registration Form</h5>
                </Modal.Header>
                    <Modal.Body style={{'maxHeight': 'calc(100vh - 200px)', 'overflowY': 'auto'}}>
                        <Form horizontal="true" className="col-sm-12 offset sm-3" onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Customer Name</Form.Label>
                                <Form.Control inline="true" type="text" required size="sm" value = {this.state.custName} 
                                onChange = {this.onChangeName} placeholder="Enter name" />
                            </Form.Group>
                            <Form.Row>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">Country of Registration</Form.Label>
                                <Form.Control as ="select"  required size="sm" value={this.state.country}
                                        onChange = {this.onChangeCountry}>
                                        {
                                            this.state.countryList.map(function(country){
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
                                                this.state.businessTypeList.map(function(businessType){
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
                                <Form.Control inline="true" type="text" required size="sm" value = {this.state.addOne} 
                                        onChange = {this.onChangeaddOne} placeholder="Enter Address Line 1" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Main Address Line 2</Form.Label>
                                <Form.Control inline="true" type="text" required="" size="sm" value = {this.state.addTwo} 
                                    onChange = {this.onChangeaddTwo} placeholder="Enter Address Line 2" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label inline="true" size="sm">Main Address Line 3</Form.Label>
                                <Form.Control inline="true" type="text" required="" size="sm" value = {this.state.addThree} 
                                    onChange = {this.onChangeaddThree} placeholder="Enter Address Line 3" />
                            </Form.Group>
                            <Form.Row>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">Post Code</Form.Label>
                                <Form.Control inline="true" type="text" required size="sm" value = {this.state.postCode} 
                                    onChange = {this.onChangepostCode} placeholder="Enter Post Code" />
                            </Form.Group>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">Pupose</Form.Label>
                                <Form.Control inline="true" type="text" required="" size="sm" value = {this.state.Purpose} 
                                    onChange = {this.onChangePurpose} placeholder="Enter Purpose" />
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">RM Team</Form.Label>
                                <Form.Control inline="true" type="text" required="" size="sm" value = {this.state.RMTeam} 
                                    onChange = {this.onChangeRMTeam} placeholder="Enter the RM Team" />
                            </Form.Group>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">PEP</Form.Label>
                                <Form.Control inline="true" type="text" required="" size="sm" value = {this.state.PEP} 
                                    onChange = {this.onChangePEP} placeholder="Enter PEP" />
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">Annual Turnover</Form.Label>
                                <Form.Control inline="true" type="number" required="" size="sm" value = {this.state.AnnualTurnOver} 
                                    onChange = {this.onChangeAnnualTurnOver} placeholder="Enter Annual TO" />
                            </Form.Group>
                            <Form.Group className="col-sm-6 offset sm-3">
                                <Form.Label inline="true" size="sm">Estimated Turnover</Form.Label>
                                <Form.Control inline="true" type="number" required="" size="sm" value = {this.state.EstimateTurnOver} 
                                    onChange = {this.onChangeEstimateTurnOver} placeholder="Enter Estimate TO" />
                            </Form.Group>
                            </Form.Row>
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
