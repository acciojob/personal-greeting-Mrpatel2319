import React, { useState } from 'react';

const PersonalizedGreeting = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <div>
                <label>Enter your name:</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            {name && <h1>Hello, {name}!</h1>}
        </div>
    );
};

export default PersonalizedGreeting;
