import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../styles/components/LoadingHandle/loadingHandle.css";

interface Props {
  isError: boolean;
  resetErrorBoundary?: (...args: unknown[]) => void;
}
const LoadingHandle = ({ isError, resetErrorBoundary }: Props) => {
  return (
    <div className="loading-handle">
      <div onClick={resetErrorBoundary} className="loading-handle__close">
        <IoIosCloseCircleOutline />
      </div>
      {isError ? (
        <div className="loading-handle__message">Something went wrong!!!</div>
      ) : (
        <div className="loading-handle__loader"></div>
      )}
    </div>
  );
};

export default LoadingHandle;
