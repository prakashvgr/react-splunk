import React from 'react';
import styled from 'styled-components';
import Heading from '@splunk/react-ui/Heading';

const StyledToolbar = styled.div`
    background: black;
    color: white;
    height: 50px;
    width: 100%;
`;

const Toolbar = props => {
    return <StyledToolbar><Heading level={2} style={{ marginTop: 15, marginLeft:10 }}>{props.title}</Heading></StyledToolbar>
}

export default Toolbar;