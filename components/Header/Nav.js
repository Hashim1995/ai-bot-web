import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import DashboardItem from "../../data/header.json";

import menuImg from "../../public/images/menu-img/menu-img-2.png";
import { useAppContext } from "@/context/Context";

const Nav = () => {
  const router = useRouter();
  const { showItem, setShowItem } = useAppContext();

  const isActive = (href) => router.pathname.includes(href);

  return (
    <>
      <ul className="mainmenu">
        <li>
          <Link href="#AI-Zades" className={isActive("#AI-Zades") ? "active" : ""}>
            AI-Zades
          </Link>
        </li>
        <li>
          <Link href="#about" className={isActive("#about") ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link href="#time-line" className={isActive("#time-line") ? "active" : ""}>
            Time Line
          </Link>
        </li>
        <li>
          <Link href="#faq" className={isActive("#faq") ? "active" : ""}>
            Faq
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
