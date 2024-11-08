import "../UserMypageCss/Mypage.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Mypage() {
    return(
        <div>
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

  {/* 위쪽은 헤더부분 */}
  {/* 위쪽은 헤더부분 */}


    {/* 마이페이지 틀 */}
  <div class="frame-504">
  <div class="rectangle-3111142"></div>
  <div class="rectangle-3111156"></div>
  <div class="myacount">
    <div><Link to='/Mp'><button class="fontclass">내 정보</button></Link></div>
  </div>
  <div class="my">
    <div><button class="fontclass">장바구니</button></div>
  </div>
  <div class="buy">
    <div><button class="fontclass">결제</button></div>
  </div>
  <div class="my-fridge">
    <div><button class="fontclass">나의 냉장고</button></div>
  </div>
  <div class="interest">
    <div><button class="fontclass">관심</button></div>
  </div>
  <div class="myrecipecss">
    <div><button class="fontclass">레시피</button></div>
  </div>
  <div class="myinquiry">
    <div><Link to="/Qa"><button class="fontclass">나의 문의</button></Link></div>
    </div>



{/* 내정보 css */}
  <div class="macto1">
    <div class="mactoclor1">내 정보</div>
  </div>
  <div class="macto2">
    <div><button class="mactoclor2">수정하기</button></div>
  </div>
  <div class="macto3">
    <div><button class="mactoclor3">회원탈퇴</button></div>
  </div>
  <img class="macto4" src="frame-5020.svg" />
  <div class="macto5">
    <button class="mactoclor4">알림 설정</button>
  </div>
  <div class="macto6">
    <img class="image" src="image0.png" />
    <div class="profiledd"></div>
    <div class="mactoclor5">프로필 사진</div>
    <div class="macto7">
      <button class="macto8"> 변경 </button>
    </div>
  </div>
  <div class="macto9">
    <div><input class="inputilebox1"></input></div>
    <div><input class="inputilebox2"></input></div>
    <div><input class="inputilebox3"></input></div>
    <div><input class="inputilebox4"></input></div>
    <div><input class="inputilebox5"></input></div>
    <div><input class="inputilebox6"></input></div>
  </div>

  <div class="macto12">
    <div class="namedd"></div>
    <div class="namedd2"></div>
    <div class="namedd3"></div>
    <div class="namedd4"></div>
    <div class="namedd5"></div>
    <div class="namedd6"></div>
    <div class="mactoclor6">비밀번호</div>
    <div class="mactoclor7">이메일</div>
    <div class="mactoclor8">전화번호</div>
    <div class="mactoclor9">이름</div>
    <div class="mactoclor10">아이디</div>
    <div class="mactoclor11">닉네임</div>
  </div>
</div>

















        </div>
    ); 
}