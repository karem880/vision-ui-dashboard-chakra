/*!

=========================================================
* karem mahmoud Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 karem mahmoud (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & karem mahmoud

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "center",
      }}
      justifyContent='space-between'
      px='30px'
      pb='20px'>
      <Text
        fontSize='sm'
        color='white'
        textAlign={{
          base: "center",
          xl: "center",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span'>
          {document.documentElement.dir === "rtl"
            ? " مصممه بالكود باستخدام "
            : "all cobyrights for @ "}
        </Text>
        <Link href='https://karem-mahmoud-dev.vercel.app' target='_blank'>
          {document.documentElement.dir === "rtl"
            ? " كارم محمود "
            : "karem mahmoud"}
        </Link>
        &
        <Link href='https://karem-mahmoud-dev.vercel.app' target='_blank'>
          {document.documentElement.dir === "rtl" ? "بسيطه " : " simple"}
        </Link>
       
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='white' fontSize='sm' href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl"
              ? "كارم محمود"
              : "karem"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link color='white' fontSize='sm' href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl" ? "karem mahmoud" : "karem mahmoud"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
          <Link
            color='white'
            fontSize='sm'
            href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl" ? "مدونة" : "Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color='white'
            fontSize='sm'
            href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl" ? "رخصة" : "License"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}

