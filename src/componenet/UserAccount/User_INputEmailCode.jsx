import "../UserAccountCss/User_INputEmailCode.css";
import React from "react";
import { Link } from "react-router-dom";

export default function User_INputEmailCode () {
    return(
        <div class="naame">

<div class="backfontmove"></div> {/* 움직이는 배경 */}
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


  {/* 아래쪽 부분  */}
{/* 이메일 입력 탭창 */}
<div class="mainframe">

  <div class="frame_ba">
    <div class="divr">비밀번호 찾기</div>
  </div>
  <div class="frame-baa">
    <img class="rectangle-sip" src="rectangle-310.svg" />
    <Link to='/findpass'>
    <div>  <button class="diii"> 확인</button>  </div></Link>
    <div class="dodopp">
    <input type="text" class="inputback"></input>
      <div class="codefill">코드</div>
    </div>
    <div class="dropa">
      해당 이메일로 코드를 보냈습니다.
      <br />
      코드를 입력하세요.
    </div>
  </div>
  </div>


        </div>
    );
}