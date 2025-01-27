"use client";
import { useState } from "react";
import { TextField, Button, Flex } from "@radix-ui/themes";

import { createDeck } from "@/db";

export default function DeckCreator() {
  const [name, setName] = useState("");

  const onCreateDeck = async () => {
    if (name.trim() === "") return;
    createDeck(name);
    setName("");
  };

  return (
    <Flex gap="2">
      <TextField.Root
        type="text"
        placeholder="Name your deck"
        size="3"
        style={{
          flexGrow: 1,
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return;
          onCreateDeck();
        }}
      />
      <Button
        size="3"
        onClick={() => {
          onCreateDeck();
        }}
      >
        Create a new Deck
      </Button>
    </Flex>
  );
}
