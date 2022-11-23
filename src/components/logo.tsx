import NextLink from "next/link";

import { chakra } from "@chakra-ui/react";
import Image from "next/image";

const Logo = () => (
  <NextLink href="/" passHref>
    <Image src={'/taxnodesLogo.png'} alt={''} width={170} height={46}/>
  </NextLink>
);

export default Logo;
