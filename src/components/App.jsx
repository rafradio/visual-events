import { useState, useEffect, useRef } from 'react';
import { Frame, Container, Vector, Vector18, Mask } from './stComponents';

function App() {
    return (
        <Frame>
            <Container $nomask>
                <Vector $left></Vector>
                <Vector $right></Vector>
                <Vector18></Vector18>
            </Container>
            <Container $mask>
                <Mask></Mask>
            </Container>
        </Frame>
    )
}

export default App;