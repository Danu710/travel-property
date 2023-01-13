import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1536px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
