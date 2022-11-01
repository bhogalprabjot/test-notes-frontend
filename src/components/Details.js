import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineSave, AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';
import {BASE_URL} from '../utils';



function Details(props) {
  const newNote = props.newNote;
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
    axios.post(`${BASE_URL}/notes`, note)
      .then(
        () => {
          toggleNewNote(false);
          props.toggleRefresh()
        }
      )
      .catch((err) => { console.log(err); })
  }


  return (
    <DetailsContainer>
      <HeaderContainer>
        {
          editOn ?
            <HeaderInput type={"text"} value={note?.title} onChange={(event) => handleChange(event, true)} />
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
            <BodyInput value={note?.noteBody} onChange={(event) => handleChange(event, false)} />
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
  border: 1px solid black;
  padding: 20px;
  width: 100%;
  // height: 100vh;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  
`
const HeaderContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  margin-bottom: 40px;
`
const HeaderInput = styled.input`
  flex: 1;
  font-size: 40px;
  width: 100%;
`
const HeaderText = styled.div`
  flex: 1;
  font-size: 40px;
  width: 100%;
`

const ActionButtons = styled.div`
  // border: 1px solid black;
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
  // border: 1px solid black;
  flex: 1;
`

const BodyInput = styled.textarea`
  height: 100%;
  width: 100%;
  font-size: 20px;
`
const BodyText = styled.div`
  height: 100%;
  width: 100%;
  font-size: 20px;
`