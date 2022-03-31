import { useState } from "react";

function Form() {

    const [text1, setText1] = useState('');
    const [volume, setVolume] = useState(0);
    const [color, setColor] = useState('#ff0000');
    const [ta, setTa] = useState('---------');
    const [select, setSelect] = useState('nezinau');
    const [selectT, setSelectT] = useState('');

    const [dont, setDont] = useState(true);

    const [checkbox, setCheckbox] = useState('');
    const [radio, setRadio] = useState('');

    const changeText1 = e => {
        if (e.target.value.length > 10) {
            return;
        }
        if (dont) {
            setText1(e.target.value);
        }
        
    }

    const changeDont = () => {
        setDont(d => !d);
    }


    const changeVolume = e => {
        setVolume(e.target.value);
    }

    const changeColor = e => {
        setColor(e.target.value);
    }

    const changeTa = e => {
        setTa(e.target.value);
    }

    const changeSelect = e => {
        setSelect(e.target.value);
        setSelectT(e.target.querySelector('[value=' + e.target.value + ']').innerText);
    }

    const changeCheckbox = e => {
        setCheckbox(e.target.checked ? e.target.value : '');
    }

    const changeRadio = e => {
        setRadio(e.target.value);
    }

    const changeRadio1 = e => {
        e.target.setAttribute('checked', true);
        console.log(e.target.value);
    }



    return (
        <>
            <input type="text" placeholder="bla" onChange={changeText1} value={text1}/>
            
            <button onClick={changeDont}>DONT!</button>
            
            <div>
            <input type="range" id="volume" name="volume" onChange={changeVolume}
                    min="0" max="11" value={volume}/>
            <label htmlFor="volume">Volume {volume}</label>
            </div>
            <input type="color" onChange={changeColor} value={color} />
            <div style={{
                width: '100px',
                height: '100px',
                background: color,
                margin: '100px'
            }}></div>
            <textarea value={ta} onChange={changeTa}></textarea>
        
            <select value={select} onChange={changeSelect}>
                <option value="jo">Jo</option>
                <option value="ne">Ne</option>
                <option value="nezinau">Nežinau</option>
            </select>
            <h2>{selectT}</h2>

            <input type="checkbox" onChange={changeCheckbox} value="Pirmyn" />

            <h3>-{checkbox}-</h3>

            {/* <div onChange={changeRadio}> */}
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Jo" />Jo
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Ne" defaultChecked/>Ne
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Nesakysiu" />Nesakysiu
            {/* </div> */}

            <h3>-{radio}-</h3>
        </>
        
    )
}

export default Form;