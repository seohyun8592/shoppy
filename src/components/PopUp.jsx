// import React, { useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { auth } from '../api/authentication';
// import { AiFillCloseSquare } from 'react-icons/ai';

// export default function PopUp({ onClick, text }) {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const submitHandler = (e) => {
//     e.preventDefault();
//   };
//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const join = () => {
//     createUserWithEmailAndPassword(auth, form.email, form.password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//     popUpClose(onClick);
//   };

//   const popUpClose = () => {
//     onClick((popup) => !popup);
//   };

//   const onCloseHandler = () => {
//     onClick((popup) => !popup);
//   };

//   return (
//     <div className="dim">
//       <div className="popup">
//         <div className="popup__header">
//           <AiFillCloseSquare onClick={onCloseHandler} />
//         </div>
//         <div className="popup__contents">
//           <form onSubmit={submitHandler}>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={form.email}
//               placeholder="이메일을 입력해주세요"
//               onChange={changeHandler}
//             />
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={form.password}
//               placeholder="비밀번호를 입력해주세요"
//               onChange={changeHandler}
//             />
//             <button onClick={login}>{text}</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
