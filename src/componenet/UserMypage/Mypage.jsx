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

  <div class="frame-504">
  <div class="rectangle-3111142"></div>
  <div class="rectangle-3111156"></div>
  <div class="myvo">
    <div class="myvo"><button class="div">내 정보</button></div>
  </div>
  <div class="my">
    <div class="div2">장바구니</div>
  </div>
  <div class="buy">
    <div class="div3">결제</div>
  </div>
  <div class="my-fridge">
    <div class="div4">나의 냉장고</div>
  </div>
  <div class="interest">
    <div class="div5">관심</div>
  </div>
  <div class="recipe">
    <div class="div6">레시피</div>
  </div>
  <div class="recipe2">
    <div class="div7">
      나의 문의
      <br />
    </div>
  </div>
  <div class="frame-482">
    <div class="div8">내 정보</div>
  </div>
  <div class="frame-483">
    <div class="div9">수정하기</div>
  </div>
  <div class="frame-485">
    <div class="div10">회원 탈퇴</div>
  </div>
  <img class="frame-502" src="frame-5020.svg" />
  <div class="frame-503">
    <div class="div11">알림 설정</div>
  </div>
  <div class="frame-505">
    <img class="image" src="image0.png" />
    <div class="profiledd"></div>
    <div class="div12">프로필 사진</div>
    <div class="frame-484">
      <div class="div13">변경</div>
      <div class="frame-507"></div>
    </div>
  </div>
  <div class="frame-506">
    <div><input class="input-field"></input></div>
    <div><input class="input-field2"></input></div>
    <div><input class="input-field3"></input></div>
    <div><input class="input-field4"></input></div>
    <div><input class="input-field5"></input></div>
    <div><input class="input-field6"></input></div>
  </div>

  <div class="frame-509">
    <div class="namedd"></div>
    <div class="namedd2"></div>
    <div class="namedd3"></div>
    <div class="namedd4"></div>
    <div class="namedd5"></div>
    <div class="namedd6"></div>
    <div class="div14">비밀번호</div>
    <div class="div15">이메일</div>
    <div class="div16">전화번호</div>
    <div class="div17">이름</div>
    <div class="div18">아이디</div>
    <div class="div19">닉네임</div>
  </div>
</div>

















        </div>
    ); 
}