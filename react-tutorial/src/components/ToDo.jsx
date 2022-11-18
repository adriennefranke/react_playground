import { useState } from "react";

export const ToDo = () => {
    const [name, setName] = useState('Enter to do here...');
    return (
        <input value={name} onChange={event => setName(event.target.value)} />
    );
};
