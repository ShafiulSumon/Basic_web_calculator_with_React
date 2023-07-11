import "../CSS/SignButton.css";

export default function SignButton(props) {

    function handleClick() {
        const op = props.value;
        console.log(op);
        props.func(op);
    }

    return (
        <div>
            <button 
                className="SignButton"
                onClick={handleClick}
            >
                {props.value}
            </button>
        </div>
    );
}