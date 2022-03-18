import React from "react";
import { FallbackProps } from "react-error-boundary";
import LoadingHandle from "./LoadingHandle";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <LoadingHandle isError={true} resetErrorBoundary={resetErrorBoundary} />
  );
};

export default ErrorFallback;
