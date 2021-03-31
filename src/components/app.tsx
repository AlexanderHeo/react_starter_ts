import React from "react";
import styled from "styled-components";
import Mario from "../../public/assets/mario.jpg";

const App: React.FC = () => (
    <AppContainer>
        {/* REMOVE START HERE */}
        <div className="container">
            <h1>React Starter App</h1>
            <hr />
            <h3>now with TypeScript!</h3>
            <h3>start with App.tsx</h3>
            <hr />
            <p>TypeScript</p>
            <p>Babel</p>
            <p>----------</p>
            <p>ESLint</p>
            <p>Prettier</p>
            <p>----------</p>
            <p>webpack</p>
            <p>image loader - jpg, png</p>
            <p>----------</p>
            <p>Express - server setup, ready for db</p>
            <p>nodemon</p>
            <p>styled-components</p>
            <hr />
        </div>
        {/* REMOVE END HERE */}
    </AppContainer>
);

export default App;

const AppContainer = styled.div`
    /* REMOVE START HERE */
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    border: 20px solid dodgerblue;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Mario});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .container {
        padding: 2rem 4rem;
        background-color: white;
        border-radius: 10px;
        p {
            margin-block-start: 0.4rem;
            margin-block-end: 0.4rem;
        }
    }
    /* REMOVE END HERE */
`;
