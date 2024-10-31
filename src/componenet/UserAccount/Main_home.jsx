import "../UserAccountCss/Main_home.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as nosun } from '../asset/nosun_icon.svg';


export default function Main_home () {
  return(
<div class="main-home"> {/* 1980 * 1020 해상도 감싼것 */}
   
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
  
  <div class="">
    <nosun/>;

  </div>





{/* 로그인/회원가입 부분 */}
  <div class="butonback">
    <Link to="/create"><button className="buton"> 회원가입 </button></Link>
  </div>



{/* 헤더 밑 body부분  */}
  <div class="sang">
    <button class="sangg"> 상품 </button>
  </div>

  <div class="rel">
    <div class="rell">레시피</div>
  </div>

  <div class="ja">
    <div class="jaa">자취팁</div>
  </div>

  <div class="pa">
    <div class="paa">평점</div>
  </div>

  <div class="su">
    <div class="suu">나만의 냉장고</div>
  </div>

</div>

  );
}
