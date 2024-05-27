import React from 'react';

function Button() {
    return <button>Button</button>;
}

function TextField() {
    return <input type="text" />;
}

function App() {
    return (
        <div>
            <Button />
            <TextField />
        </div>
    );
}

export default App;