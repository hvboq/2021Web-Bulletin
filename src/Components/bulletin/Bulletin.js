import React, {  useState, useRef } from "react";
import BulletinInsert from "./BulletinInsert";
import BulletinList from "./BulletinList";

const Bulletin = () => {
    const bulletinRef = useRef(1);
    const [bulletinList, setbulletinList] = useState([]);

    return(
        <div>
            <BulletinInsert value={bulletinList} bulletinRef={bulletinRef} setter = {setbulletinList} />
            <h3>4. 사용자별 게시글 확인</h3>
            조회할 글쓴이의 아이디를 입력
            <input/>
            <button>검색</button>
            <div>아이디 글쓴이 제목 내용</div>
            <BulletinList value={bulletinList} setter = {setbulletinList}/>
            <h3>6. 회원목록</h3>
            <div><button>회원 목록 전체 검색</button></div>
            <div>아이디 이름 전화번호 이메일</div>
            <h3>7. 게시글 목록</h3>
            <div><button>게시글 전체 검색</button></div>
            <div>아이디 글쓴이 제목 내용</div>
        </div>
    );
}

export default Bulletin;