import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Heading,
    HStack,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
  import Image from "next/image";
  import { useRouter } from "next/router";
  
  const LandingNavbar: React.FC = () => {
    const { isOpen, onToggle } = useDisclosure();
    const router = useRouter();
    const { asPath } = router;
    const NAV_ITEMS = getNavItems(asPath);
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={{ base: "60px", md: "80px", lg: "100px" }}
          py={{ base: 2, md: 3, lg: 4 }}
          px={{ base: 4, md: 6, lg: 8 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justify={"space-between"}
        >
          {/* Mobile Menu Button */}
          <Flex display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
  
          {/* Logo and Title */}
          <HStack align={"center"} spacing={{ base: 2, md: 4 }}>
            <Link href="/">
              <Image src="/MattLogo.png" alt="Matt Logo" width={50} height={50} />
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Heading
                m={0}
                as="h3"
                // fontSize={useBreakpointValue({
                //   base: "18px",
                //   sm: "23px",
                //   md: "20px",
                //   lg: "25px",
                //   xl: "25px",
                // })}
              >
                MATT RESEARCH SOLUTIONS
              </Heading>
            </Link>
          </HStack>
  
          {/* Desktop Navigation */}
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
        </Flex>
  
        {/* Mobile Navigation */}
        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={NAV_ITEMS} />
        </Collapse>
      </Box>
    );
  };
  
  const DesktopNav = ({ navItems }) => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
    return (
      <Stack direction={"row"} spacing={6}>
        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "/"}
                  fontSize={{ base: "12px", md: "15px", lg: "18px" }}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href }) => (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Text fontWeight={500}>{label}</Text>
        <Icon
          as={ChevronRightIcon}
          w={5}
          h={5}
          opacity={0}
          _groupHover={{ opacity: 1 }}
        />
      </Stack>
    </Link>
  );
  
  const MobileNav = ({ navItems }) => (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }} spacing={4}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "/"}
          justify={"space-between"}
          align={"center"}
          _hover={{ textDecoration: "none" }}
        >
          <Text fontWeight={600}>{label}</Text>
          {children && (
            <Icon
              as={ChevronRightIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Stack pl={4} borderLeft={1} borderStyle={"solid"} borderColor={"gray.200"}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const getNavItems = (currentUrl) => [
    { label: "Home" },
    { label: "Services", href: currentUrl === "/" ? "#abouts" : "#abouts" },
    { label: "Why Choose Us", href: currentUrl === "/" ? "#service" : "#service" },
    { label: "We Are Specialized", href: currentUrl === "/" ? "#serve" : "#serve" },
    { label: "Assistant", href: currentUrl === "/" ? "#specialized" : "#specialized" },
    { label: "Contact Us", href: currentUrl === "/" ? "#contact" : "#contact" },
  ];
  
  export default LandingNavbar;
  











//  import {
//      Box,
//      Flex,
//      Text,
//      IconButton,
//      Button,
//      Stack,
//      Collapse,
//      Icon,
//      Link,
//      Popover,
//      PopoverTrigger,
//      PopoverContent,
//      useColorModeValue,
//      useBreakpointValue,
//      useDisclosure,
//      Heading,
//      HStack,
//  } from '@chakra-ui/react';
//  import logo from '../assets/logo.jpg'
//  import {
//      HamburgerIcon,
//      CloseIcon,
//      ChevronDownIcon,
//      ChevronRightIcon,
//  } from '@chakra-ui/icons';
//  import Image from 'next/image';
//  import { useRouter } from 'next/router';


// const LandingNavbar: React.FC = () => {
//     const { isOpen, onToggle } = useDisclosure();
//     const router = useRouter();
//     const { asPath } = router;
//     const NAV_ITEMS = getNavItems(asPath);
//     return (
//       <Box>
//         <Flex
//           bg={useColorModeValue("white", "gray.800")}
//           color={useColorModeValue("gray.600", "white")}
//           minH={{ base: "60px", md: "80px", lg: "100px" }}
//           py={{ base: 2, md: 3, lg: 4 }}
//           px={{ base: 4, md: 6, lg: 8 }}
//           borderBottom={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.900")}
//           align={"center"}
//           justify={"space-between"}
//         >
//           <Flex display={{ base: "flex", md: "none" }} ml={{ base: 0 }}>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//               }
//               variant={"ghost"}
//               aria-label={"Toggle Navigation"}
//             />
//           </Flex>
  
//           <HStack align={"center"} spacing={{ base: 2, md: 4 }}>
//             <Link href="/">
//               <Image src="/MattLogo.png" alt="matt logo" width={50} height={50} />
//             </Link>
//             <Link href="#" style={{ textDecoration: "none" }}>
//               {/* <Heading as='h3' size={useBreakpointValue({ base: 'md', md: 'lg', lg: '1xl' })}>
//                       MATT ENGINEERING SOLUTIONS
//                   </Heading> */}
//               <Heading
//                 m={0}
//                 as="h3"
//                 fontSize={{
//                   base: "18px",
//                   sm: "25px",
//                   md: "20px",
//                   lg: "14px",
//                   xl: "25px",
//                   "2xl": "25px",
//                 }}
//               >
//                 MATT RESEARCH SOLUTIONS
//               </Heading>
//             </Link>
//           </HStack>
  
//           <Flex display={{ base: "none", md: "flex" }} ml={10}>
//             <DesktopNav navItems={NAV_ITEMS} />
//           </Flex>
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav navItems={NAV_ITEMS} />
//         </Collapse>
//       </Box>
//     );
//   };
  
//   const DesktopNav = ({ navItems }) => {
//     const linkColor = useColorModeValue("gray.600", "gray.200");
//     const linkHoverColor = useColorModeValue("gray.800", "white");
//     const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
//     return (
//       <Stack direction={"row"} spacing={6} ml={10} alignItems={"center"}>
//         {navItems.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={"hover"} placement={"bottom-start"}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? "#"}
//                   // fontSize={useBreakpointValue({
//                   //   base: "sm",
//                   //   md: "md",
//                   //   lg: "lg",
//                   // })}
//                   fontSize={{
//                     base: "12px",
//                     sm: "14px",
//                     md: "13px",
//                     lg: "12px",
//                     xl: "20px",
//                     "2xl": "22px",
//                   }}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: "none",
//                     color: linkHoverColor,
//                   }}
//                 >
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={"xl"}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={"xl"}
//                   minW={"sm"}
//                 >
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };
  
//   const DesktopSubNav = ({ label, href }) => {
//     return (
//       <Link
//         href={href}
//         role={"group"}
//         display={"block"}
//         p={2}
//         rounded={"md"}
//         _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
//       >
//         <Stack direction={"row"} align={"center"}>
//           <Text fontWeight={500}>{label}</Text>
//           <Icon
//             as={ChevronRightIcon}
//             w={5}
//             h={5}
//             opacity={0}
//             _groupHover={{ opacity: 1 }}
//           />
//         </Stack>
//       </Link>
//     );
//   };
  
//   const MobileNav = ({ navItems }) => {
//     return (
//       <Stack
//         bg={useColorModeValue("white", "gray.800")}
//         p={4}
//         display={{ md: "none" }}
//         spacing={4}
//       >
//         {navItems.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
//   const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Flex
//           py={2}
//           as={Link}
//           href={href ?? "#"}
//           justify={"space-between"}
//           align={"center"}
//           _hover={{ textDecoration: "none" }}
//         >
//           <Text fontWeight={600}>{label}</Text>
//           {children && (
//             <Icon
//               as={ChevronRightIcon}
//               transition={"all .25s ease-in-out"}
//               transform={isOpen ? "rotate(180deg)" : ""}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <Stack
//             pl={4}
//             borderLeft={1}
//             borderStyle={"solid"}
//             borderColor={"gray.200"}
//           >
//             {children &&
//               children.map((child) => (
//                 <Link key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Link>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };
  
//   const getNavItems = (currentUrl) => {
//     return [
//       {
//         label: "Home",
//       },
  
//       {
//         label: "Services",
//         href: currentUrl === "/" ? "#abouts" : "#abouts",
//       },
  
//       {
//         label: "Why Choose Us",
//         href: currentUrl === "/" ? "#service" : "#service",
//       },
//       {
//         label: "We Are Specialized",
//         href: currentUrl === "/" ? "#serve" : "#serve",
//       },
//       {
//         label: "Assissant",
//         href: currentUrl === "/" ? "#specialized" : "#specialized",
//       },
//       {
//         label: "Contact Us",
//         href: currentUrl === "/" ? "#contact" : "#contact",
//       },
//     ];
//   };