import NextLink from "next/link";
import type { MouseEventHandler } from "react";

import { Box, chakra } from "@chakra-ui/react";

const links = [
  { title: "Home", path: "/" },
  { title: "Advisory", path: "/advisory" },
];

interface Props {
  onClick: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Links = ({ onClick }: Props) => {
  return (
    <>
      {links.map((link) => (
        <Box
          as="li"
          listStyleType="none"
          px={[6,7,8,9,10]}
          py={[3,0]}
          key={link.title}
        >
          <NextLink href={link.path}>
            <chakra.a href={link.path} onClick={onClick} fontSize={'sm'}>
              {link.title}
            </chakra.a>
          </NextLink>
        </Box>
      ))}
    </>
  );
};

export default Links;
