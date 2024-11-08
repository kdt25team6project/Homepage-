import "../ManagerPAGE/ManagerpageQna.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Managerpage() {
    return(
        <div class="Managerpage">

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


  {/* 아래쪽 부분 */}

  <div class="mainbody">
  <div class="o01">
  <div class="o02">
    <div class="o03">문의내용</div>
  </div>
  <div class="o04">
    <div class="o05">보내기</div>
  </div>
  <div class="o06">
    <div class="o05">수정하기</div>
  </div>
  <div class="o07">
    <div class="o08">삭제하기</div>
  </div>
  <div class="o09">
    <div class="o10">
      <div class="o11">
        <div class="o12">날짜</div>
      </div>
    </div>
    <div class="o13">
      <div class="o14"></div>
      <div class="o15">제목</div>
    </div>
    <img class="o16" src="rectangle-31112270.svg" />
    <div class="o17">답변</div>
  </div>
  <div class="o18">
    <div class="o19"></div>
    <div class="o20"></div>
    <div class="o21">제목</div>
  </div>
</div>


{/* 왼쪽 틀 체크 버튼 */}
<div class="rectangle-3111142"></div>
  <div>
    <div><Link to='/managerpage'><button class="fontclass">내 정보</button></Link></div>
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
  <div class="qq01">
    <div><Link to="/managerpageQna"><button class="qq02">문의 내용</button></Link></div>
    </div>














</div>
</div>
)
}