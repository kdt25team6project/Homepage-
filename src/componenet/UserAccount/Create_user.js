import Create_user from "./Create_uesr";


// 회원가입 알림 및 조건 
export function Create_check() {
    var id = document.getElementById("id");
    var pw = document.getElementById("pw");
    var nick = document.getElementById("nick");
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");


    if (id.value == "") {
        alert("아이디를 입력하세요.");
        id.focus();
        return false;
    };


    if (nick.value == "") {
        alert("닉네임을 입력하세요.");
        nick.focus();
        return false;
    };

    if (pw.value == "") {
        alert("비밀번호를 입력하세요.");
        pw.focus();
        return false;
    };


    if (name.value == "") {
        alert("이름을 입력하세요.");
        name.focus();
        return false;
      };

    if (email.value == "") {
        alert("이메일 주소를 입력하세요.");
        email.focus();
        return false;
    };

    var reg = /^[0-9]+/g; 

    if (!reg.test(phone.value)) {
      alert("전화번호는 숫자만 입력할 수 있습니다.");
      phone.focus();
      return false;
    }

    alert("회원가입이 완료되었습니다.");  // 여기서 alert 추가
    navigator('/Main_home');

    console.log("회원가입이 완료");

}

