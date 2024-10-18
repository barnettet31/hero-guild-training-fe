import { GameFooter } from "@/components/navigation/game/gameFooter";
import GameHeader from "@/components/navigation/game/gameHeader";
import { Slot } from "expo-router";
import React from "react";

export default function GameLayout() {
  return (
    <>
      <GameHeader />
      <Slot />
      <GameFooter />
    </>
  );
}
