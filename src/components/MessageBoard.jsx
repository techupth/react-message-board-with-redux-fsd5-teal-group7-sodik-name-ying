import { addMessage, deleteMessage } from "../slices/messageBoardSlice";
import { getInputMessage } from "../slices/getInputTextSlice";
import { useDispatch, useSelector } from "react-redux";

function MessageBoard() {
  const dispatch = useDispatch();

  const inputText = useSelector((state) => {
    return state.input;
  });

 

  const result = useSelector((state) => {
    return state.message;
  });

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => dispatch(getInputMessage(e.target.value))}
            value={inputText}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
          
            dispatch(addMessage(inputText));
            dispatch(getInputMessage(""));
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {result.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => dispatch(deleteMessage(index))}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
