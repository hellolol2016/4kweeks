import { Group, TextInput, Code, Button } from "@mantine/core";
import { useForm, formList } from "@mantine/form";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GripVertical } from "tabler-icons-react";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";

export default function Table({ type }) {
  localStorage.setItem(
    "closed",
    JSON.stringify([
      { name: "John Doe", email: "john@mantine.dev" },
      { name: "Bill Love", email: "bill@mantine.dev" },
      { name: "Nancy Eagle", email: "nanacy@mantine.dev" },
      { name: "Lim Notch", email: "lim@mantine.dev" },
      { name: "Susan Seven", email: "susan@mantine.dev" },
    ])
  );
    console.log(JSON.parse(localStorage.getItem("closed")));
  let list = JSON.parse(localStorage.getItem(type));
  console.log(list);
  const form = useForm({
    initialValues: {
      employees: formList(list),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <GripVertical size={18} />
          </Center>
          <TextInput
            sx={{ width: "20vw" }}
            placeholder={`A goal for your ${type} list`}
            {...form.getListInputProps("employees", index, "name")}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500}>Name</Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      <DragDropContext
        onDragEnd={({ destination, source }) =>
          {form.reorderListItem("employees", {
            from: source.index,
            to: destination.index,
          })
          localStorage.setItem("closed",list);
        console.log("changed local");
        }
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button
          onClick={() => form.addListItem("employees", { name: "", email: "" })}
        >
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}
