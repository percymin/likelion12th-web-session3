import "./App.css";
import React, { useState, useEffect } from "react";
import MainText from "./MainText";
import Title from "./Title";
import Login from "./Login";
import { UserInfo } from "./UserInfo";

function App() {
  let [like, setLike] = useState(0);

  const [isLogin, setIsLogin] = useState(false); // 기본값은 false

  useEffect(() => {
    if (isLogin) {
      localStorage.setItem("id", UserInfo.id);
      localStorage.setItem("pw", UserInfo.password);
    }
  }, [isLogin]); //로그인될때만 로컬스토러지에 저장

  const handleLogin = (id, pw) => {
    if (id === UserInfo.id && pw === UserInfo.password) {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };
  useEffect(() => {
    const storedIsLogin = localStorage.getItem("isLogin");
    if (storedIsLogin) {
      setIsLogin(true);
    }
  }, []);

  return (
    <body>
      <div className="App">
        {isLogin ? (
          <>
            <Title />
            <MainText />
            <h4>페이지가 마음에 드셨다면 아래 좋아요 버튼을 눌러주세요</h4>
            <span
              onClick={() => {
                setLike(like + 1);
              }}
            >
              👍
            </span>{" "}
            {like}
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </body>
  );
}

export default App;
