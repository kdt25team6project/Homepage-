import "../UserAccountCss/Create_user.css";
import React from "react";
import { Link } from "react-router-dom";
import "../UserAccount/Create_user.js";
import { Create_check } from '../UserAccount/Create_user.js';


export default function Create_user() {
    return (
      <div class="create-user">
<div class="backfontmove"></div> {/* 움직이는 배경 */}


  {/* 헤더 부분 색깔 여기에 배너,검색,로그인,회원가입,알림,나만의 냉장고 아이콘 넣어야됨 */}

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
{/*-----------------위쪽은 헤더부분----------------------*/}
{/*-----------------위쪽은 헤더부분 ---------------------*/}


{/* 로그인 회원가입 창탭 */}
  <div class="tabbb">
  <Link to="/create"><button class="signin"> 회원가입 </button></Link>
  </div>


  <div class="tabbb2">
    <Link to="/Login"><button class="signin"> 로그인</button></Link>
  </div>

  
{/*-----------------로그인/ 회원가입 부분 ---------------------*/}
{/*-----------------로그인/ 회원가입 부분 ---------------------*/}

{/*-----------------회원가입 정보 백엔드쪽 연결---------------------*/}
<form name="createuser" action="/createUser" method="POST" autocomplete="on">
  <div class="createframefull">

    <div class="nick">
      <input type="text" id="nick" name="nickname" class="inputback" required />
      <div class="filename">닉네임</div>
    </div>

    <div class="nick3">
      <input type="text" id="id" name="username" class="inputback" required />
      <div class="filename">아이디</div>
    </div>
    
    <div class="nick4">
      <input type="password" id="pw" name="password" class="inputback" required />
      <div class="filename">비밀번호</div>
    </div>

    <div class="nick5">
      <input type="text" id="name" name="name" class="inputback" required />
      <div class="filename">이름</div>
    </div>

    <div class="nick6">
      <input type="tel" id="phone" name="phone" class="inputback" required />
      <div class="filename">전화번호</div>
    </div>

    <div class="nick7">
      <input type="email" id="email" name="email" class="inputback" required />
      <div class="filename">이메일</div>
    </div>

    <div class="buttonfull"></div>
    <button type="submit" class="buttonfulll">회원가입하기</button>
  </div>
</form>


  
































</div>

  
    );
  }