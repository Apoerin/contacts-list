import React, { useState, useEffect } from 'react';
import "./App.css";

import Header from './components/Header';
import Contact from './components/Contact';
import Search from './components/Search';

import Container from 'react-bootstrap/Container';

const URL = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  //fetching list of contacts from url
  const fetchContactsList = async() => {
    try {
      let response = await fetch(URL)
      let contacts = await response.json()
      contacts.sort( (a,b) => a.last_name.localeCompare(b.last_name))
      setContacts(contacts)
    } catch (error) {
      console.log(error)
    }
  }

  //returning filtered contacts list by first letters of first name or last name
  const filterContacts = ({ first_name, last_name }) => {
    return first_name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())
    || last_name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())
  }

  useEffect(() => {
    fetchContactsList()
  }, []);

  return (
    <main>
      <Container>
        <Header />
        <Search onSearch={setSearchValue} value={searchValue} />
          {contacts.filter(filterContacts).map((contact, id) => (
            <Contact key={id} {...contact}/>
          ))}
      </Container>
    </main>
  );
}

export default App;
