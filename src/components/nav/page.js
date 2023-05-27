"use client";
import React from "react";
import { Link } from "@chakra-ui/next-js";


export default function Nav() {
  return (
    <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
      About
    </Link>
  );
}
