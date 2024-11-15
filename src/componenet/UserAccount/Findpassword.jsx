import "../UserAccountCss/Findpassword.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Findpassword () {
    return(
        <div class="naame">
<div class="backfontmove"></div> {/* 움직이는 배경 */}

            {/* 헤더 부분 색깔 여기에 배너,검색,로그인,회원가입,알림,나만의 냉장고 아이콘 넣어야됨 */}
  <div class="bannerbackcloor">
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
  </div>
{/* 위쪽은 헤더 */}
{/* 위쪽은 헤더 */}


{/* 아래쪽 부분  */}
{/* 비밀 번호 찾는 창 태그 */}

<div class="mainframe"></div>
<div class="ConTop">
    <img class="" src="rectangle-310.svg" />
    <div class="OPPa"><button class="diiaq">확인</button></div>

    <div class="diiovb">
      <input class="inpuuyt"></input>

    </div>

    <div class="aaiiqe">해당 아이디의 비밀번호</div>
    <div class=""><input class="framee1"></input></div>
    <div class=""><input class="framee2"></input></div>
    <div class="rectangle32"></div>
    
    <div class=""><button class="aoids">재설정</button> </div>
    <div class="ojasd">비밀번호 재설정</div>
    <div class="asd1av">비밀번호 재입력</div>
  </div>
  <div class="framee3">
    <div class="asdffz">비밀번호 찾기</div>
  </div>







        </div>
    );
}