import { useEffect, useState, useMemo } from 'react';
import Info from './component/Info';
import Add from './component/Add';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchFilms = async () => {
    try {
      const res = await fetch('http://localhost:3001/posts');
      const data = await res.json();
      if (res.status === 200) {
        setData(data);

      }

    } catch (error) {
      setError('error');
    }
  }

  useEffect(() => {
    fetchFilms();
  }, [])

  const [tableData, setTableData] = useState([])
  const [formInputData, setFormInputData] = useState(
    {
      name: '',
      genre: '',
      director: '',
      year: '',
      description: ''
    }
  );

  const handleChange = (event) => {
    const newInput = (data) => ({ ...data, [event.target.name]: event.target.value })
    setFormInputData(newInput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if ( formInputData.name !== "" 
      && formInputData.genre !== "" 
      && formInputData.director !== ""
      && formInputData.year !== ""
      && formInputData.description !== "") {
       
      const newData = (data) => ([...data, formInputData])
      setTableData(newData);
      console.log(formInputData);
      emptyInput();
      fetch('http://localhost:3001/posts',
        {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formInputData)

        })
        .then(response => response.json())
      console.log(formInputData);
    }
  }


  useMemo(() => {
    fetchFilms();
  }, [tableData]);


  const emptyInput = (e) => {
    e.preventDefault();

    if (formInputData.name !== ""
      || formInputData.genre !== ""
      || formInputData.director !== ""
      || formInputData.year !== ""
      || formInputData.description !== "") {

      setFormInputData({
        name: '',
        genre: '',
        director: '',
        year: '',
        description: ''

      });
    }
  }

  const deleteFilm = (id) => {

    const newFilmInfo = data.filter((item) => item.id !== id);
    setData(newFilmInfo);
    console.log(newFilmInfo);


    fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
    })

  }


  return (
    <>
      <div>
        <Add handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} emptyInput={emptyInput} />
        <Info film={data} deleteFilm={deleteFilm} />

      </div>
    </>

  );
}

export default App;
