import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { AiOutlineSave, AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';
import { BASE_URL, COLOR_CONSTANTS } from '../utils';


function Details(props) {
  const newNote = props.newNote;
  const newNoteColor = props.cardColor;

  const toggleNewNote = props.toggleNewNote;

  const [note, setNote] = useState(props.currentNote == null ? null : props.currentNote);
  const [editOn, setEdit] = useState(props.currentNote == null ? true : false);

  const toggleEdit = () => setEdit(!editOn);

  const handleChange = (event, isTitle) => {
    // console.log(event.target.value);
    if (isTitle)
      setNote({ ...note, title: event.target.value });
    else
      setNote({ ...note, noteBody: event.target.value });

    // console.log(note);
  }

  const saveChanges = () => {
    setEdit(false);
    axios.patch(`${BASE_URL}/notes/${note._id}`, note)
      .then(() => { props.toggleRefresh() })
      .catch((err) => { console.log(err); })
  }

  const createNewNote = () => {
    setEdit(false);


    console.log("new", note);
    axios.post(`${BASE_URL}/notes`, note)
      .then(
        () => {
          toggleNewNote(false);
          props.toggleRefresh()
        }
      )
      .catch((err) => { console.log(err); })
  }
  useEffect(() => {
    console.log(note);
    newNote && setNote({ ...note, color: newNoteColor });

  }, [])




  return (
    <DetailsContainer style={{ backgroundColor: newNote ? COLOR_CONSTANTS[newNoteColor] : COLOR_CONSTANTS[note["color"]] }}>
      <HeaderContainer>
        {
          editOn ?
            <HeaderInput type={"text"} value={note?.title} onChange={(event) => handleChange(event, true)}
              style={{ backgroundColor: newNote ? COLOR_CONSTANTS[newNoteColor] : COLOR_CONSTANTS[note["color"]] }}
            />
            :
            <HeaderText>
              <span>{note?.title}</span>
            </HeaderText>
        }
        <ActionButtons>
          <SaveButton>
            <AiOutlineSave size={"3.5em"} title={"Save"} onClick={newNote ? createNewNote : saveChanges} />
          </SaveButton>
          <EditButton >
            <AiOutlineEdit size={"3.5em"} title={"Edit"} onClick={toggleEdit} />
          </EditButton>
          {/* <CloseButton>
            <AiOutlineCloseCircle size={"3.5em"} title={"Cancel"} />
          </CloseButton> */}
        </ActionButtons>
      </HeaderContainer>
      <BodyContainer>
        {
          editOn ?
            <BodyInput value={note?.noteBody} onChange={(event) => handleChange(event, false)}
              style={{ backgroundColor: newNote ? COLOR_CONSTANTS[newNoteColor] : COLOR_CONSTANTS[note["color"]] }}
            />
            :
            <BodyText>
              <span>{note?.noteBody}</span>
            </BodyText>

        }
      </BodyContainer>
    </DetailsContainer>
  )
}

export default Details;

const DetailsContainer = styled.div`
  border-radius: 30px;
  padding: 20px;
  width: 100%;
  // height: 100vh;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;

  -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    @-webkit-keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }      
  
`
const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-left: 10px;
`
const HeaderInput = styled.input`
  flex: 1;
  font-size: 40px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;

  
`
const HeaderText = styled.div`
  flex: 1;
  font-size: 40px;
  width: 100%;
`

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;

`
const SaveButton = styled.div`
  margin-right: 20px;
  cursor: pointer;
`
const EditButton = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;

`
const CloseButton = styled.div`
  margin-left: 20px;
  cursor: pointer;

`

const BodyContainer = styled.div`
  flex: 1;
`

const BodyInput = styled.textarea`
  height: 100%;
  width: 100%;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
`
const BodyText = styled.div`
  height: 100%;
  width: 100%;
  font-size: 20px;
`