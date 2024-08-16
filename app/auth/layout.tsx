import React from "react";

const AuthLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="h-full flex items-center justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;
