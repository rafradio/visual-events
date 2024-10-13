import { useState, useEffect, useRef } from 'react';
import { Frame, Container, Vector, Vector18, Mask } from './stComponents';
import { ContentContainer } from './stContent';
import MaskWrap from './MaskWrap';
import ContentInfo from './ContentInfo';

function App() {
    return (
        <Frame>
            <Container $nomask>
                <Vector $left></Vector>
                <Vector $right></Vector>
                <Vector18></Vector18>
                <ContentInfo />
            </Container>
            <MaskWrap />
        </Frame>
    )
}

export default App;