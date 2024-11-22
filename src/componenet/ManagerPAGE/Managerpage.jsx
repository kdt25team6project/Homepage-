import axios from "axios";
import "../ManagerPAGE/Managerpage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ManagerpageQna() {
  // 회원ID와 PW 를 입력시 DB안 회원 개인정보를 불러 오는 ""버튼"" 코드
  const [userId, UserID] = useState(""); // 아이디 입력
  const [userPw, UserPW] = useState(""); // 비밀번호 입력
  const [qnaList, setQnaList] = useState([]);

  useEffect(() => {
    // QnA 데이터를 불러오는 코드 (예시용)
    const fetchQnaData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/qna");
        console.log("QnA 데이터: ", response.data); // 데이터 확인용 콘솔 출력
        setQnaList(response.data);
      } catch (error) {
        console.error("QnA 데이터를 불러오는데 실패했습니다.", error);
      }
    };
    fetchQnaData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user/register", { userId, userPw });
      // 백엔드로 요청이 성공적으로 보내졌을 때 alert로 성공 메시지 표시
      alert("회원의 정보를 불러왔습니다!");
      setUserInfo(response.data); // 사용자 정보 설정
    } catch (error) {
      // 백엔드 요청 실패 시 alert로 오류 메시지 표시
      alert("회원의 정보를 불러오는데 실패했습니다.");
    }
  };

  // 확인버튼 누르면 DB에서 개인정보를 보여주는 코드
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    nickname: "",
    pw: ""
  });
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
    alert("수정 모드에 들어왔습니다.");
  };

  const handleSaveClick = async () => {
    try {
      await axios.put("http://localhost:3000/api/user/update", userInfo);
      alert("회원 정보를 성공적으로 수정했습니다.");
      setIsEditable(false);
    } catch (error) {
      alert("회원 정보를 수정하는데 실패했습니다.");
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/user/delete/${userInfo.id}`);
      alert("회원 정보를 성공적으로 삭제했습니다.");
      setUserInfo({ id: "", name: "", email: "", phone: "", nickname: "", pw: "" });
    } catch (error) {
      alert("회원 정보를 삭제하는데 실패했습니다.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  return (
    <div className="ManagerpageQna">
      <div className="bannerbackcloor"></div>

      {/* 배너쪽 부분 */}
      <div className="backcolor3">
        <Link to="/">
          <button className="best-price">BEST PRICE</button>
        </Link>
      </div>

      {/* 검색쪽 부분 */}
      <div className="serchcss">
        <div className="rectangle-1"></div>
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="rectangle-1"></div>
      </div>

      {/* 마이페이지 부분 */}
      <div className="myiconback">
        <Link to="/Mp">
          <button className="myicon">MY</button>
        </Link>
      </div>

      {/* 로그인/회원가입 부분 */}
      <div className="butonback">
        <Link to="/create">
          <button className="buton">회원가입</button>
        </Link>
      </div>

      {/* 아래부분 */}
      <div className="mainbody">
        {/* 나머지 부분 추가 */}
        <div className="ploq1">
          <div className="ploq2"></div>
          <div className="ploq4">
            <button className="ploqlia" onClick={isEditable ? handleSaveClick : handleEditClick}>
              {isEditable ? "저장하기" : "수정하기"}
            </button>
          </div>
          <div className="conma1">
            <button className="conma2" onClick={handleDeleteClick}>삭제하기</button>
          </div>
          <div className="conma13">
            <div className="conma14">관리자 정보</div>
          </div>
          <div className="yootpa">
            <div>
              <input
                className="conma15"
                name="phone"
                value={userInfo.phone}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="conma16"
                name="email"
                value={userInfo.email}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="conma17"
                name="name"
                value={userInfo.name}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="conma24"
                name="id"
                value={userInfo.id}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                className="conma25"
                name="nickname"
                value={userInfo.nickname}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="conma30"
                name="pw"
                type="password"
                value={userInfo.pw}
                readOnly={!isEditable}
                onChange={handleChange}
              />
            </div>
            <div className="conma21">이메일</div>
            <div className="conma22">전화번호</div>
            <div className="conma23">이름</div>
            <div className="conma29">비밀번호</div>
            <div className="conma27">아이디</div>
            <div className="conma32">닉네임</div>
          </div>
          {qnaList.length > 0 ? (
            qnaList.map((qna, index) => (
              <div className="conma33" key={index}>
                <div className="conma34">
                  <div className="conma35">
                    <div className="conma36">{qna.date}</div>
                  </div>
                </div>
                <div className="conma37">
                  <div className="conma38"></div>
                  <div className="conma39">{qna.title.length > 20 ? `${qna.title.substring(0, 20)}...` : qna.title}</div>
                </div>
                <img className="conma40" src="rectangle-31112270.svg" alt="아이콘" />
                <div className="conma41">{qna.isAnswered ? "O" : "X"}</div>
              </div>
            ))
          ) : (
            <div className="conma33">
              <div>현재 문의 내역이 없습니다.</div>
            </div>
          )}
          <div className="conma42"></div>
          <div>
            <Link to="/review">
              <button className="conma43">리뷰 보기</button>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="conma3">
            <div className="conma5">
              <div className="conma7">ID</div>
              <div>
                <input
                  className="conma6"
                  type="text"
                  value={userId}
                  onChange={(e) => UserID(e.target.value)}
                />
              </div>
            </div>
            <div className="conma8">
              <div className="conma9">PW</div>
              <div>
                <input
                  className="conma10"
                  type="password"
                  value={userPw}
                  onChange={(e) => UserPW(e.target.value)}
                />
              </div>
            </div>
            <div className="conma11">
              <div>
                <button className="conma12" type="submit">
                  확인
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* 왼쪽 틀 체크 버튼 */}
        <div className="rectangle-3111142">
          <div>
            <Link to="/managerpage">
              <button className="fontclass">내 정보</button>
            </Link>
          </div>
          <div className="my">
            <button className="fontclass">장바구니</button>
          </div>
          <div className="buy">
            <button className="fontclass">결제</button>
          </div>
          <div className="my-fridge">
            <button className="fontclass">나의 냉장고</button>
          </div>
          <div className="interest">
            <button className="fontclass">관심</button>
          </div>
          <div className="myrecipecss">
            <button className="fontclass">레시피</button>
          </div>
          <div className="qq01">
            <Link to="/managerpageQna">
              <button className="qq02">문의 내용</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
