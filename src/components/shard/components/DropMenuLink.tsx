import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { RiMenu4Line } from "react-icons/ri";

const DropMenuLink = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-black">
          <RiMenu4Line className="navIcon" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        {NavLinks.map(({ title, url }) => (
          <Link key={title} href={url}>
            <DropdownMenuItem>{title}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropMenuLink;
