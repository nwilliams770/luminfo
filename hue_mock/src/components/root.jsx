import React, {useState, useEffect} from 'react';

const Root = () => {
    const [bgColor, setColor] = useState("white")
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/mock_light_colors')
                .then(response => response.json())
                .then(data => setColor(data.color1))
        }, 500);
    }, [bgColor])
    return (
        <div id="root" style={{background: `${bgColor}`}}>
            <h1>Hello world!</h1>
        </div>
    )
}

export default Root;