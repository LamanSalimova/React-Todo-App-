import React, { useState } from "react";
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Box } from "@chakra-ui/react";
export default function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  return (
    <Flex
      as="header"
      bg="#0D0D0D"
      justify="center"
      align="center"
      height="200px"
      position="relative"
    >
      <Text as="h1" color="#f2f2f2" className="textGradient">
        Todo App
      </Text>
      <form className="formControl" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="add a new task"
          width="736px"
          //   width={{ base: "100%", md: "500px", xl: "600px" }}
          // width="full"
          flex="1"
          color="#FFF"
          bg="#262626"
          border="1px solid #0D0D0D"
          outline="none"
          borderRadius="8px"
          fontSize="16px"
          padding="0 16px"
          _placeholder={{ color: "#808080" }}
          value={title}
          onChange={onChangeTitle}
        />
        <Button
          width="full"
          mt={4}
          type="submit"
          height="full"
          padding="0 16px"
          bg="#6A8B3B"
          color="#FFF"
          border="none"
          borderRadius="8px"
          display="flex"
          align="center"
          gap="6px"
          fontWeight="700"
          fontSize="14px"
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          transition="0.3s"
        >
          Create
          <AiOutlinePlusCircle size={20} />
        </Button>
      </form>
    </Flex>
  );
}
