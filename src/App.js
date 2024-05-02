import './App.css';
import React, { useState } from 'react';
import MainText from './MainText';
import Title from './Title';
import Login from './Login';
import { UserInfo } from './UserInfo';

function App() {
  let [ like, setLike ] = useState(0);

  
  localStorage.setItem('id', UserInfo.id);
  localStorage.setItem('pw', UserInfo.password);

  const [isLogin, setIsLogin] = useState(false); // 기본값은 false

  const handleLogin = () => {
    setIsLogin(true); // True로 바꾸기
    localStorage.setItem("isLogin", true); 
  };

  React.useEffect(() => {
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
        <span onClick={()=>{ setLike(like + 1) }} >👍</span> { like }
          </>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
        
      </div>
    </body>
  );
}

export default App;
