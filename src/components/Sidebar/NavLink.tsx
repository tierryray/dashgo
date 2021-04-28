import { Link as ChakraLik, LinkProps as ChakraLinkProps, Icon, Text } from "@chakra-ui/react";

import { ActiveLink } from '../ActiveLink'
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLik display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLik>
    </ActiveLink>
  );
}