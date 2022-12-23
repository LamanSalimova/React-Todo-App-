import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
export default function Task({ task, onComplete, onDelete }) {
  return (
    <>
      <Flex
        width="full"
        align="center"
        justify="space-between"
        bg="#262626"
        border="1px solid #333333"
        color="#D9D9D9"
        fontSize="12px"
        fontWeight="700"
        p="16px"
        borderRadius="8px"
        gap={3}
      >
        <Button
          width="18px"
          height="18px"
          bg="none"
          border="none"
          cursor="pointer"
          mr={10}
          onClick={() => onComplete(task.id)}
        >
          {task.isCompleted ? (
            <BsFillCheckCircleFill size={20} style={{ color: "#6A8B3B" }} />
          ) : (
            <Box
              width="100%"
              height="100%"
              borderRadius="50%"
              border="2px solid #6A8B3B"
            ></Box>
          )}
        </Button>

        <Text
          as="p"
          fontSize="14px"
          lineHeight="19px"
          mr="auto"
          color="#F2F2F2"
          className={task.isCompleted ? "textCompleted" : "text"}
        >
          {task.title}
        </Text>
        <Button
          bg="none"
          border="none"
          color="#808080"
          cursor="pointer"
          onClick={() => onDelete(task.id)}
          // onClick={() => console.log("Task is deleted")}
        >
          <TbTrash size={20} />
        </Button>
      </Flex>
    </>
  );
}
