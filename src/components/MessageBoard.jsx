import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, deleteMessage } from "../slices/messageBoardSlice";
import { setUserMessage } from "../slices/getinputslice";

function MessageBoard() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageBoard);
  const userInput = useSelector((state) => state.input);

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
            value={userInput}
            onChange={(e) => dispatch(setUserMessage(e.target.value))}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            if (userInput !== "") {
              dispatch(addMessage(userInput));
              dispatch(setUserMessage(""));
            }
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((item, index) => {
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
