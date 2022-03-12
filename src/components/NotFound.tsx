import React from "react";
import { ImSad } from "react-icons/im";
import "../styles/components/NotFound/notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__icon">
        <ImSad />
      </div>
      <div className="not-found__message">Aramanız için sonuç bulunamadı.</div>
    </div>
  );
};

export default NotFound;
