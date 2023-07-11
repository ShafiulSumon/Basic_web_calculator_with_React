import { useState } from 'react';

function BTN(props) {

    function handleClick() {
        props.fun(props.value);
    }

    return (
        <div>
            <button onClick={handleClick}>{props.value}</button>
        </div>
    )
}

function Display({value}) {
    return (
        <div>
            {value}
        </div>
    )
}

function Test() {

    const [result, setResult] = useState(0);

    function calculation(value) {
        setResult(value);
    }

    return(
        <div>
            <Display value={result}/>
            <BTN value={10} fun={calculation} />
        </div>
    )
}

export default Test;