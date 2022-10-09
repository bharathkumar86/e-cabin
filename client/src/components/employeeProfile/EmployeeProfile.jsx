import "./EmployeeProfile.css"
import AdminNavbar from "../adminNavbar/AdminNavbar"
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import LockIcon from '@mui/icons-material/Lock';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LockClockIcon from '@mui/icons-material/LockClock';
import { useRef } from "react";
import { useState } from "react";

export default function EmployeeProfile(props) {

    const name = useRef()
    const email = useRef()
    const mobile = useRef()
    const department = useRef()
    const joiningDate = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name.current.value + " " + email.current.value + " " + mobile.current.value + " " + department.current.value + " " + joiningDate.current.value);
    }

    return (
        <>
            <div className="profileEditWrapper">
                <AdminNavbar />
                <div className="profileEdit">
                    <form onSubmit={handleSubmit}>

                        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                            <EditIcon />
                            <h3 style={{marginLeft: "10px"}}>Edit Your Details</h3>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <div className="formElement readOnly">
                            <div><LockPersonIcon style={{fontSize:"30px"}}/></div>
                            <input ref={name} id="name" type="text" value={props.name} readOnly/>
                        </div>
                        <div className="formElement ">
                            <div><EmailIcon style={{fontSize:"30px"}} /></div>
                            <input  ref={email} id="email" type="text" placeholder={props.email}></input>
                        </div>

                        <div className="formElement">
                            <div><LocalPhoneIcon style={{fontSize:"30px"}} /></div>
                            <input ref={mobile} id="mobile" type="text" placeholder={props.mobile}></input>
                        </div>

                        <div className="formElement readOnly">
                            <div><LockIcon style={{fontSize:"30px"}} /></div>
                            <input ref={department} id="department" type="text" value={props.department} readOnly/>
                        </div>

                        <div className="formElement readOnly">
                            <div><LockClockIcon style={{fontSize:"30px"}} /></div>
                            <input ref={joiningDate} id="joiningDate" type="text" value={props.joiningDate} readOnly/>
                        </div>

                        <button className="submitButton" type="submit">Save Changes</button>
                    </form>
                </div>
            </div>
        </>
    )
}