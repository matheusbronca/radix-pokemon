"use client";
import { Grid } from "@radix-ui/themes";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import PokemonCard from "./pokemon-card";
import { Pokemon } from "@/db";

export default function PokemonGrid({
  pokemon,
  showAdd,
  showRemove,
}: {
  pokemon: Pokemon[];
  showAdd?: boolean;
  showRemove?: boolean;
}) {
  const [parent] = useAutoAnimate();

  return (
    <Grid
      ref={parent}
      columns={{
        initial: "2",
        sm: "4",
        md: "5",
        lg: "7",
      }}
      gap="2"
      mt="2"
    >
      {pokemon.map((p) => (
        <PokemonCard
          pokemon={p}
          key={p.pokemonId}
          showAdd={showAdd}
          showRemove={showRemove}
        />
      ))}
    </Grid>
  );
}
