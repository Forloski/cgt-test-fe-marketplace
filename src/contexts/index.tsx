import { CartManagementProvider } from "./CartManagement.context";
import { LocalUserIdentifierProvider } from "./LocalUSerIdentifier.context";

type Props = {
  children: React.ReactNode;
};

const Contexts = ({ children }: Props) => {
  return (
    <LocalUserIdentifierProvider>
      <CartManagementProvider>{children}</CartManagementProvider>
    </LocalUserIdentifierProvider>
  );
};

export default Contexts;
