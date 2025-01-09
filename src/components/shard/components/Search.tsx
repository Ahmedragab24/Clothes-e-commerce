import { Button } from "@/components/ui/button";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <Button variant="ghost" size="icon" className="text-black">
      <RiSearchLine className="navIcon" />
    </Button>
  );
};

export default Search;
