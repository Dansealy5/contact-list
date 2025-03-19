import { useState } from "react";
import { useEffect } from "react";

const selectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json()
                setContact(result)
                console.log(result);
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    }, []);
    return (
      <div>
        <table>
        <thead>
          <tr>
            <th colSpan="6">Contact Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6">Id: {contact?.id}</td>
          </tr>
          <tr>
            <td colSpan="6">Name: {contact?.name}</td>
          </tr>
          <tr>
            <td colSpan="6">Username: {contact?.username}</td>
          </tr>
          <tr>
            <td colSpan="6">Email: {contact?.email}</td>
          </tr>
          <tr>
            <td colSpan="6">Phone: {contact?.phone}</td>
          </tr>
          <tr>
            <td colSpan="6">Website: {contact?.website}</td>
          </tr>
        </tbody>
      </table>
        <button onClick={() => {
        setSelectedContactId(null);
        }}>Back
        </button>
      </div>
     );
}
 
export default selectedContact;