// 	Using conditional logic directly in the rendering function, leading to cluttered and hard-to-maintain code.
// 	Mixing component creation logic with rendering logic makes the code harder to maintain and extend.
// 	Violates the Single Responsibility Principle, as the App component is responsible for both logic and rendering.
// 	Adding new component types requires modifying the conditional logic, violating the Open/Closed Principle.

import React from 'react';

function Button() {
    return <button>Button</button>;
}

function TextField() {
    return <input type="text" />;
}

function App() {
    const componentType = 'button'; // This could be dynamic

    let component;
    if (componentType === 'button') {
        component = <Button />;
    } else if (componentType === 'textfield') {
        component = <TextField />;
    } else {
        throw new Error('Unknown component type');
    }

    return (
        <div>
            {component}
        </div>
    );
}

export default App;