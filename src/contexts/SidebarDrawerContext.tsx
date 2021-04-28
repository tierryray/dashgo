import { ReactNode, createContext, useContext, useEffect } from "react";
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";

import { useRouter } from "next/router";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);