import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Marcelo Greick</Text>
        <Text color="gray.300" fontSize="small">
          mgreick25@gmail.com
        </Text>
      </Box>
    )}

    <Avatar
      size="md"
      name="Marcelo Greick"
      src="https://github.com/marcelogreick.png"
    />
  </Flex>
  );
}
