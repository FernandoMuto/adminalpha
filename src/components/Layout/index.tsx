import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface MainLayoutProps {
    
}
 
const MainLayout: FunctionComponent<MainLayoutProps> = () => {
    return ( 
        <MainLayoutContainer>
            
        </MainLayoutContainer>
     );
}
 
export default MainLayout;

const MainLayoutContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;