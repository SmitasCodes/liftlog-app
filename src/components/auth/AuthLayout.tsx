import { type AuthLayouts } from "./types";

const AuthLayout = ({ title, children }: AuthLayouts) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default AuthLayout;
