import { Avatar, Box, Heading, Flex, Button } from "@radix-ui/themes";
import Link from "next/link";

import styles from "./header.module.css";
import { signOut, withAuth } from "@workos-inc/authkit-nextjs";

export default async function Header() {
  const { user } = await withAuth();

  return (
    <>
      <Box className={styles.header} p="2" mb="3">
        <Flex>
          <Box flexGrow="1" p="2">
            <Link href="/">
              <Heading highContrast>Pokemon Deck Builder</Heading>
            </Link>
          </Box>
          {user && (
            <Flex gap="2">
              <Avatar
                src={user?.profilePictureUrl ?? undefined}
                fallback={user?.firstName ?? ""}
                size="3"
              />
              <form
                action={async () => {
                  "use server";
                  await signOut({ returnTo: "http://localhost:3000/" });
                }}
              >
                <Button size="3" type="submit">
                  Sign out
                </Button>
              </form>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
}
