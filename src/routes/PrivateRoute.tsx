// import { Navigate } from "react-router-dom";
// import { useUserStore } from "../store/userState";
// import { ReactElement } from "react";

// const PrivateRoute = ({ children }: { children: ReactElement }) => {
//   const uid = useUserStore((state: { uid: any; }) => state.uid);
//   if (uid == undefined || uid == null || uid == "") {
//     // console.log("El usuario privado es: ", uid);
//     console.log("Redireccionado a home");
//     // return window.location.href = "/favorites";
//     return <Navigate to="/favorites" replace={true} />;
//   }
//   return children;
// };

// export default PrivateRoute;
