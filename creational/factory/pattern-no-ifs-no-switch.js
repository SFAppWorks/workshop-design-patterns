import React from 'react';

class ComponentFactory {
    static componentMap = {
        button: Button,
        textfield: TextField
    };

    static createComponent(type, extraProps = {}) {
        try {
            const Component = this.componentMap[type];
            return <Component {...extraProps} />;
        } catch (ignore) {
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