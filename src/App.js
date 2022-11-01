import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import styled from "styled-components";


//basic JSX - first explain this
// const App = () => {
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     );
// }


const App = () => {
    const [showNote, toggleShowNote] = useState(false);
    const [newNote, toggleNewNote] = useState(false);
    return (
        <PageContainer>
            <Header
                showNote={showNote}
                toggleShowNote={toggleShowNote}
                newNote={newNote}
                toggleNewNote={toggleNewNote}
            />
            <Home
                showNote={showNote}
                toggleShowNote={toggleShowNote}
                newNote={newNote}
                toggleNewNote={toggleNewNote}
            />
        </PageContainer>
    );
}
export default App;

const PageContainer = styled.div`
    height: 100vh;
    widht: 100%;
`