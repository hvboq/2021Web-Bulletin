import React from "react";

const UserList = (props) => {
  const { setter, value } = props;
  const removeItem = (idx) => {
    setter(
      value.filter(item => item.idx !== idx)
    );
  }
  return (
    <div className="List">
        <h3>2. 회원조회 및 수정</h3>
      {props.value.map(item => {
      const { idx, id,name,tel,mail } = item;
      
      return (
        <div className='Item' key={idx}>
        <span>{item.id}</span>
        <p>{item.name}</p>
        <p>{item.tel}</p>
        <p>{item.mail}</p>
        <button>수정</button>
        <button type="submit" value={item.idx} onClick={() => removeItem(idx)}>
            삭제
        </button>
      </div>
      )})}
    </div>
  );
};

export default UserList;
