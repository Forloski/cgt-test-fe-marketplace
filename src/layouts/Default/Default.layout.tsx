import { ReactNode } from "react";
import { Header } from "../../components/Header/Header.component";
import Container from "@mui/material/Container";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default DefaultLayout;
