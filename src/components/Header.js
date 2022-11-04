import React, { useState } from 'react'
import styled from 'styled-components';

import { MdOutlineAddCircleOutline, MdLogout, MdSearch, MdOutlineArrowBack } from 'react-icons/md';
import { IoSearchCircleSharp } from 'react-icons/io5'
import { COLOR_CONSTANTS } from '../utils';


function Header(props) {

    const showNote = props.showNote;
    const toggleShowNote = props.toggleShowNote;
    const newNote = props.newNote;
    const cardColor = props.cardColor;
    const setCardColor = props.setCardColor;
    const toggleNewNote = props.toggleNewNote;
    const [showDropdown, toggleDropdown] = useState(false);



    const createNewNode = (color) => {
        toggleNewNote(true);
        toggleShowNote(true);
        setCardColor(color);
        toggleDropdown(false);


    }
    const goBack = () => {
        toggleShowNote(false);
        toggleNewNote(false);
        toggleDropdown(false);
    }


    return (
        <Container>
            <LeftContainer>
                {
                    showNote ?
                        <BackButton>
                            <MdOutlineArrowBack
                                size={"50px"}
                                onClick={goBack}
                                title={"Back"}
                            />
                        </BackButton>
                        :
                        <AddButtonContainer>
                            <AddButton>
                                <MdOutlineAddCircleOutline
                                    size={"50px"}
                                    title={"Add Note"}
                                    onClick={() => { toggleDropdown(!showDropdown) }}
                                />
                            </AddButton>
                            <ColorOptions>
                                {
                                     Object.keys(COLOR_CONSTANTS).map((color, idx) => {
                                            return (
                                                <ColorOption 
                                                style={{ 
                                                    backgroundColor: COLOR_CONSTANTS[color], 
                                                    display: showDropdown ? "block" : "none",
                                                    WebkitAnimationDuration: `${idx/2}s`,
                                                    animationDuration: `${idx*1.3}s`,
                                                   
                                                }}
                                                    onClick={() => createNewNode(color)}

                                                >
                                                </ColorOption>
                                            );
                                    })
                                }
                            </ColorOptions>
                        </AddButtonContainer>
                }
                <Logo>
                    <span>Notes</span>
                </Logo>
            </LeftContainer>
            <RightContainer>
                {/* <SearchContainer>
                    <SearchBar />
                    <SearchButton>
                        <IoSearchCircleSharp size={"2.5em"}/>
                        
                    </SearchButton>
                </SearchContainer> */}
                <LogoutButton>
                    <MdLogout
                        size={"50px"}
                        title={"Logout"}
                    />
                </LogoutButton>
            </RightContainer>
        </Container>
    )
}

export default Header;

const Container = styled.nav`
    height: 100px;
    // background: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;

`


const LeftContainer = styled.div`
    display: flex;
    align-items: center;

`
const AddButtonContainer = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

   
`
const AddButton = styled.div`
    -webkit-animation: rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

            @-webkit-keyframes rotate-in-center {
                0% {
                  -webkit-transform: rotate(-360deg);
                          transform: rotate(-360deg);
                  opacity: 0;
                }
                100% {
                  -webkit-transform: rotate(0);
                          transform: rotate(0);
                  opacity: 1;
                }
              }
              @keyframes rotate-in-center {
                0% {
                  -webkit-transform: rotate(-360deg);
                          transform: rotate(-360deg);
                  opacity: 0;
                }
                100% {
                  -webkit-transform: rotate(0);
                          transform: rotate(0);
                  opacity: 1;
                }
              }
              
`

const ColorOptions = styled.div`
    top: 80px;
    position: absolute;
    z-index: 1;


`
const ColorOption = styled.div`
    display: block;    
    border-radius: 50%;
    // -webkit-animation: fadeIn 1s;
    // animation: fadeIn 1s ;
    -webkit-animation: fadeIn ;
    animation: fadeIn ;

    width: 1.5em;
    height: 1.5em;
    margin-top : 10px;

    @-webkit-keyframes fadeIn {
        from { opacity: 0; }
          to { opacity: 1; }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
          to { opacity: 1; }
    }

`


const BackButton = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;

	-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    
            @-webkit-keyframes swing-in-top-fwd {
                0% {
                  -webkit-transform: rotateX(-100deg);
                          transform: rotateX(-100deg);
                  -webkit-transform-origin: top;
                          transform-origin: top;
                  opacity: 0;
                }
                100% {
                  -webkit-transform: rotateX(0deg);
                          transform: rotateX(0deg);
                  -webkit-transform-origin: top;
                          transform-origin: top;
                  opacity: 1;
                }
              }
              @keyframes swing-in-top-fwd {
                0% {
                  -webkit-transform: rotateX(-100deg);
                          transform: rotateX(-100deg);
                  -webkit-transform-origin: top;
                          transform-origin: top;
                  opacity: 0;
                }
                100% {
                  -webkit-transform: rotateX(0deg);
                          transform: rotateX(0deg);
                  -webkit-transform-origin: top;
                          transform-origin: top;
                  opacity: 1;
                }
              }
`
const Logo = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 10px;
    margin-left: 20px;


    span{
        font-size: 45px;
        font-weight: 550;
    }

`


const RightContainer = styled.div`
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`
const SearchBar = styled.input`
    height: 40px;
    // border: none;
    width: 250px;
    margin-right: 10px;

`
const SearchButton = styled.div`
    padding: 5px;
    // background-color: black;
    // color: white;
    margin-right: 60px;

`

const LogoutButton = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;
    cursor: pointer;
`