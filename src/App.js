import logo from './logo.svg';
import './App.css';
function App() {
  // 중괄호 문법 => 변수로 선언 후 {} 사용
  let post = '강남 우동 맛집';
  //자바스크립트의 경우 :  document.querySelector('h4').innerHTML = post;
  // JSX 문법1. class 넣을 땐 className
  // JSX 문법2. 데이터바인딩은 {중괄호}
  // JSX 문법3. style넣을 땐 style={ {css style 넣기} }
  // css 스타일은 object 형태로 넣어야 함. 
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={ {color:'red'} }>블로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
