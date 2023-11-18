/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>
      <Text
        color='white'
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span' mx='2px'>
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "Made with ❤️ by "}
        </Text>
        <Link href='https://karem-mahmoud-dev.vercel.app' target='_blank'>
          {document.documentElement.dir === "rtl"
            ? "  كارم محمود"
            : "karem mahmoud "}
        </Link>
        &
        <Link href='https://karem-mahmoud-dev.vercel.app' target='_blank'>
          {document.documentElement.dir === "rtl" ? "كارم " : " karem-mahmoud-dev.vercel.app"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " for a better web"}
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl"
              ? " كارم محمود "
              : "karem mahmoud"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl" ? "" : " my website"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link
            color='white'
            fontSize='sm'
            href='#blog'
            href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl" ? "مدونة" : "Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color='white'
            href='#license'
            href='https://karem-mahmoud-dev.vercel.app'>
            {document.documentElement.dir === "rtl" ? "رخصة" : "License"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
