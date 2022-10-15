import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { uuid } from 'uuidv4';
import api from '../api/contacts';

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeletePopup from './DeletePopup';
import EditContact from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const retrieveContacts = async () => {
    const response = await api.get('/contacts')
    return response.data;
  } 

  const addContactHandler = async (contact) => {
    const requestBody = {
      id: uuid(), 
      ...contact
    };
    const response = await api.post('/contacts', requestBody);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const requestBody = {
      contact
    };
    const response = await api.put(`/contacts/${contact.id}`, requestBody);
    const { id, name, email } = response.data.contact;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data.contact} :  contact
    }));
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList);
  };

  const searchHandler = () => {};

  useEffect(() => {
    // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrievedContacts) setContacts(retrievedContacts)

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts();

  }, [])
  
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/add" component={() => <AddContact addContactHandler={addContactHandler}/>} /> */}
          <Route path="/add" render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )} />
          
          <Route path="/edit/:id" render={(props) => (
            <EditContact {...props} updateContactHandler={updateContactHandler}/>
          )} />
          
          <Route path="/" exact render={(props) => (
              <ContactList {...props} contacts={ contacts } 
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )} />

          <Route path="/contact/:id" component={ContactDetail}/>
          <Route path="/delete/:id" render={(props) => (
            <DeletePopup {...props} getContactId={removeContactHandler} />
          )}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
