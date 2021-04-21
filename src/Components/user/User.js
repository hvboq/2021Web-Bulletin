import React, {  useState, useRef } from "react";
import UserRegister from "./UserRegister";
import UserList from "./UserList";

const User = () => {
    const userRef = useRef(0);
    const [userList, setUserList] = useState([]);

    return(
        <div>
            <UserRegister value={userList} userRef={userRef} setter = {setUserList} />
            <UserList value={userList} setter = {setUserList}/>
        </div>
    );
}

export default User;