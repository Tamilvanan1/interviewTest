import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

const App = () => {

  const [listItems , setListItems] = useState([{name : "Tamil" , id : 1}])

  const handleAddUser = async() => {
    try {
      const randomNumber = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
      setListItems([...listItems , {name : "Tamil" , id : randomNumber}])

      // I have faced cors orgin issue thats why i worked with state handling only

      console.log("randomNumberrandomNumber",randomNumber)
      const response = await axios.get(`https://swapi.dev/api/people/${randomNumber}`, {
        "Accept" : 'application/json',
      })
      // .then(response => console.log("filterUser" ,response.json()))

      console.log("responseresponse",response)
      setListItems([...listItems , {name : "Tamil" , id : randomNumber}])

      
    } catch (error) {
      console.log("errors",error)
    }
  }


  const handleDelete = (id) => {
    console.log(id,listItems)
    const filterUser = listItems?.filter((data) => data?.id != id)
    setListItems(filterUser)
  }
  return (
      <div>
        <button onClick={() => {handleAddUser()}}>
          Add
        </button>
        <table>
              <thead>
                  <tr>
                      <th>name</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {listItems?.map((data) => {
                    return (
                      <tr>
                        <td>
                          {data?.name}
                        </td>
                        <td>
                          <button onClick={() => {handleDelete(data?.id)}}>
                          Delete
                          </button>
                          
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
          </table>
      </div>
  );
}

export default App;
