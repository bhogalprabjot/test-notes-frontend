import React from 'react'
import styled from 'styled-components';

import { MdOutlineAddCircleOutline, MdLogout, MdSearch, MdOutlineArrowBack } from 'react-icons/md';
import { IoSearchCircleSharp } from 'react-icons/io5'

function Header(props) {

    const showNote = props.showNote;
    const toggleShowNote = props.toggleShowNote;
    const newNote = props.newNote;
    const toggleNewNote = props.toggleNewNote;

    const createNewNode = () => {
        toggleNewNote(true);
        toggleShowNote(true);
    }
    const goBack = () => {
        toggleShowNote(false);
        toggleNewNote(false);
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
                        <AddButton>
                            <MdOutlineAddCircleOutline
                                size={"50px"}
                                title={"Add Note"}
                                onClick={createNewNode}

                            />
                        </AddButton>
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
const AddButton = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
`

const BackButton = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
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