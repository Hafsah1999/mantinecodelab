'use client';
import React, { useState } from 'react';
import { Button, ColorInput, NumberInput, Paper, Title, Box, Code } from '@mantine/core';

export default function ButtonPage() {
  const [buttonColor, setButtonColor] = useState('#228be6');
  const [hoverColor, setHoverColor] = useState('#1d72b8'); // State for hover color
  const [buttonWidth, setButtonWidth] = useState(200);
  const [buttonHeight, setButtonHeight] = useState(50); // Added state for button height
  const [textColor, setTextColor] = useState('#ffffff');
  const [copied, setCopied] = useState(false);

  const codeToCopy = `
<Button
  style={{
    backgroundColor: '${buttonColor}',
    color: '${textColor}',
    width: ${buttonWidth}px,
    height: ${buttonHeight}px,
    borderRadius: '0.375rem',
    border: 'none',
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    textAlign: 'center'
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '${hoverColor}'}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '${buttonColor}'}
>
  Sample Button
</Button>
  `;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide the notification after 2 seconds
    });
  };

  return (
    <Box p="xl" bg="gray.8" style={{ minHeight: '100vh' }}>
      <Title order={1} mb="lg" color="white">Mantine Button Component</Title>

      {/* Button Preview Section */}
      <Box mb="xl">
        <Paper p="lg" bg="dark.8" shadow="sm" radius="md">
          <Title order={4} mb="md">Button Preview</Title>
          <Box p="md" bg="dark.8" radius="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button
              style={{
                backgroundColor: buttonColor,
                color: textColor,
                width: buttonWidth,
                height: buttonHeight, // Apply button height
                borderRadius: '0.375rem',
                border: 'none',
                padding: '0.5rem 1rem',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonColor}
            >
              Sample Button
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Customization Options Section */}
      <Paper p="md" mb="xl" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Customization Options</Title>
        <ColorInput
          label="Button Color"
          value={buttonColor}
          onChange={setButtonColor}
          mb="md"
          style={{ input: { borderColor: buttonColor } }}
        />
        <ColorInput
          label="Hover Color"
          value={hoverColor}
          onChange={setHoverColor}
          mb="md"
          style={{ input: { borderColor: hoverColor } }}
        />
        <NumberInput
          label="Button Width"
          value={buttonWidth}
          onChange={setButtonWidth}
          min={100}
          max={400}
          step={10}
          mb="md"
          styles={{ input: { borderColor: buttonColor } }}
        />
        <NumberInput
          label="Button Height"
          value={buttonHeight}
          onChange={setButtonHeight}
          min={30}
          max={100}
          step={5}
          mb="md"
          styles={{ input: { borderColor: buttonColor } }}
        />
        <ColorInput
          label="Text Color"
          value={textColor}
          onChange={setTextColor}
          mb="md"
          style={{ input: { borderColor: textColor } }}
        />
      </Paper>

      {/* Code Snippet Section */}
      <Paper p="md" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Code Snippet</Title>
        <Button onClick={handleCopyCode} color="blue" style={{ marginBottom: '1rem' }}>
          {copied ? 'Copied!' : 'Copy Code'}
        </Button>
        <Code block>
{`<Button
  style={{
    backgroundColor: '${buttonColor}',
    color: '${textColor}',
    width: ${buttonWidth}px,
    height: ${buttonHeight}px,
    borderRadius: '0.375rem',
    border: 'none',
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    textAlign: 'center'
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '${hoverColor}'}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '${buttonColor}'}
>
  Sample Button
</Button>`}
        </Code>
      </Paper>
    </Box>
  );
}
