import { useState, useEffect, useRef } from 'react';
import { Frame, Container, Vector, Vector18, Mask } from './stComponents';
import MaskWrap from './MaskWrap';

function App() {
    return (
        <Frame>
            <Container $nomask>
                <Vector $left></Vector>
                <Vector $right></Vector>
                <Vector18></Vector18>
            </Container>
            <MaskWrap />
        </Frame>
    )
}

export default App;