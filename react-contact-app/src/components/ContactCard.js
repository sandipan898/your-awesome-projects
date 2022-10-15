import React from 'react'
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactCard = ({contact, clickHandler}) => {
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={{pathname: `contact/${contact.id}`, state: { contact: contact }}}>
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </Link>
            </div>
            <Link to={{pathname: `/delete/${contact.id}`, state: {contactId: contact.id}}}>
                <i className="trash alternate outline icon"
                    style={{color: "red", marginTop:"7px", }}
                    // onClick={() => clickHandler(contact.id)}
                ></i>
            </Link>
            <Link to={{pathname: `/edit/${contact.id}`, state: {contact: contact}}}>
                <i className="edit alternate outline icon"
                    style={{color: "red", marginTop:"7px"}}
                ></i>
            </Link>
        </div>
    )
}

export default ContactCard;
