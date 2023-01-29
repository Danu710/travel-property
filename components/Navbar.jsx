import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-300 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex md:order-1 font-3xl text-blue-400 font-bold">
          <Link href="/" paddingLeft="2">
            Realtor
          </Link>
        </div>
        <div className="flex md:order-2">
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outline"
              color="red.400"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
