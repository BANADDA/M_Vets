import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  IconButton,
  Navbar as MTNavbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void; // Add onClick prop
}

function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={onClick} // Attach onClick event
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-bold"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation to the "Who We Are" section
  const navigateToWhoWeAre = () => {
    const section = document.getElementById("about-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle navigation to the "What We Do" section
  const navigateToWhatWeDo = () => {
    const section = document.getElementById("we-do");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href=""
          target="_blank"
          variant="h6"
          color={isScrolling ? "green" : "white"}
          className="flex items-center gap-2"
        >
          <img
            src="/image/logo.png"
            alt="M-Vet Logo"
            className="h-10 w-auto"
          />
          M-Vet
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-green-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          {/* Modify the "Who We Are" NavItem */}
          <NavItem onClick={navigateToWhoWeAre}>Who We Are</NavItem>
          {/* Modify the "What We Do" NavItem */}
          <NavItem onClick={navigateToWhatWeDo}>What We Do</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-end">
          <IconButton
            variant="text"
            color={isScrolling ? "green" : "white"}
            size="sm"
          ></IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "green" : "white"}
            size="sm"
          ></IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "green" : "white"}
            size="sm"
          ></IconButton>
          <a href="">
            <Button color={isScrolling ? "green" : "white"} size="sm">
              Contact Us
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "green" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-green-50 bg-white px-6 py-5">
          <ul className="flex flex-col text-black gap-4 text-blue-green-900">
            <NavItem>Home</NavItem>
            {/* Modify the "Who We Are" NavItem */}
            <NavItem onClick={navigateToWhoWeAre}>Who We Are</NavItem>
            {/* Modify the "What We Do" NavItem */}
            <NavItem onClick={navigateToWhatWeDo}>What We Do</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href="">
              <Button color="green" size="sm" className="ml-auto">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
