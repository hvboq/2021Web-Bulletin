import React from "react";

const BulletinList = (props) => {
  const { setter, value } = props;
  const removeItem = (idx) => {
    setter(
      value.filter(item => item.idx !== idx)
    );
  }
  return (
    <div className="List">
        <h3>5. 게시글 조회 및 수정</h3>
      {props.value.map(item => {
      const { idx, writer,title,content } = item;
      
      return (
        <div className='Item' key={item.idx}>
        <span>{item.idx}</span>
        <p>{item.writer}</p>
        <p>{item.title}</p>
        <p>{item.content}</p>
        <button>수정</button>
        <button type="submit" value={item.idx} onClick={() => removeItem(idx)}>
            삭제
        </button>
      </div>
      )})}
    </div>
  );
};

export default BulletinList;
