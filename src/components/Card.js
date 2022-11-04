import React from 'react'
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { COLOR_CONSTANTS } from "../utils";


function Card(props) {
  const cardColor = props.cardColor;
  const id = props.id;
  const title = props.title;
  return (
    <CardContainer style={{ backgroundColor: COLOR_CONSTANTS[cardColor] }}>
      <CardBody onClick={() => props.openNote(id)}>
        <span>
          {title}
        </span>
      </CardBody>
      <CardOptions>
        <DeleteButton>

          <MdDelete
            style={{ cursor: "pointer" }}
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
  // border: 1px solid black;
  border-radius: 15px;
  padding: 5px;
  height: 12em;
  width: 15em;


  display: flex;
  flex-direction: column;
  justify-content: center;

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

    
    transition: all .2s ease-in-out;
    &:hover{
      transform: scale(1.1);
    }


 
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
  

`
