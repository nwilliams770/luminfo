import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Bulb from './bulb';

const Simulator = () => {
    const [colors, updateColors] = useState({});

    useEffect(() => {
        fetchColors();
    }, [])

    async function fetchColors() {
        try {
            const response = await axios.get('http://localhost:8000/mock_light_colors');
            const data = response.data;
            console.log("data", data);
            updateColors(data);

            setTimeout(() => fetchColors(), 1000);
        }
        catch (err) {
            console.log(err);
        }
    }

    const bulbs = Object.keys(colors).map(k => <Bulb key={k} color={colors[k]} />)
    return (
        <div>
            <ul>
                {bulbs}
            </ul>
        </div>
    )
}

export default Simulator;