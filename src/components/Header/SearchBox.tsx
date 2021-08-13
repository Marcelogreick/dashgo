import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null); // toda ref tem um current que é o valor atual e o value é alguma propriedade do input

  return (
    <Flex
    as="label"
    flex="1"
    py="4"
    px="8"
    ml="6"
    maxWidth={400}
    alignSelf="center"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
  >
    <Input
      color="gray.50"
      variant="unstyled"
      px="4"
      mr="4"
      placeholder="Buscar na Plataforma"
      _placeholder={{
        color: 'gray.400'
      }}
      ref={searchInputRef}
    />

    <Icon as={RiSearchLine} fontSize="20"/>

  </Flex>
  );
}
