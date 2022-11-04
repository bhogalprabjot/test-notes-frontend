import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Card from './Card';
import axios from 'axios';
import Details from './Details';
import { BASE_URL } from '../utils';

function Home(props) {

  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [refresh, setRerfresh] = useState(false);
  const newNote = props.newNote;
  const toggleNewNote = props.toggleNewNote;

  const showNote = props.showNote;
  const toggleShowNote = props.toggleShowNote;

  const cardColor = props.cardColor;
  const setCardColor = props.setCardColor;

  const toggleRefresh = () => setRerfresh(!refresh);

  useEffect(() => {
    console.log("base:", BASE_URL);
    axios.get(`${BASE_URL}/notes`)
      .then((res) => {
        console.log(res);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [refresh])



  const deleteNote = (id) => {
    console.log("delete note ", id);
    axios.delete(`${BASE_URL}/notes/${id}`)
      .then((resp) => {
        setNotes(notes.filter((note) => note["_id"] != id))
        console.log(resp);
      }).catch((err) => {
        console.log(err);
      })
  }

  const openNote = (id) => {
    console.log("Open note ", id);
    setCurrentNote(notes.find((note) => note["_id"] == id));
    toggleShowNote(!showNote);
  }




  return (
    <HomeContainer>
      {
        showNote ?
          <Details
            currentNote={newNote ? null : currentNote}
            toggleRefresh={toggleRefresh}
            newNote={newNote}
            toggleNewNote={toggleNewNote}
            cardColor={cardColor}
            setCardColor={setCardColor}
          />
          :
          <HomeGrid>
            {
              notes.map((note) => {
                return (
                  <>
                    <Card
                      title={note["title"]}
                      id={note["_id"]}
                      cardColor={note["color"]}
                      deleteNote={deleteNote}
                      openNote={openNote}
                    />
                  </>
                )
              })
            }
          </HomeGrid>
      }

    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
  margin-top: 10px;
  margin-left: 150px;
  margin-right: 150px;
  // border: 1px solid black;
  padding: 5px;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }

`
const HomeGrid = styled.div`
  display: inline-grid;
  row-gap: 20px;
  column-gap: 10em;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`





// let notes = [
//   {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }, {
//     "_id": "635e2973fb7c46360f77dfb8",
//     "title": "test note 1",
//     "noteBody": "test note 1 body",
//     "createdAt": "2022-10-30T07:36:06.388Z",
//   },
//   {
//     "_id": "635e4fb008b1156e84dfde7c",
//     "title": "test note 2",
//     "noteBody": "test note 2 body",
//     "createdAt": "2022-10-30T10:18:18.418Z",
//   }
// ]