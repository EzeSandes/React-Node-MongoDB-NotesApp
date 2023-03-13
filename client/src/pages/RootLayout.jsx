// import React, { useEffect, useState } from 'react';
// ///
// import { useCookies } from 'react-cookie';
// import { Outlet, useNavigate } from 'react-router-dom';
// import getUser from '../utils/getUser';
// import Login from './Login';
///

// const RootLayout = () => {
//   const [cookies, setCookies] = useCookies(['jwt']);
//   const [isLogged, setIsLogged] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigation = useNavigate();

//   // setCookies(
//   //   'jwt',
//   //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUwYTgwZGQzMWU5ZDg3NWFlZTFjOSIsImlhdCI6MTY3Nzc5MjkxNywiZXhwIjoxNjgwMzg0OTE3fQ.928G2Hin5UUKo5H1O3PnJo30p3EoT93FdxAym8mGyu4'
//   // );

//   const isLoggedIn = () => {
//     const prueba = async () => {
//       const jwt = cookies.jwt;

//       if (jwt) {
//         if (user === null) {
//           console.log('Busco al user');
//           const userAux = await getUser();
//           setUser(userAux);
//         }

//         console.log('Obtuve al user y redirijo a /notes');
//         setIsLogged(true);
//         console.log(user);
//         navigation('/notes');

//         // Sacar el else despues de probar todo.
//       } else {
//         console.log('No Log');
//       }
//     };

//     prueba();
//   };

//   useEffect(isLoggedIn, []);

//   return (
//     <>
//       <main className='bg-black text-white'>
//         {/* Al estar no logueado puedo redirigir el nav al /login (Cuidado con no hacer recursiva/ciclos de renderizado) */}
//         {/* {isLogged ? (
//           <Outlet context={{ setIsLogged, isLoggedIn, user, setUser }} />
//         ) : (
//           <>
//             <h1>No Logueado - LogIn</h1>
//             <Login />
//           </>
//         )} */}

//         {isLogged && (
//           <Outlet context={{ setIsLogged, isLoggedIn, user, setUser }} />
//         )}
//         {!isLogged && (
//           <>
//             <h1>No Logueado - LogIn</h1>
//             {/* <Login setIsLogged={setIsLogged} /> */}
//             <Login />
//           </>
//         )}
//       </main>
//     </>
//   );
// };
/////////////////////////////////////////////
import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div id='app' className='bg-stone-900 font-body'>
      <Outlet />
    </div>
  );
};

export default RootLayout;
