import '../App.css';
import Box from './Box';


function Board (props) {

  //const [cellArray, setCellArray] = useState([null]);
  //const [playerFlag, setPlayerFlag] = useState(true);

  const createRows = (cellNumber) => {  
    return(
      <div>
        <Box value={props.cell[cellNumber]} onClick={() => props.onClick(cellNumber)} />
      </div>
    );
  }
  
  return(  
    <div>
        {/* <div className='status'>{status}</div> */}
      <div className="board-rows">
        {createRows(0)}
        {createRows(1)}
        {createRows(2)}
      </div>
      <div className="board-rows">
        {createRows(3)}
        {createRows(4)}
        {createRows(5)}
      </div>
      <div className="board-rows">
        {createRows(6)}
        {createRows(7)}
        {createRows(8)}
      </div>
    </div>
  );
  }
  
  export default Board;