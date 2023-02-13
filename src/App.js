import { useState } from 'react';
import AddUser from './AddUser';
import './App.css';
import ShowUsers from './ShowUsers';
import {nanoid} from 'nanoid';

function App() {
 const data =  [
    {fullName: "xyz", email:"xyz@gmail.com", password:"xyzzyx", address: "asdf", phoneNumber: "03331111", id:1},
    {fullName: "khan", email:"khan@gmail.com", password:"khanaa", address: "kahni", phoneNumber: "0232111", id:2},
    {fullName: "wali", email:"wali@gmail.com", password:"waliaa", address: "wakii", phoneNumber: "023431111", id:3},
]
const [contacts, setContacts] = useState(data);
const [addFormData, setFormData] = useState({
  fullName: '',
  email:'',
  phoneNumber:'',
  address:'',
});

const [editFormData, setEditFormData] = useState({
  fullName: '',
  email:'',
  phoneNumber:'',
  address:'',
});
const [ editContactId, setEditContactId] = useState(null);

const handleAddFormChange = (event)=>{
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;
  const newFormData = {...addFormData};
  newFormData[fieldName] = fieldValue;
  setFormData(newFormData);
}



const handleEditFormChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = { ...editFormData };
  newFormData[fieldName] = fieldValue;

  setEditFormData(newFormData);
};

const handleAddFormSubmit = (event) => {
  event.preventDefault();
  const newContact = {
    id: nanoid(),
    fullName: addFormData.fullName,
    email: addFormData.email,
    address: addFormData.address,
    phoneNumber: addFormData.phoneNumber,
  };
  const newContacts = [...contacts, newContact ];
  setContacts(newContacts);
}
const handleEditClick = (event, contact) => {
  event.preventDefault();
  setEditContactId(contact.id);

  const formValues = {
    fullName: contact.fullName,
    address: contact.address,
    phoneNumber: contact.phoneNumber,
    email: contact.email,
  };

  setEditFormData(formValues);
};

const handleEditFormSubmit = (e)=>{
e.preventDefault();
const editedContact = {
  id: editContactId,
  fullName: editFormData.fullName,
  email:editFormData.email,
  address: editFormData.address,
  phoneNumber:editFormData.phoneNumber,
}
const newContacts = [...contacts];
const index = contacts.findIndex((contact) => contact.id === editContactId);
newContacts[index] = editedContact;
setContacts(newContacts);
setEditContactId(null);
}
const handleCancelClick = () =>{
  setEditContactId(null);
}
const handleDeleteClick = (contactId)=>{
  const newContacts = [...contacts];
  const index = contacts.findIndex((contact) => contact.id === contactId);
  newContacts.splice(index,1);
  setContacts(newContacts);
}
  return (
    <div className="app-container">
      <AddUser handleAddFormSubmit={handleAddFormSubmit} handleAddFormChange={handleAddFormChange} />
      <ShowUsers handleDeleteClick={handleDeleteClick} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} editFormData={editFormData} handleCancelClick={handleCancelClick} handleEditClick={handleEditClick} editContactId={editContactId} contacts={contacts} />
      
    </div>
  );
}

export default App;
