import React,{FunctionComponent} from "react";
import styled from "styled-components";
import MainLayout from "../Layout";

interface AppProps {
    
}
 
const App: FunctionComponent<AppProps> = () => {
    return ( 
         <AppContainer>
             <MainLayout/>
         </AppContainer>
     );
}
 
export default App;

const AppContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;