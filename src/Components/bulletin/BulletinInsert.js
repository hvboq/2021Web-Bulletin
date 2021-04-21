import React, { useState } from 'react';

const BulletinInsert = (props) => {
    const { bulletinRef, setter, value } = props;
    const [inputWriter, setWriter] = useState('');
    const [inputTitle, setTitle] = useState('');
    const [inputContent, setContent] = useState('');
    
    const onChangeWriter = (e) => {
        setWriter(e.target.value);
    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const insertList = () => {
        if (inputWriter.trim().length <= 0) {
            return;
        }
        if (inputTitle.trim().length <= 0) {
            return;
        }
        if (inputContent.trim().length <= 0) {
            return;
        }

        setter([
            ...value,
            {
                idx: bulletinRef.current++,
                writer : inputWriter,
                title : inputTitle,
                content : inputContent,
            },
        ]);
    }
    return(
        <div>
            <h3>3. 새 글 작성</h3>
            글쓴이
            <input name="writer" onChange={onChangeWriter} value={inputWriter} placeholder="글쓴이"/>
            글제목
            <input name="title" onChange={onChangeTitle} value={inputTitle} placeholder="제목"/>
            내용
            <input name="content" onChange={onChangeContent} value={inputContent} placeholder="내용"/>
            <br/>
            <button type='submit' onClick={insertList}>
                확인
            </button>
            <button type='submit'>
                취소
            </button>
        </div>
    );
}

export default BulletinInsert;