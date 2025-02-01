"use client";
import React,{ useState } from "react";
import Image from "next/image";
import { Dice } from "@/app/components/dice";
export default function Home() {
  const [roll, setRoll] = useState<number | null>(null);
  const dice = new Dice();
  return (
    <div className="">
      <p>You rooled {roll}</p>
      <button onClick={() => setRoll(dice.roll())}>Roll Dice</button>
    </div>
  );
}
