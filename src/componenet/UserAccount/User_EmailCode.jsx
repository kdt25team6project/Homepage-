import "../UserAccountCss/User_EmailCode.css";
import React from "react";
import { Link } from "react-router-dom";

export default function User_EmailCode () {
    return(
        <div className="User_Email">
            
            {/* 헤더 부분 색깔 여기에 배너,검색,로그인,회원가입,알림,나만의 냉장고 아이콘 넣어야됨 */}
  <div class="bannerbackcloor"></div>

{/* 배너쪽 부분*/}
<div class="backcolor3">
 <div class="backcolor3"></div>
  <Link to="/"><button className="best-price">BEST PRICE</button></Link>
</div>

{/* 검색쪽 부분*/}
<div class="serchcss">
  <div class="rectangle-1"></div>
  <div class="ellipse-1"></div>
  <div class="ellipse-2"></div>
  <div class="rectangle-1"></div>
</div>

{/* 마이페이지 부분*/}
  <div class="myiconback">
  <Link to="/Mp"><button class="myicon">MY</button></Link>
  </div>

{/* 로그인/회원가입 부분 */}
  <div class="butonback">
    <Link to="/create"><button className="buton"> 회원가입 </button></Link>
  </div>

{/*아래 부분 */}
{/* 이메일 입력 탭창 */}
<div class="basic">
  <div class="dona">비밀번호 찾기</div>
</div>

<div class="mainframe">
  </div>
  
  <div class="framee">
    <img class="rectangleii" />
    <div class="">
      <alert ></alert>
      <Link to="/INputEmail" > <button class="diii"> 코드 전송 </button> </Link> 
    </div>
    <div class="nick3">
    <input type="text" class="inputback"></input>
      <div class="filename">아이디</div>
    </div>
    <div class="divo">
    <input type="email" class="inputback"></input>
      <div class="filename">이메일</div>
    </div>
    <div class="divq">해당 이메일로 코드가 보내집니다.
      코드를 확인 하세요</div>
  </div>
  <div class="frameop">
    <div class="divop">비밀번호 찾기</div>
    </div>








        </div>

    );

}
