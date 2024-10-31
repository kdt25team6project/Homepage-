import "../UserMypageCss/QnA.css";
import React from "react";
import { Link } from "react-router-dom";

export default function MyQnA() {
    return(            
    <div class="MyQnApage">
     
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



{/* 왼쪽 탭 */}

<div class="frame-504">
  <div class="rectangle-3111142"></div>
  <div>
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





    <div class="frame-524">
  <div class="back1"></div>
  <div class="frame-501">
    <div class="div">나의 문의</div>
    <div class="frame-510">
      <div class="frame-511">
        <div class="frame-512">
          <div class="div2">날짜</div>
        </div>
      </div>
      <div class="frame-515">
        <div class="rectangle-3111225"></div>
        <div class="div3">제목</div>
      </div>
      <div class="frame-521">
        <img class="rectangle-3111227" src="rectangle-31112270.svg" />
        <div class="div4">답변</div>
      </div>
    </div>
    <div class="frame-516">
      <div class="rectangle-3111228"></div>
      <img class="rectangle-3111229" src="rectangle-31112290.svg" />

      <div class="div517">
        <textarea type="text" class="div5" rows="6" cols="22" placeholder="간단한 의견을 입력하세요..."></textarea>
      </div>
      <div class="frame-518">
        <input class="div6"  placeholder="제목" ></input>
        <div class="frame-519"></div>
      </div>
    </div>
    <div class="rectangle-3111230"></div>
    <div class=""><button class="div7">보내기</button></div>
    <div class="frame-520">
      <div class=""><button class="div8">보내기</button></div>
    </div>
    <div class="frame-522">
      <div class="rectangle-3111231"></div>
      <div class=""><button class="div9">삭제하기</button></div>
    </div>
  </div>
</div>





</div>


{/* 문의 탭 */}





















</div>
    );
}