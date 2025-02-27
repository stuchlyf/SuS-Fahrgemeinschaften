import {Box, Icon, Link} from "@chakra-ui/react";
import NextLink from "next/link";
import {useRouter} from "next/router";
import React, {useMemo} from "react";
import {IoCar, IoCarOutline, IoPersonCircle, IoPersonCircleOutline, IoSearch, IoSearchOutline,} from "react-icons/io5";

const BottomNavigation: React.FC = () => {
  const router = useRouter();

  const currentSite = useMemo<'search-trip' | 'create-trip' | 'profiles' | undefined>(() => {
    if (router.pathname.startsWith('/trips/create')) {
      return 'create-trip';
    } else if (router.pathname.startsWith('/trips')) {
      return 'search-trip';
    } else if (router.pathname.startsWith('/profiles')) {
      return 'profiles'
    } else {
      return undefined;
    }
  }, [router.pathname]);

  return (
      <Box className="grid grid-cols-3 h-[5.875rem] w-full bg-cyan-900 place-content-stretch justify-items-stretch">
        <Link as={NextLink} href="/trips" className="flex justify-center items-center">
          <Icon as={currentSite === 'search-trip' ? IoSearch : IoSearchOutline} color="white" boxSize={`1.5rem`}/>
        </Link>
        <Link as={NextLink} href="/trips/create" className="flex justify-center items-center">
          <Icon as={currentSite === 'create-trip' ? IoCar : IoCarOutline} color="white" boxSize={`1.5rem`}/>
        </Link>
        <Link
            as={NextLink}
            href="/profiles/me"
            className="flex justify-center items-center"
        >
          <Icon as={currentSite === 'profiles' ? IoPersonCircle : IoPersonCircleOutline} color="white"
                boxSize={`1.5rem`}/>
        </Link>
      </Box>
  );
};

export default BottomNavigation;
