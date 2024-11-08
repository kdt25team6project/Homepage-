import "../ManagerPAGE/Review.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Review() {
    return(
        <div class="Review">
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

<div class="frame-532">
  <div class="frame-533">
    <div class="rectangle-3111234"></div>
    <div class="div">회원 리뷰</div>
  </div>
  <div class="frame-534">
    <div class="rectangle-3111235"></div>
    <div class="div2">제목</div>
  </div>
  <div class="frame-535">
    <div class="id">유저 ID</div>
  </div>
  <div class="frame-536">
    <div class="div3">
      삭제
      <br />
    </div>
  </div>
  <div class="frame-537">
    <div class="div4">답변 작성</div>
  </div>
  <div class="frame-538"></div>
</div>





        </div>
    );
}