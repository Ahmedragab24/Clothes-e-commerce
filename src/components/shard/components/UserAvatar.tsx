import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="cursor-pointer !p-0 rounded-full">
          <Avatar className="w-9 h-9">
            <AvatarImage
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User Avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem>
          <Link href={"#"} className="flex items-center justify-between w-full">
            Profile
            <Badge variant="secondary">New</Badge>
          </Link>
        </DropdownMenuItem>

        <Link href={"/Auth/FavoritesPage"}>
          <DropdownMenuItem className="cursor-pointer">
            Favorites
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <Link href={"#"}> Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
