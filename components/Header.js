import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem.js";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME"></HeaderItem>
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING"></HeaderItem>
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED"></HeaderItem>
        <HeaderItem Icon={CollectionIcon} title="COLLECTIONS"></HeaderItem>
        <HeaderItem Icon={SearchIcon} title="SEARCH"></HeaderItem>
        <HeaderItem Icon={UserIcon} title="ACCOUNT"></HeaderItem>
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
