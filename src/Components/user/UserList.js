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
        아이디 이름 전화번호 이메일
      {props.value.map(item => {
      const { idx, id,name,tel,mail } = item;
      
      return (
        <div className='Item' key={idx}>
        {item.id}
        &nbsp;
        {item.name}
        &nbsp;
        {item.tel}
        &nbsp;
        {item.mail}
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

export default UserList;
