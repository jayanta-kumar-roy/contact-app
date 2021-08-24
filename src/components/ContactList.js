import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact}></ContactCard>
        )
    })
    console.log(props);
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList
