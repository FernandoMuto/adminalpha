import React,{FunctionComponent} from "react";
import styled from "styled-components";

interface AppProps {
    
}
 
const App: FunctionComponent<AppProps> = () => {
    return ( 
         <AppContainer>
             <h1>ADMIN ALPHA</h1>
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