import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import StepOneJobSeekerSignUp from "./StepOneJobSeekerSignUp";
import StepTwoJobSeekerSignUp from "./StepTwoJobSeekerSignUp";
import axios from "axios";
import './JobSeekerSignup.css'
import NavBar from '../loggedOutNavBar/NavBar'

function JobSeekerSignUp(){
    
    let history = useHistory();
    const[firstStep, setFirstStep] = useState(true)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [apt, setApt] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [position, setPosition] = useState('');
    const [position2, setPosition2] = useState('');
    const [company, setCompany] = useState('')
    const [company2, setCompany2] = useState('');
    const [startDateMonth, setStartDateMonth] = useState('');
    const [startDateMonth2, setStartDateMonth2] = useState('');
    const [startDateYear, setStartDateYear] = useState('');
    const [startDateYear2, setStartDateYear2] = useState('');
    const [endDateMonth, setEndDateMonth] = useState('');
    const [endDateMonth2, setEndDateMonth2] = useState('');
    const [endDateYear, setEndDateYear] = useState('');
    const [endDateYear2, setEndDateYear2] = useState('');
    const [web1, setWeb1] = useState('');
    const [web2, setWeb2] = useState('');
    const [web3, setWeb3] = useState('');
    const [school, setSchool] = useState('');
    const [schoolEndDateMonth, setSchoolEndDateMonth] = useState('');
    const [schoolEndDateYear, setSchoolEndDateYear] = useState('');
    const [degree, setDegree] = useState('');
    const [field, setField] = useState('');
    const [existEmail, setExistEmail] = useState(false);


    const signUp = ()=>{
        const experiences = []
        const websites = []
        if(company !== "" && position !== "" && startDateMonth !=="" && startDateYear !=="" && endDateMonth !=="" && endDateYear!==""){
            var endDate = "" 
            if(endDateMonth === "Present" && endDateYear === "Present"){
                endDate = "Present"
            }else{
                endDate = endDateMonth +" "+ endDateYear
            }
            
            experiences.push({
                company: company,
                position: position,
                startDate: startDateMonth +" "+ startDateYear,
                endDate: endDate
            })
        }
        if(company2 !== "" && position2 !== "" && startDateMonth2 !=="" && startDateYear2 !=="" && endDateMonth2 !=="" && endDateYear2!==""){
            var endDate2 = "" 
            if(endDateMonth2 === "Present" && endDateYear2 === "Present"){
                endDate2 = "Present"
            }else{
                endDate2 = endDateMonth2 +" "+ endDateYear2
            }
            experiences.push({
                company: company2,
                position: position2,
                startDate: startDateMonth2 +" "+ startDateYear2,
                endDate: endDate2
            })
        }
        if(web1 !== ""){
            websites.push(web1)
        }
        if(web2 !== ""){
            websites.push(web2)
        }
        if(web3 !== ""){
            websites.push(web3)
        }
        const jobSeeker = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address:{
                street: address,
                city: city,
                apt: apt,
                state: state,
                zipcode: zip
            },
            experiences:experiences,
            websites: websites,
        }
        if(school !== "" && schoolEndDateMonth !== "" && schoolEndDateYear !=="" && degree !=="" && field !== ""){
            jobSeeker.education = {
                school: school,
                endDate: schoolEndDateMonth+ " " + schoolEndDateYear,
                degree: degree,
                fieldOfStudy: field
            }
        }

        axios.post("https://ez-apply-api.herokuapp.com/jobSeekers", jobSeeker)
        .then(res=>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user_id', res.data.user_id)
            history.push('/jobseeker/dashboard')
        })
        .catch(err=>{
            if(err.response && err.response.status === 420){
                setFirstStep(true)
                setExistEmail(true)
            }}
            )
    }

    const setValue = (e)=>{
        switch(e.target.id){
            case 'firstName': 
                setFirstName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                if(existEmail === true){
                    setExistEmail(false)
                }
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value)
                break;
            case 'address':
                setAddress(e.target.value)
                break;
            case 'apt':
                setApt(e.target.value)
                break;
            case 'city':
                setCity(e.target.value)
                break;
            case 'state':
                setState(e.target.value)
                
                 break;
            case 'zip':
                setZip(e.target.value)
                break;
            case 'position':
                setPosition(e.target.value)
                break;
            case 'position2':
                setPosition2(e.target.value)
                break
            case 'company':
                setCompany(e.target.value)
                break;
            case 'company2':
                setCompany2(e.target.value)
                break;
            case 'web1':
                setWeb1(e.target.value)
                break;
            case 'web2':
                setWeb2(e.target.value)
                break;
            case 'web3':
                setWeb3(e.target.value)
                break;
            case 'school':
                setSchool(e.target.value)
                break;
            case 'degree':
                setDegree(e.target.value)
                break;
            case 'field':
                setField(e.target.value)
                break;
            case 'startDateMonth':
                setStartDateMonth(e.target.value)
                break;
            case 'startDateYear':
                setStartDateYear(e.target.value)
                break;
            case 'endDateMonth':
                setEndDateMonth(e.target.value)
                break;
            case 'endDateYear':
                setEndDateYear(e.target.value)
                break;
            case 'startDateMonth2':
                setStartDateMonth2(e.target.value)
                break;
            case 'startDateYear2':
                setStartDateYear2(e.target.value)
                break;
            case 'endDateMonth2':
                setEndDateMonth2(e.target.value)
                break;
            case 'endDateYear2':
                setEndDateYear2(e.target.value)
                break;
            case 'schoolEndDateMonth':
                setSchoolEndDateMonth(e.target.value)
                break;
            case 'schoolEndDateYear':
                setSchoolEndDateYear(e.target.value)
                break;
            default:
                console.log("Error")

        }
       
    }

    // proceed to the second step
    const secondStep = () => {
        setFirstStep(false)
    }
         return (
             <>
             <NavBar/>
            <div className="row mx-auto">
                <div className="col-5 sticky-top side-image" style={{ top:"56px"}}>
                <div className="signup-bg-img mx-auto"/>
                <h1 className="text-center bottom-align-text" style={{fontSize:"2em", color: "white"}} > Find Your Dream Job Now</h1>
                <div className='noAccount d-flex justify-content-center mb-4' style={{ fontSize: '15px', color: 'white',  marginTop:"20px" }}>
                Already have an account? &nbsp;
                <a href='/jobSeeker/login'  style={{color: "#add8e6"}}>Sign into your account</a>
              </div>
                    </div>
                <div className="col-5 mx-auto">
                {firstStep? <StepOneJobSeekerSignUp secondStep={secondStep} 
                    setValue={setValue} firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword} existEmail={existEmail}/>:
                    <StepTwoJobSeekerSignUp setValue={setValue} address={address} apt={apt} city={city} state={state}
                    zip={zip} positon={position} position2={position2} company={company} company2={company2} web1={web1}
                    web2={web2} web3={web3} school={school} degree={degree} field={field} startDateMonth={startDateMonth} startDateYear={startDateYear}
                    endDateMonth={endDateMonth} endDateYear={endDateYear} startDateMonth2={startDateMonth2} startDateYear2={startDateYear2}
                    endDateMonth2={endDateMonth2} endDateYear2={endDateYear2} schoolEndDateMonth={schoolEndDateMonth} schoolEndDateYear={schoolEndDateYear}
                    setCompany={setCompany} setCompany2={setCompany2} setPosition={setPosition} setPosition2={setPosition2} signUp={signUp}
                    setStartDateMonth={setStartDateMonth} setEndDateMonth={setEndDateMonth} setStartDateMonth2={setStartDateMonth2} setEndDateMonth2={setEndDateMonth2}
                    setStartDateYear={setStartDateYear} setEndDateYear={setEndDateYear} setStartDateYear2={setStartDateYear2} setEndDateYear2={setEndDateYear2} />}
                    </div>
            </div>
                 </>
                 
         )
}

export default JobSeekerSignUp;


