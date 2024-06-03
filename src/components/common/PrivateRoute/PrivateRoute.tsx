import { useContext } from "react";
import UserContext from "../../../contexts/UserContext/UserContext";
import { Navigate } from "react-router-dom";
import Footer from "../../specific/Footer/Footer";
import Navbar from "../../specific/Navbar/Navbar";

export default function PrivateRoute({ children }: any) {
  const { userData } = useContext(UserContext) as any;

  if (userData.token) {
    return (
      <>
        <Navbar isLogged={true}/>
        {children}
        <Footer />
      </>
    );
  } else {
    return <Navigate to='/' replace />;
  }
}