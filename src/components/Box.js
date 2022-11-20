import '../App.css';

function Box (props){

    //const [boxValue,setBoxValue] = useState(value);

    return(
        <button className='Box' onClick={() => props.onClick() }>
        {props.value}
        </button>
    );
  }

  export default Box;