import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Task from "./Task";

export default function Tasks({ tasks, onComplete, onDelete }) {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <Box
      as="section"
      width="full"
      maxW="736px"
      margin="0 auto"
      mt="90px"
      p="0 1rem"
    >
      <Flex as="header" align="center" justify="space-between" mb={6}>
        <Flex align="center" gap={2}>
          <Text as="p" color="#FFB955" fontSize="14px" fontWeight="700">
            Created tasks
          </Text>
          <Text
            as="span"
            bg="#333333"
            color="#D9D9D9"
            fontSize="12px"
            fontWeight="700"
            padding="3px 9px"
            borderRadius="70%"
          >
            {taskQuantity}
          </Text>
        </Flex>
        <Flex align="center" gap={2}>
          <Text as="p" color="#A37346" fontSize="14px" fontWeight="700">
            Completed tasks
          </Text>
          <Text
            as="span"
            bg="#333333"
            color="#D9D9D9"
            fontSize="12px"
            fontWeight="700"
            p="3px 9px"
            borderRadius="50%"
          >
            {completedTasks} of {taskQuantity}
          </Text>
        </Flex>
      </Flex>

      <Stack gap={3}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </Stack>
    </Box>
  );
}
