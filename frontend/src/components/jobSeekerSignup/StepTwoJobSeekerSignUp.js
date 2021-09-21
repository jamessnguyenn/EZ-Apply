import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import AddIcon from '@material-ui/icons/Add';

function StepTwoJobSeekerSignUp({setValue, address, apt, city, state, zip, position, position2, company, company2, web1, web2, web3, school, degree, field, setPosition,
     setCompany, setPosition2, setCompany2, startDateMonth, startDateYear, endDateMonth, endDateYear, schoolEndDateMonth, schoolEndDateYear, startDateMonth2, startDateYear2,
    endDateMonth2, endDateYear2, signUp, setStartDateMonth, setEndDateMonth, setStartDateMonth2, setEndDateMonth2,
    setStartDateYear, setEndDateYear, setStartDateYear2, setEndDateYear2}) {
   
    const [currentWork, SetCurrentWork] = useState(false);
    const [currentWork2, SetCurrentWork2] = useState(false);
    const [addWork1, SetAddWork1] = useState(false);
    const [addWork2, SetAddWork2] = useState(false);
    const [cancelWork, SetCancelWork] = useState(true);
    const [cancelWork2, SetCancelWork2] = useState(true);
    const [validated, setValidated] = useState(false);

    const handleAddWork1 = () => {
        if(addWork1 === false && cancelWork === true){
            SetAddWork1(true);
            SetCancelWork(false);
        }
        else{
            SetAddWork1(false);
            SetCancelWork(true);
            setPosition('')
            setStartDateMonth('')
            setStartDateYear('')
            setEndDateMonth('')
            setEndDateYear('')
            setCompany('')
            SetCurrentWork(false);
        }
    }

    const handleAddWork2 = () => {
        if(addWork2 === false && cancelWork2 === true){
            SetAddWork2(true);
            SetCancelWork2(false);
        }
        else{
            SetAddWork2(false);
            SetCancelWork2(true);
            setPosition2('')
            setCompany2('')
            setStartDateMonth2('')
            setStartDateYear2('')
            setEndDateMonth2('')
            setEndDateYear2('')
            SetCurrentWork2(false);
        }
    }

    const handleCurrentWork = () => {
        const checkBox = document.getElementById("checkWork");
        if(checkBox.checked === true){
            SetCurrentWork(true);
            setEndDateMonth('Present')
            setEndDateYear('Present')
        }
        else{
            SetCurrentWork(false);
            setEndDateMonth2('')
            setEndDateYear2('')
        }
    }

    const handleCurrentWork2 = () => {
        const checkBox = document.getElementById("checkWork2");
        if(checkBox.checked === true){
            SetCurrentWork2(true);
            setEndDateMonth2('Present')
            setEndDateYear2('Present')
        }
        else{
            SetCurrentWork2(false);
            setEndDateMonth2('')
            setEndDateYear2('')
        }
    }


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            setValidated(true);
        }else{
            signUp()
        }
    };

    return ( 
        <>
            <div className="signUpBG" >
                <h1 className='text-center'>
                    EZ Apply
                </h1>
            
                <div className='whiteBG mx-auto mt-4' style={{width: '53%', height: '110%'}}>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required placeholder="eg. 1234 Main St" id="address" value={address} onChange={e => setValue(e)} />
                                <Form.Control.Feedback type="invalid">
                                        Please enter your street address.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Apartment, studio, or floor</Form.Label>
                                <Form.Control placeholder="" value={apt} id="apt" onChange={e => setValue(e)} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required value={city} id="city" onChange={e => setValue(e)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your city.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select required value={state} id="state" onChange={e => setValue(e)} >
                                        <option value="">Select State</option>
                                        <option>...</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select your State.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip code</Form.Label>
                                    <Form.Control required placeholder="eg. 12345" value={zip} id="zip" onChange={e => setValue(e)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your zip code.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-4" controlId="formGridCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" value="United States of America" readOnly />
                            </Form.Group>

                            <Form.Group className="mb-0" controlId="formGridWork">
                                <Form.Label>Work Experience</Form.Label>
                            </Form.Group>

                            {!addWork1 && <Form.Group className="mb-0" controlId="formGridWork">
                                    <div id="addWork1" className="btn btn-dark btn-block btn-sm mb-2" value={addWork1} onClick={handleAddWork1}>
                                        <AddIcon /> Add Work 1
                                    </div>
                            </Form.Group>}
                            
                            {addWork1 && !cancelWork &&
                                <div className="AddWorkExperience mb-3">
                                <Form.Group className="mt-3 mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Position" value={position} id="position" onChange={e => setValue(e)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Company" value={company} id="company" onChange={e => setValue(e)} />
                                </Form.Group>

                                <Form.Group controlId="formGridDateRange">
                                    <Form.Label>Date range</Form.Label>
                                </Form.Group>
                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check id="checkWork" type="checkbox" label="I currently work here" value={currentWork} onChange={handleCurrentWork}/>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select value={startDateMonth} id="startDateMonth" onChange={e=> setValue(e)}>
                                            <option>Month</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select value={startDateYear} id="startDateYear" onChange={e=> setValue(e)}>
                                            <option>Year</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Col xs="auto">
                                        <Form.Label>to</Form.Label>
                                    </Col>

                                    <Col>
                                        {!currentWork ? 
                                        <div><Form.Group controlId="formGridDate">
                                                <Form.Select value={endDateMonth} id="endDateMonth" onChange={e=> setValue(e)}>
                                                    <option>Month</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div> :
                                        <div>
                                            <Form.Control type="text" placeholder="Present" readOnly />  
                                        </div>}
                                    </Col>
                                    <Col>
                                        {!currentWork &&
                                            <div><Form.Group controlId="formGridDate">
                                                     <Form.Select value={endDateYear} id="endDateYear" onChange={e=> setValue(e)}>
                                                        <option>Year</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>}
                                    </Col>
                                </Row>

                                <Row className="mb-0">

                                    <Col xs="auto">
                                        <div id="" className="btn btn-danger btn-block btn-sm mb-2" value={cancelWork} onClick={handleAddWork1} >
                                            Cancel
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            }

                            {!addWork2 && <Form.Group className="mb-0" controlId="formGridWork">
                                    <div id="addWork1" className="btn btn-dark btn-block btn-sm mb-2" value={addWork2} onClick={handleAddWork2}>
                                        <AddIcon /> Add Work 2
                                    </div>
                            </Form.Group>}

                            {addWork2 && !cancelWork2 &&
                                <div className="AddWorkExperience mb-3">
                                <Form.Group className="mt-3 mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Position" value={position2} id="position2" onChange={e => setValue(e)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Company" value={company2} id="company2" onChange={e => setValue(e)} />
                                </Form.Group>

                                <Form.Group controlId="formGridDateRange">
                                    <Form.Label>Date range</Form.Label>
                                </Form.Group>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check id="checkWork2" type="checkbox" label="I currently work here" value={currentWork2} onChange={handleCurrentWork2}/>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select value={startDateMonth2} id="startDateMonth2" onChange={e=> setValue(e)}>
                                            <option>Month</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select value={startDateYear2} id="startDateYear2" onChange={e=> setValue(e)}>
                                            <option>Year</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Col xs="auto">
                                        <Form.Label>to</Form.Label>
                                    </Col>

                                    <Col>
                                        {!currentWork2 ? 
                                        <div><Form.Group controlId="formGridDate">
                                                <Form.Select value={endDateMonth2} id="endDateMonth2" onChange={e=> setValue(e)}>
                                                    <option>Month</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div> :
                                        <div>
                                            <Form.Control type="text" placeholder="Present" readOnly />  
                                        </div>}
                                    </Col>
                                    <Col>
                                        {!currentWork2 &&
                                            <div><Form.Group controlId="formGridDate">
                                                     <Form.Select value={endDateYear2} id="endDateYear2" onChange={e=> setValue(e)}>
                                                        <option>Year</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>}
                                    </Col>
                                </Row>

                                <Row className="mb-0">
                                    <Col xs="auto">
                                        <div id="" className="btn btn-danger btn-block btn-sm mb-2" value={cancelWork2} onClick={handleAddWork2} >
                                            Cancel
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            }
                            
                            <Form.Group className="mb-4 mt-4" controlId="formGridWebsites">
                                <Form.Label>Websites <span style={{fontSize: '12px'}}><em>(eg. LinkedIn, Facebook, Personal Website)</em></span></Form.Label>
                                <Form.Control className="mb-2" placeholder="Website 1" id="web1" value={web1} onChange={e => setValue(e)} />
                                <Form.Control className="mb-2" placeholder="Website 2" id="web2" value={web2} onChange={e => setValue(e)} />
                                <Form.Control placeholder="Website 3" id="web3" value={web3} onChange={e => setValue(e)} />
                            </Form.Group>

                            <Form.Group className="mb-0">
                                    <Form.Label>Education</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridSchool">
                                <Form.Control placeholder="School" value={school}  id="school" onChange={e => setValue(e)} />
                            </Form.Group>

                            <Form.Group controlId="formGridDateRange">
                                <Form.Label>Graduation Date</Form.Label>
                            </Form.Group>

                            <Row className="mb-3">
                                <Col>
                                        <div><Form.Group controlId="formGridDate">
                                            <Form.Select value={schoolEndDateMonth} id="schoolEndDateMonth" onChange={e=> setValue(e)}>
                                                    <option>Month</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div> 
                                </Col>
                                    <Col>
                                            <div><Form.Group controlId="formGridDate">
                                                    <Form.Select value={schoolEndDateYear} id="schoolEndDateYear" onChange={e=> setValue(e)}>
                                                        <option>Year</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                    </Col>
                                </Row>


           
                                <Form.Group className="mb-3" controlId="formGridDegree">
                                    <Form.Select value={degree} id="degree" onChange={e => setValue(e)}>
                                        <option>Degree</option>
                                        <option>Bachelor's Degree</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-5" controlId="formGridStudyField">
                                    <Form.Label>Field of Study</Form.Label>
                                    <Form.Control placeholder="eg. Computer Science" value={field} id="field" onChange={e => setValue(e)} />
                                </Form.Group>
                            
                            <div className="agreement mb-4 mt-3" style={{fontSize: '12px', color: '#777'}}>
                                By clicking Sign Up, you are agreeing to our Terms, Data Policy and Cookies Policy.
                            </div>
                            <div class="d-flex justify-content-center">
                                <Button className="mb-5" variant="success" type="submit" size="lg" style={{width: '200px', fontWeight: 'bold'}}>
                                    Sign Up
                                </Button>
                            </div>
                            
                        </Form>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom: '20em'}} />
        </>
            
    )

}

export default StepTwoJobSeekerSignUp;