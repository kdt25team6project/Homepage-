import "../ManagerPAGE/Review.css";
import React, { useEffect, useState } from "react";

export default function Review() {

  // DB에 저장된 값들 더미데이터 
  const [reviews, setReviews] = useState([
    {
      userId: 'user123',
      title: '좋은 상품입니다',
      content: '배송도 빠르고 품질도 만족스럽습니다. 다음에 또 구매하고 싶습니다.',
      reply: '리뷰를 남겨주셔서 감사합니다! 만족스러운 경험을 하셨다니 기쁩니다. 앞으로도 좋은 서비스 제공하도록 노력하겠습니다.'
    },
    {
      userId: 'john_doe',
      title: '기대 이상이에요!',
      content: '솔직히 큰 기대를 하지 않고 구매했는데, 사용해보니 너무 좋았습니다. 디자인도 마음에 듭니다.',
      reply: ''
    },
    {
      userId: 'jane_smith',
      title: '배송이 조금 늦었어요',
      content: '상품은 괜찮았지만, 배송이 예상보다 3일 정도 더 늦었습니다. 그 외에는 만족합니다.',
      reply: ''
    },
    {
      userId: 'alice_w',
      title: '훌륭한 고객 서비스',
      content: '고객센터에서 친절하게 응대해주셔서 문제를 쉽게 해결할 수 있었습니다. 감사합니다.',
      reply: ''
    },
    {
      userId: 'bob_lee',
      title: '가격 대비 최고',
      content: '가격 대비 성능이 정말 좋습니다. 주변 지인들에게도 추천하고 있어요.',
      reply: ''
    },
  ]); 

  const [selectedReview, setSelectedReview] = useState(null); 
  const [reply, setReply] = useState(""); 

  const handleReviewSelect = (review) => {
    setSelectedReview(review);
    setReply(review.reply || "");
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();

    if (selectedReview) {
      fetch("http://localhost:8080/api/reviews/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          reviewId: selectedReview.userId,
          reply: reply
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log("답변이 성공적으로 전송되었습니다:", data);
          alert("답변이 성공적으로 제출되었습니다.");
          setReviews(prevReviews => prevReviews.map(r => r.userId === selectedReview.userId ? { ...r, reply: reply } : r));
          setReply(""); 
        })
        .catch(error => {
          console.error("답변 전송 중 오류 발생:", error);
          alert("답변 제출 중 오류가 발생했습니다.");
        });
    }
  };

  const handleReplyDelete = () => {
    if (selectedReview) {
      fetch(`http://localhost:8080/api/reviews/${selectedReview.userId}/reply`, {
        method: "DELETE",
      })
        .then(response => {
          if (response.ok) {
            console.log("답변이 삭제되었습니다.");
            alert("답변이 성공적으로 삭제되었습니다.");
            setReviews(prevReviews => prevReviews.map(r => r.userId === selectedReview.userId ? { ...r, reply: "" } : r));
            setReply(""); 
          }
        })
        .catch(error => {
          console.error("답변 삭제 중 오류 발생:", error);
          alert("답변 삭제 중 오류가 발생했습니다.");
        });
    }
  };

  return (
    <div className="Review">
      <div className="reviewSection">
        <div className="reviewHeader">
          <h2>회원 리뷰</h2>
        </div>
        
        <div className="reviewTableContainer">
          {reviews.length === 0 ? (
            <p>리뷰가 없습니다.</p>
          ) : (
            <table className="reviewTable">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <tr key={index} onClick={() => handleReviewSelect(review)}>
                    <td>{index + 1}</td>
                    <td>{truncateTitle(review.title, 20)}</td>
                    <td>{truncateTitle(review.content, 50)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {selectedReview && (
        <div className="replySection">
          <h3>답변 수정 - {truncateTitle(selectedReview.title, 20)}</h3>
          <form onSubmit={handleReplySubmit}>
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="답변을 입력하세요"
              required
            />
            <button type="submit">답변 제출</button>
            <button type="button" onClick={handleReplyDelete}>삭제하기</button>
          </form>
        </div>
      )}
    </div>
  );
}

const truncateTitle = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
