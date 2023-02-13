import ReadOnlyRow from "./components/ReadOnlyRow";
import './App.css';
import EditableRow from "./components/EditableRow";
import { Fragment } from "react";

const ShowUsers = ({handleDeleteClick,handleCancelClick,contacts, editContactId, handleEditClick,editFormData,handleEditFormChange, handleEditFormSubmit}) => {
  
    return (
        <div>
          <form onSubmit={handleEditFormSubmit}>
            <table>
        <thead>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {contacts.map((contact) =>
          <Fragment>
            {editContactId === contact.id?(<EditableRow
            editFormData={editFormData} handleCancelClick={handleCancelClick}
            handleEditFormChange ={handleEditFormChange}
            />):(
            <ReadOnlyRow
            handleDeleteClick={handleDeleteClick}
             handleEditClick={handleEditClick}
              contact={contact}
            />) }
          </Fragment>
          )}
        </tbody>
        </table>
        </form>
        </div>
    );
}

export default ShowUsers;