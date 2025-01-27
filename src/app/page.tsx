import { Text, Heading, Box, Button, Card, Flex } from "@radix-ui/themes";
import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

import { getDecks } from "@/db";

import Header from "./components/header";
import DeckCreator from "@/components/deck-creator";

export default async function Home() {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();

  const decks = await getDecks();

  return (
    <main>
      {user ? (
        <>
          <Header />
          <Heading>Pokemon Deck Builder</Heading>
          <Text>
            {user.firstName} {user.lastName}
          </Text>
          <DeckCreator />
          <Flex direction="column" gap="3">
            {decks.map((deck) => (
              <Card key={deck.id} my="2">
                <Link href={`/deck/${deck.id}`}>
                  <Heading as="h2">{deck.name}</Heading>
                  <Box p="2">
                    {deck.cards.length > 0 ? (
                      <Text>Cards here</Text>
                    ) : (
                      <Box mb="3">
                        <Text>
                          No pokemon in this deck, yet. You should add some!
                        </Text>
                      </Box>
                    )}
                  </Box>
                </Link>
              </Card>
            ))}
          </Flex>
        </>
      ) : (
        <Card mt="9">
          <Box p="5">
            <Heading>Sign in to start creating Pokemon Decks</Heading>
            <Box mt="5">
              <Button size="3">
                <a href={signInUrl}>Sign in</a>
              </Button>
            </Box>
          </Box>
        </Card>
      )}
    </main>
  );
}
