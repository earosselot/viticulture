import './App.css';
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {useState} from "react";
import {cards} from "./cards";

function App() {
    // const cards = cards
    const dotBlue = <span className="dotBlue"></span>
    const dotYellow = <span className="dotYellow"></span>

    const [selectedText, setSelectedText] = useState('');
    const [selectedColor, setSelectedColor] = useState('#FFFFFF');

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        setSelectedText(item.spanishText)
        const color = item.color === 'blue' ? '#5a75d4' : '#9f9533'
        setSelectedColor(color)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        const dot = item.color === 'blue' ? dotBlue : dotYellow
        return (
            <span style={{display: 'block', textAlign: 'left'}}>
                {item.name} ({item.spanishTitle}) {dot}
            </span>
        )
    }

    return (
        <div className="App">
            <div style={{width: 400}}>
                <ReactSearchAutocomplete
                    items={cards}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                />
            </div>
            <div style={{backgroundColor: selectedColor, fontSize: "x-large"}}>
                <div style={{alignContent: "center"}}>{selectedText}</div>
            </div>
        </div>
    )
}

export default App;
