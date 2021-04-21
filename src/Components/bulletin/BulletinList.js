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
        아이디 글쓴이 제목 내용
      {props.value.map(item => {
      const { idx, writer,title,content } = item;
      
      return (
        <div className='Item' key={item.idx}>
        {item.idx}
        &nbsp;
        {item.writer}
        &nbsp;
        {item.title}
        &nbsp;
        {item.content}
        &nbsp;
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
