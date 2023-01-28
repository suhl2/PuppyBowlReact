import React from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const TestComponent = () => {
    return <h1>Puppy Bowl</h1>;
}

root.render(<TestComponent />);