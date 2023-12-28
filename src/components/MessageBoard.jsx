import { useDispatch, useSelector } from "react-redux";
import { addText, deleteText } from "../slices/messageBoardSlice";
import { userMessage } from "../slices/getInputSlice";

function MessageBoard() {
  const dispatch = useDispatch();

  const result = useSelector((state) => {
    return state.messageList;
  });

  const inputUserMessage = useSelector((state) => {
    return state.userMessageInput;
  });

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => {
              dispatch(userMessage(e.target.value));
            }}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => dispatch(addText(inputUserMessage))}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {result.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  dispatch(deleteText(index));
                }}
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
