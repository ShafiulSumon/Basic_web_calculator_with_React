import '../CSS/NumberButton.css';

export default function NumberButton(props) {

    function clicked() {
        props.func(props.value);
    }

    return (
        <div>
            <button 
                className="NumberButton"
                onClick={clicked}
            >
                {props.value}
            </button>
        </div>
    );
}