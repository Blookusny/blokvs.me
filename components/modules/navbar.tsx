"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Moon, Sun, Github, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="w-screen border-b border-neutral-400 dark:border-neutral-700 backdrop-blur-sm px-[10vw] py-4 flex justify-between items-center bg-background z-10">
      <Link className="text-lg font-medium" href="/">
        blokvs.me
      </Link>
      <ul className="hidden sm:flex space-x-4 dark:text-neutral-300 font-light text-sm">
        <li>
          <Link className="hover:underline underline-offset-4" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-neutral-400 dark:text-neutral-500 cursor-default"
            href="/"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-neutral-400 dark:text-neutral-500 cursor-default"
            href="/"
          >
            Playground
          </Link>
        </li>
      </ul>
      <ul className="hidden sm:flex space-x-2">
        <Button size="icon" variant="ghost" asChild>
          <Link href="/repo">
            <Github className="size-2" />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        >
          {theme == "light" ? <Moon /> : <Sun />}
        </Button>
      </ul>
      <DropdownMenu>
        <DropdownMenuTrigger className="sm:hidden" asChild>
          <Button size="icon" variant="ghost">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem disabled>Projects</DropdownMenuItem>
          <DropdownMenuItem disabled>Playground</DropdownMenuItem>
          <DropdownMenuSeparator />
          <ul className="flex space-x-2">
            <Button size="icon" variant="ghost" asChild>
              <Link href="/repo">
                <Github className="size-2" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            >
              {theme == "light" ? <Moon /> : <Sun />}
            </Button>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
