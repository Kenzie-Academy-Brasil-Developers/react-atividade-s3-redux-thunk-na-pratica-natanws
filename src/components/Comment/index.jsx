import React from "react";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useDispatch } from "react-redux";

export default function Comment() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(addCommentThunk("Testando um comentário"))}
      >
        Clique Aqui
      </button>
    </div>
  );
}
