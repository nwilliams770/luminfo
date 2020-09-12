import React, {useState, useEffect} from 'react';

const App = () => {
    const [bgColor, setColor] = useState("white")
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/mock_light_colors')
                .then(response => response.json())
                .then(data => setColor(data.color1))
        }, 500);
    }, [bgColor])
    return (
        <div id="app" style={{background: `${bgColor}`}}>
            <h1>Hello from react i've changed</h1>
        </div>
    )
}

export default App;