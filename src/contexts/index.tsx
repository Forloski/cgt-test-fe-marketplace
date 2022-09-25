import { CartManagementProvider } from "./CartManagement.context";

type Props = {
  children: React.ReactNode;
};

const Contexts = ({ children }: Props) => {
  return <CartManagementProvider>{children}</CartManagementProvider>;
};

export default Contexts;
