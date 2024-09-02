'use client';
import React, { useState } from 'react';
import { Modal, Button, ColorInput, NumberInput, Paper, Title, Box, Code } from '@mantine/core';

export default function ModalPage() {
  const [opened, setOpened] = useState(false);
  const [modalColor, setModalColor] = useState('#228be6');
  const [modalWidth, setModalWidth] = useState(300);
  const [modalTextColor, setModalTextColor] = useState('#ffffff');
  const [copied, setCopied] = useState(false);

  const codeToCopy = `
<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  styles={{ 
    modal: { 
      backgroundColor: '${modalColor}', 
      color: '${modalTextColor}', 
      width: ${modalWidth}px 
    }
  }}
>
  <Title order={4}>Modal Title</Title>
  <Button onClick={() => setOpened(false)}>Close</Button>
</Modal>
  `;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide the notification after 2 seconds
    });
  };

  return (
    <Box p="xl" bg="gray.8" style={{ minHeight: '100vh' }}>
      <Title order={1} mb="lg" color="white">Mantine Modal Component</Title>

      {/* Modal Preview Section */}
      <Box mb="xl">
        <Paper p="lg" bg="dark.8" shadow="sm" radius="md">
          <Title order={4} mb="md">Modal Preview</Title>
          <Button onClick={() => setOpened(true)} style={{ marginBottom: '1rem' }}>
            Open Modal
          </Button>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            styles={{
              modal: {
                backgroundColor: modalColor,
                color: modalTextColor,
                width: modalWidth,
                padding: '1rem'
              },
              title: {
                color: modalTextColor
              }
            }}
          >
            <Title order={4}>Modal Title</Title>
            <Button onClick={() => setOpened(false)} style={{ marginTop: '1rem' }}>Close</Button>
          </Modal>
        </Paper>
      </Box>

      {/* Customization Options Section */}
      <Paper p="md" mb="xl" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Customization Options</Title>
        <ColorInput
          label="Modal Background Color"
          value={modalColor}
          onChange={setModalColor}
          mb="md"
          style={{ input: { borderColor: modalColor } }}
        />
        <NumberInput
          label="Modal Width"
          value={modalWidth}
          onChange={setModalWidth}
          min={200}
          max={800}
          step={10}
          mb="md"
          styles={{ input: { borderColor: modalColor } }}
        />
        <ColorInput
          label="Text Color"
          value={modalTextColor}
          onChange={setModalTextColor}
          mb="md"
          style={{ input: { borderColor: modalTextColor } }}
        />
      </Paper>

      {/* Code Snippet Section */}
      <Paper p="md" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Code Snippet</Title>
        <Button onClick={handleCopyCode} color="blue" style={{ marginBottom: '1rem' }}>
          {copied ? 'Copied!' : 'Copy Code'}
        </Button>
        <Code block>
{`<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  styles={{ 
    modal: { 
      backgroundColor: '${modalColor}', 
      color: '${modalTextColor}', 
      width: ${modalWidth}px 
    }
  }}
>
  <Title order={4}>Modal Title</Title>
  <Button onClick={() => setOpened(false)}>Close</Button>
</Modal>`}
        </Code>
      </Paper>
    </Box>
  );
}
