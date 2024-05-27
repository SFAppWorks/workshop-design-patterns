import React from 'react';

class ComponentFactory {
    static createComponent(type, extraProps = {}) {
        switch(type) {
            case 'button':
                return <Button {...extraProps} />;
            case 'textfield':
                return <TextField {...extraProps} />;
            default:
                throw new Error('Unknown component type');
        }
    }
}

function Button() {
    return <button>Button</button>;
}

function TextField() {
    return <input type="text" />;
}

function App() {
    return (
        <div>
            {ComponentFactory.createComponent('button')}
            {ComponentFactory.createComponent('textfield')}
        </div>
    );
}

export default App;