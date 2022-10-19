import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div>
            <div className='contact-us'>
                <p> CONTACT: 9812060xxx </p>
                <p> Address: Chandigarh-Patiala National  <br />
                    Highway (NH-64) Punjab- 140 401, India
                </p>
            </div>
            <div>
                <iframe title="This is a unique title" 
                style={{ width: "90%", height: "500px", marginTop: "10px", marginLeft: "50px" }} 
                src="https://maps.google.com/maps?width=801&amp;height=573&amp;hl=en&amp;q=Chitkara Univer&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>

        </div>
    )
}