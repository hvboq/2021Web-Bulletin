import React, { useState } from 'react';

const UserRegister = (props) => {
    const { userRef, setter, value } = props;
    const [inputId, setId] = useState('');
    const [inputPw, setPw] = useState('');
    const [inputName, setName] = useState('');
    const [inputTel, setTel] = useState('');
    const [inputMail, setMail] = useState('');
    
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePw = (e) => {
        setPw(e.target.value);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeTel = (e) => {
        setTel(e.target.value);
    }
    const onChangeMail = (e) => {
        setMail(e.target.value);
    }
    const insertUserList = () => {
        if (inputId.trim().length <= 0) {
            return;
        }
        if (inputPw.trim().length <= 0) {
            return;
        }
        if (inputTel.trim().length <= 0) {
            return;
        }
        if (inputMail.trim().length <= 0) {
            return;
        }

        setter([
            ...value,
            {
                idx: userRef.current++,
                id : inputId,
                pw : inputPw,
                name : inputName,
                tel : inputTel,
                mail : inputMail
            },
        ]);
    }
    return(
        <div className='Insert'>
            <h3>1. 회원가입</h3>
            아이디
            <input name="id" onChange={onChangeId} value={inputId} placeholder="아이디"/>
            패스워드
            <input name="pw" onChange={onChangePw} value={inputPw} placeholder="패스워드"/>
            이름
            <input name="name" onChange={onChangeName} value={inputName} placeholder="이름"/>
            전화번호
            <input name="tel" onChange={onChangeTel} value={inputTel} placeholder="전화번호"/>
            이메일
            <input name="mail" onChange={onChangeMail} value={inputMail} placeholder="이메일"/>
            <br/>
            <button type='submit' onClick={insertUserList}>
                확인
            </button>
            <button type='submit'>
                취소
            </button>
        </div>
    );
}

export default UserRegister;