'use client'
import React, { useState } from 'react';
import { Tooltip, ColorInput, TextInput, Paper, Title, Box, Code, Button, Notification } from '@mantine/core';

export default function TooltipPage() {
  const [tooltipText, setTooltipText] = useState('This is a tooltip');
  const [tooltipColor, setTooltipColor] = useState('#228be6');
  const [textColor, setTextColor] = useState('#ffffff');
  const [notificationOpen, setNotificationOpen] = useState(false);

  const codeSnippet = `
import { Tooltip } from '@mantine/core';

<Tooltip
  label="${tooltipText}"
  withArrow
  classNames={{
    tooltip: 'custom-tooltip',
    arrow: 'custom-tooltip-arrow',
  }}
  styles={{
    tooltip: {
      backgroundColor: '${tooltipColor}',
      color: '${textColor}',
    },
    arrow: {
      color: '${tooltipColor}',
    },
  }}
>
  <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
    Hover me
  </button>
</Tooltip>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
      .then(() => {
        setNotificationOpen(true);
        setTimeout(() => setNotificationOpen(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <Box p="xl" bg="gray.8" style={{ minHeight: '100vh' }}>
      <Title order={1} mb="lg" color="white">Mantine Tooltip Component</Title>

      {/* Tooltip Preview Section */}
      <Box mb="xl" className="flex justify-center items-center">
        <Tooltip
          label={tooltipText}
          withArrow
          classNames={{
            tooltip: 'custom-tooltip',
            arrow: 'custom-tooltip-arrow',
          }}
          styles={{
            tooltip: {
              backgroundColor: tooltipColor,
              color: textColor,
            },
            arrow: {
              color: tooltipColor,
            },
          }}
        >
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Hover me
          </button>
        </Tooltip>
      </Box>

      {/* Customization Options Section */}
      <Paper p="md" mb="xl" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Customization Options</Title>
        <ColorInput
          label="Tooltip Color"
          value={tooltipColor}
          onChange={setTooltipColor}
          mb="md"
          style={{ input: { borderColor: tooltipColor } }}
        />
        <ColorInput
          label="Text Color"
          value={textColor}
          onChange={setTextColor}
          mb="md"
          style={{ input: { borderColor: textColor } }}
        />
        <TextInput
          label="Tooltip Text"
          value={tooltipText}
          onChange={(e) => setTooltipText(e.currentTarget.value)}
          mb="md"
          style={{ input: { borderColor: textColor } }}
        />
      </Paper>

      {/* Code Snippet Section */}
      <Paper p="md" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Code Snippet</Title>
        <Box mb="md" className="relative">
          <Button onClick={handleCopy} color="blue">
            Copy to Clipboard
          </Button>
          {notificationOpen && (
            <Notification
              title="Copied!"
              onClose={() => setNotificationOpen(false)}
              style={{ position: 'absolute', top: '0', right: '0' }}
            >
              Code copied to clipboard!
            </Notification>
          )}
        </Box>
        <Code block>{codeSnippet}</Code>
      </Paper>
    </Box>
  );
}
