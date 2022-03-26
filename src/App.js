import logo from "./logo.svg";
import "./App.css";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { Group, TextInput,Code, Button,} from '@mantine/core';
import { useForm, formList } from '@mantine/form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

function Table(){
    const form = useForm({
    initialValues: {
      employees: formList([
        { name: 'John Doe', email: 'john@mantine.dev' },
        { name: 'Bill Love', email: 'bill@mantine.dev' },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev' },
        { name: 'Lim Notch', email: 'lim@mantine.dev' },
        { name: 'Susan Seven', email: 'susan@mantine.dev' },
      ]),
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
            placeholder="John Doe"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <TextInput
            placeholder="example@mail.com"
            {...form.getListInputProps('employees', index, 'email')}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
          <Text weight={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('employees', { from: source.index, to: destination.index })
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
        <Button onClick={() => form.addListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>

    </Box>
  );
}

function App() {
  return (
    <VStack >
      <Box >4K Weeks (replace with logo)</Box>
      <HStack>
        <BoxMultiple0>Closed list</Box>
        <Box>Open list</Box>
      </HStack>
      <VStack>
        <Box>Strategic Underachievement</Box>
        <HStack>
          <VStack>
            <Text>I will slack off in... </Text>
            <Text>...</Text>
          </VStack>
          <VStack>
            <Text>So I can succeed in...</Text>
            <Text>...</Text>
          </VStack>
        </HStack>
      </VStack>
    <Table />
    </VStack>
  );
}

export default App;
