import { useState, useEffect, useRef } from 'react';
import { Frame, Container, Vector, Vector18 } from './stComponents';

function App() {
    return (
        <Frame>
            <Container>
                <Vector $left></Vector>
                <Vector $right></Vector>
                <Vector18></Vector18>
            </Container>
        </Frame>
    )
}

export default App;