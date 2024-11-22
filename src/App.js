import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Create_user from './componenet/UserAccount/Create_uesr'
import Main_home from './componenet/UserAccount/Main_home';
import Loing_user from './componenet/UserAccount/Login_user';
import User_EmailCode from './componenet/UserAccount/User_EmailCode';
import User_INputEmailCode from './componenet/UserAccount/User_INputEmailCode'
import Findpassword from './componenet/UserAccount/Findpassword';
import Mypage from './componenet/UserMypage/Mypage';
import MyQnA from './componenet/UserMypage/MyQnA';
import Managerpage from './componenet/ManagerPAGE/Managerpage';
import Review from './componenet/ManagerPAGE/Review';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_home />} />
        <Route path="/create" element={<Create_user />} />
        <Route path="/Login" element={<Loing_user/>} />
        <Route path="/emailuser" element={<User_EmailCode/>} />
        <Route path="/INputEmail" element={<User_INputEmailCode/>} />
        <Route path="/findpass" element={<Findpassword/>} />
        <Route path="/Mp" element={<Mypage/>} />
        <Route path="/Qa" element={<MyQnA/>} />
        <Route path="/managerpage" element={<Managerpage/>} />
        <Route path="/review" element={<Review/>} />
      </Routes>
    </BrowserRouter>
  );
}

