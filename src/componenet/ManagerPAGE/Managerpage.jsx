import "../ManagerPAGE/Managerpage.css";
import React from "react";
import { Link } from "react-router-dom";



export default function ManagerpageQna() {
    return(
        <div class="ManagerpageQna">
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

{/* 아래부분  */}





<div class="mainbody">

<div class="ploq1">
  <div class="ploq2"></div>
  <div class="ploq3">
    <div class="ploq5">보내기</div>
  </div>
  <div class="ploq4">
    <div class="ploq5">수정하기</div>
  </div>
  <div class="conma1">
    <div class="conma2">삭제하기</div>
  </div>
  <div class="conma3">
    <div class="conma4"></div>
    <div class="conma5">
      <div class="conma7">ID</div>
      <div class=""><input class="conma6"></input></div>
    </div>
    <div class="conma8">
    <div class="conma9">PW</div>
      <div class="oonma10"><input class="conma10"></input></div>
    </div>
    <div class="conma11">
      <div class=""><button class="conma12">확인</button></div>
    </div>
  </div>
  <div class="conma13">
    <div class="conma14">관리자 정보</div>
  </div>
  <div class=""><input class="conma15"></input></div>
  <div class=""><input class="conma16"></input></div>
  <div class=""><input class="conma17"></input></div>
  <div class="conma18"></div>
  <div class="conma19"></div>
  <div class="conma20"></div>
  <div class=""><input class="conma24"></input></div>
  <div class=""><input type="text" class="conma25"></input></div>
  <div class="conma26"></div>
  <div class=""><input class="conma30"></input></div>
  <div class="conma31"></div>
  <div class="conma21">이메일</div>
  <div class="conma22">전화번호</div>
  <div class="conma23">이름</div>
  <div class="conma27">아이디</div>
  <div class="conma28"></div>
  <div class="conma29">비밀번호</div>

  <div class="conma32">닉네임</div>
  <div class="conma33">
    <div class="conma34">
      <div class="conma35">
        <div class="conma36">날짜</div>
      </div>
    </div>
    <div class="conma37">
      <div class="conma38"></div>
      <div class="conma39">제목</div>
    </div>
    <img class="conma40" src="rectangle-31112270.svg" />
    <div class="conma41">답변</div>
  </div>
  <div class="conma42"></div>
  <div class=""><Link to="/review"><button class="conma43">리뷰 보기</button></Link></div>
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

      
    );
}