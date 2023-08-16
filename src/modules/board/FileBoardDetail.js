import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PORT } from "../../set";

const FileBoardDetail = () => {
  const { postId } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(`${PORT}/board/detail/${postId}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setItem(data.data);
      });
  }, [postId]);

  return (
    <div>
      {item != null ? (
        <div>
          <h2>{item.btitle}</h2>
          <p>{item.bcontent}</p>
        </div>
      ) : (
        <p>게시글을 불러오는 중...</p>
      )}
    </div>
  );
};

export default FileBoardDetail;
