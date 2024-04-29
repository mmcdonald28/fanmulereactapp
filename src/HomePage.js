import React from 'react';
import { Flex, Heading, Text, Button, useTheme } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

function HomePage() {
  const { tokens } = useTheme();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="#f0f0f0"
    >
      <Flex
        direction="column"
        alignItems="center"
        maxWidth="400px"
        width="100%"
        padding="2rem"
        backgroundColor="white"
        borderRadius="8px"
        boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
      >
        <Heading size="large" marginBottom="1rem" color={tokens.colors.red[80]}>
          Welcome to the Sports Betting App
        </Heading>
        <Text marginBottom="2rem" color={tokens.colors.red[80]}>
          Sign in or sign up to start betting on your favorite sports.
        </Text>
        <Flex direction="column" gap="1rem" width="100%">
          <Button
            as={Link}
            to="/baseball"
            variation="primary"
            isFullWidth
            backgroundColor={tokens.colors.red[70]}
            _hover={{ backgroundColor: tokens.colors.red[80], borderColor: tokens.colors.red[80] }}
            color={tokens.colors.white}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            to="/baseball"
            variation="secondary"
            isFullWidth
            backgroundColor={tokens.colors.red[70]}
            _hover={{ backgroundColor: tokens.colors.red[80], borderColor: tokens.colors.red[80] }}
            color={tokens.colors.white}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HomePage;
