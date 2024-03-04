import { useState } from 'react';
import Form from '../components/form/Form';
import './App.css'

const App = () => {
  // Update Formos šablonas
  const [data, setData] = useState({
    name: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setData({ ...data, [e.target.name] : e.target.value });
  }

  // CRUD:
  // CREATE
  // READ
  // UPDATE
  // DELETE

  return (
    <>
      <form>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Įveskite savo vardą"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Įveskite temą"
            name="topic"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control"
            placeholder="Įveskite žinutę"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>Vardas: {data.name}</div>
        <div>Tema: {data.topic}</div>
        <div>Žinutė: {data.message}</div>
      </form>
      <Form />
    </>
  )
}

export default App
