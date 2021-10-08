import React from "react";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Comment() {
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState("");
  const user = useSelector((state) => state.user);

  const addComment = (element) => {
    element.preventDefault();
    dispatch(addCommentThunk(commentInput));
  };

  return (
    <div className="containerComment">
      <div>
        <h1>{user.name}</h1>
        {user.comments.map((comment) => (
          <p>{comment}</p>
        ))}
      </div>
      <form>
        <input
          type="text"
          placeholder="Faça seu comentário!"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={(element) => addComment(element)}>Enviar</button>
      </form>
    </div>
  );
}
