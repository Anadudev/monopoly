"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dice } from "@/app/components/dice";
import { Token } from "@/app/components/token";
import { House } from "@/app/components/house";
import { Hotel } from "./components/hotel";
import { Chances } from "@/data/cards/chance";
import { ChanceCard } from "./chance-card";
import { Money } from "./money";

const tokens = [
  "race car",
  "thimble",
  "shoe",
  "scottie dog",
  "battleship",
  "top hat",
  "iron",
  "wheelbarrow",
];
// add crypto currencies as currency options
const currencyValues = [5000, 1000, 500, 200, 100, 50, 10];

export default function Home() {
  const [roll, setRoll] = useState<number | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  const [chance, setChance] = useState<ChanceCard | null>(null);
  const [monies, setMonies] = useState<Money[]>(currencyValues.map((value) => (
    new Money(value)
   )));

  const player = "james";
  const dice = new Dice();
  const house = new House(player, "Dragon House");
  const hotel = new Hotel(player, "Dragon Hotel");
  const money = new Money(200);

  const handleChance = () => {
    Chances.push(Chances.shift()!);
    setChance(new ChanceCard(Chances[0].message, Chances[0].action, player));
    // new Promise(() => setTimeout(() => setChance(null), 2000));
  };

  const createMoney = (values: number[]) => {
    return values.map((value) => (
     new Money(value)
    ));
  };

  const handleToken = (name: string) => {
    const newToken = new Token(name, player);
    setToken(newToken);
  };

  return (
    <div className="">
      <p>
        {player} rolled: {roll}
      </p>
      <p>
        {token?.player} token: {token?.name}
      </p>
      <p title={house.name}>
        {house.owner}'s {house.type}
      </p>
      <p title={hotel.name}>
        {hotel.owner}'s {hotel.type}
      </p>
      <p>
        {chance && `${chance.player}`} chance: {chance?.message}
      </p>
      <p>
        Available Monies:
        {monies.map((m) =>(
            <p key={m.value}title={m.symbol}>{m.currency}{m.value} * {m.pcs}</p>
        ))}
      </p>

      <select name="" id="">
        {tokens.map((token) => (
          <option onClick={() => handleToken(token)} key={token} value={token}>
            {token}
          </option>
        ))}
      </select>
      <div className="space-x-2">
        <button onClick={handleChance}>Use Chance</button>
        <button onClick={() => setRoll(dice.roll())}>Roll Dice</button>
      </div>
    </div>
  );
}
