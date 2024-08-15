import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  IconButton,
  Navbar as MTNavbar,
  Typography,
} from "@material-tailwind/react";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function NavItem({ children, href, onClick }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={onClick}
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
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        window.innerWidth >= 960 && setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolling(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToWhoWeAre = () => {
    const section = document.getElementById("about-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToWhatWeDo = () => {
    const section = document.getElementById("we-do");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToDatasets = () => {
    window.open('https://github.com/MVet-Platform/ELISA-ML/tree/main', '_blank', 'noopener,noreferrer');
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
          <Image
            src="/image/logo.png"
            alt="M-Vet Logo"
            width={35}
            height={35}
          />
          M-Vet
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-green-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem onClick={navigateToWhoWeAre}>Who We Are</NavItem>
          <NavItem onClick={navigateToWhatWeDo}>What We Do</NavItem>
          <NavItem onClick={navigateToDatasets}>Datasets</NavItem>
          <li>
            <Link href="/">
              <Typography
                as="a"
                variant="small"
                className="font-bold"
              >
                Blog & News
              </Typography>
            </Link>
          </li>
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
          onClick={() => setOpen(!open)}
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
            <NavItem onClick={navigateToWhoWeAre}>Who We Are</NavItem>
            <NavItem onClick={navigateToWhatWeDo}>What We Do</NavItem>
            <NavItem onClick={navigateToDatasets}>Datasets</NavItem>
            <li>
              <Link href="/blog">
                <Typography
                  as="a"
                  variant="small"
                  className="font-bold"
                >
                  Blog
                </Typography>
              </Link>
            </li>
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
