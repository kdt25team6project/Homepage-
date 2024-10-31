import "../UserAccountCss/Login_user.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Login_user() {
    return (
      <div class="Login">

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

{/*-----------------위쪽은 헤더부분----------------------*/}
{/*-----------------위쪽은 헤더부분 ---------------------*/}

{/* 회원가입탭  */}
      <div class="tabbb">
      <Link to="/create"><button class="signin"> 회원가입 </button></Link>
      </div>
      <div class="tabbb2">
        <Link to="/Login"><button class="signin"> 로그인</button></Link>
      </div>
        





{/* 회원가입 로그인  부분  */}
      <div class="framefull1">
  <div class="loginfull1">
    <div class="bgg"></div>
    <div class="line-29"></div>
    <div class="tabtop"></div>
  </div>
  <div class="from">
    <div class="orderid1">
      <div class="email-address">아이디</div>
      <input tpye="ID" class="inputfield1"></input>
    </div>
    <div class="orderid1">
      <div class="heading">
        <div class="password">비밀번호</div>
        <Link to='/emailuser'>
        <button class="forget-password">비밀번호 재설정</button>
        </Link>
      </div>
      <input class="inputfield1"></input>
    </div>
  </div>
  <div class="">
    <button class="button1">로그인</button>
  </div>
  <div class="divv">로그인</div>
</div>


      
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
    );
}