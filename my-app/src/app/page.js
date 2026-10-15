"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SplashScreen from "@/components/SplashScreen";
import BgIndex from "@/assets/background-index.svg";
import Button from "@/components/Button";

export default function RootPage() {
  const [Splash, setSplash] = useState(true);

  return (
    <main className="relative w-full h-full overflow-hidden flex flex-col justify-between">
      <Image
        src={BgIndex}
        alt="Background Lolá"
        fill
        priority
        className="object-cover z-0"
      ></Image>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-auto">
      <Link href="/login">
        <Button className="w-50">Fazer login</Button>
      </Link>
      </div>

      {Splash && (
        <SplashScreen onFinish={() => setSplash(false)} />
      )};

    </main>
  );
}
