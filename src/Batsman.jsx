import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleDouble = () => {
        const updatedRuns = runs + 2;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }

    const counterStyle = {
        border: '2px solid blue',
        marginBottom: '20px',
        borderRadius: '20px',
        padding: '10px'
    }
    return (
        <div style={counterStyle}>
            <h3>Player : Bangladeshi</h3>
            <p>Six : {sixes}</p>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}