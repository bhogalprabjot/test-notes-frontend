import React from 'react'
import styled from 'styled-components';
import { MdDeleteOutline } from 'react-icons/md';
import { COLOR_CONSTANTS } from "../utils";


function Card(props) {
  const cardColor = props.cardColor;
  const id = props.id;
  const title = props.title;
  return (
    <CardContainer style={{backgroundColor: COLOR_CONSTANTS[cardColor]}}>
      <CardBody onClick={() => props.openNote(id)}>
        <span>
          {title}
        </span>
      </CardBody>
      <CardOptions>
        <DeleteButton>
          <MdDeleteOutline
            onClick={() => props.deleteNote(id)}
            size={"1.5em"}
          />
        </DeleteButton>
      </CardOptions>
    </CardContainer>
  )
}

export default Card;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px;
  height: 12em;
  width: 15em;


  display: flex;
  flex-direction: column;
  justify-content: center;

`

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  span{
    font-size: 1.5em;  
  }
  cursor: pointer;
  
`

const CardOptions = styled.div`
  text-align: right;
`

const DeleteButton = styled.div`
  cursor: pointer;
`