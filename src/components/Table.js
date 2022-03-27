import {
  Group,
  TextInput,
  Code,
  Button,
  Checkbox,
  CheckboxGroup,
} from "@mantine/core";
import { useForm, formList } from "@mantine/form";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GripVertical } from "tabler-icons-react";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

// icons
import { ImCheckmark } from "react-icons/im";

export default function Table({ type, title }) {
  if (!JSON.parse(localStorage.getItem(type))) {
    console.log("local is empytuy you dfumb");
    localStorage.setItem(
      type,
      JSON.stringify([{ name: "Start by changing me!", check: false }])
    );
  }
  let list = JSON.parse(localStorage.getItem(type));
  const form = useForm({
    initialValues: {
      goals: formList(list),
    },
  });

  const fields = form.values.goals.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (

        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <HStack width={"100%"}>
          <Center {...provided.dragHandleProps}>
            <GripVertical size={18} />
          </Center>
          <TextInput
            sx={{ width: "100%"}}
            placeholder={`A goal for your ${type} list`}
            {...form.getListInputProps("goals", index, "name")}
          />
          <Button
            size={""}
            p={"4px"}
            color={"green"}
            onClick={(e) => {
              form.removeListItem("goals", index);
              setClosedMax(form.values.goals.length > 7);
              console.log(closedMax);
            }}
          >
            <ImCheckmark color={"white"} size={"18px"}/>
          </Button></HStack>
        </Group>
      )}
    </Draggable>
  ));

  localStorage.setItem(type, JSON.stringify(form.values.goals));
  let len = JSON.parse(localStorage.getItem(type)).length;
  const [closedMax, setClosedMax] = useState(type==="closed" && len>=7);

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs"></Group>
      ) : (
        <Text color="dimmed" align="center">
          All done!
        </Text>
      )}

      <DragDropContext
        //THIS IS WHERE DROP DROP DROP DROP
        onDragEnd={({ destination, source }) => {
          form.reorderListItem("goals", {
            from: source.index,
            to: destination.index,
          });
          localStorage.setItem(type, JSON.stringify(form.values.goals));
        }}
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <>
              <Box {...provided.droppableProps} ref={provided.innerRef}>
                {fields}
                {provided.placeholder}
              </Box>
            </>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button
          onClick={() => {
            if (!closedMax) {
              form.addListItem("goals", { name: "", check: false });
            }
            setClosedMax(type==="closed"&&form.values.goals.length > 5);
            console.log(form.values.goals.length );
            console.log(closedMax);
          }}
          color= {closedMax && type==="closed" ? "red":"blue"}
        >
          {closedMax&&type==="closed" ? "Max Goals" : "Add Goal"}
        </Button>
      </Group>
    </Box>
  );
}
