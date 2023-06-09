import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { useAuth } from "@polybase/react";
import { CgProfile } from "react-icons/cg";
import Avatar from "avataaars";
import { generateRandomAvatarOptions } from "../../utils/avatar";
import { px } from "framer-motion";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth, state } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} px={10}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            fontSize="26px"
            fontWeight="0"
            ml="2"
            color="brand.00"
          >
            <Link to="/">MedMate</Link>
          </HStack>
          <Flex alignItems={"center"}>
            {state && (
              <div style={{ display: "flex" }}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  marginRight={4}
                >
                  <Link to="/book">
                    <Button w="full" variant="ghost">
                      Book Appointment
                    </Button>
                  </Link>
                </HStack>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  marginRight={4}
                >
                  <Link to="/profile">
                    <Button w="full" variant="ghost">
                      Profile
                    </Button>
                  </Link>
                </HStack>
              </div>
            )}
            {state == null ? (
              <Button
                display="flex"
                flexDir="row"
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                leftIcon={<Icon as={CgProfile} boxSize={6} />}
                onClick={() => auth.signIn() && navigate("/profile")}
              >
                Sign In
              </Button>
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    avatarStyle="Circle"
                    {...generateRandomAvatarOptions()}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    Welcome,{" "}
                    {state.userId.slice(0, 4) + "..." + state.userId.slice(-4)}
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem as={Link} to="/profile">
                    Profile
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => auth.signOut()}>Sign Out</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/profile">
                <Button w="full" variant="ghost">
                  Profile
                </Button>
              </Link>
            </Stack>
            <Stack as={"nav"} spacing={4}>
              <Link to="/book">
                <Button w="full" variant="ghost">
                  Book Appointment
                </Button>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
