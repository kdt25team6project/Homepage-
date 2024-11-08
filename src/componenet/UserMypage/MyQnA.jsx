import "../UserMypageCss/QnA.css";
import React from "react";
import { Link } from "react-router-dom";

export default function MyQnA() {
  {/* 문의 답변진행사항 더미데이터 */}
  const data = [
    { title: 'React 학습', date: '2024-11-01', response: '진행 중' },
    { title: '리액트 Hooks 사용법', date: '2024-11-05', response: '완료' },
    { title: '리덕스 상태 관리', date: '2024-11-07', response: '진행 중' },
  ]; 
  
  
  
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





    <div class="backlo1">
  <div class="fr1"></div>
  <div class="fr2">
    <div class="fovr">나의 문의</div>


{/* 문의 답변 진행사항 */}
    <div class="fr3">
    <table className="task-table">
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.response}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="fr4">
        <div class="fr5">
          <div class="qa1">날짜</div>
        </div>
      </div>
      <div class="qa2">
        <div class="ra1"></div>
        <div class="qa3">제목</div>
      </div>
      <div class="ra2">
        <img class="ra3"  />
        <div class="ra4">답변</div>
      </div>
    </div>



    <div class="yq1">
      <div class="yq2"></div>
      <img class="yq3"  />

      <div class="yq4">
        <textarea type="text" class="yq5" rows="6" cols="22" placeholder="간단한 의견을 입력하세요..."></textarea>
      </div>
      <div class="yu6">
        <input class="yu1"  placeholder="제목" ></input>
        <div class="yu2"></div>
      </div>
    </div>
    <div class="yu3"></div>
    <div class=""><button class="yu4">보내기</button></div>
    <div class="ta1">
      <div class=""><button class="ta2">수정하기</button></div>
    </div>
    <div class="ta3">
      <div class="ta4"></div>
      <div class=""><button class="ta5">삭제하기</button></div>
    </div>
  </div>
</div>





</div>


{/* 문의 탭 */}





















</div>
    );
}