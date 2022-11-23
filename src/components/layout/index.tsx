import { Box } from "@chakra-ui/react";

import Header from "../header";
import Footer from "../footer";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Box as="main">{children}</Box>
    <Footer/>
  </>
);

export default Layout;
