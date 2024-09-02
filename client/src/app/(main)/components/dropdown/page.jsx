'use client';
import React, { useState } from 'react';
import { Select, ColorInput, NumberInput, Paper, Title, Box, Code, Button } from '@mantine/core';

export default function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [buttonColor, setButtonColor] = useState('#228be6');
  const [dropdownWidth, setDropdownWidth] = useState(200);
  const [textColor, setTextColor] = useState('#ffffff');
  const [copied, setCopied] = useState(false);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const codeToCopy = `
<Select
  data={options}
  value={selectedOption}
  onChange={setSelectedOption}
  placeholder="Select an option"
  style={{ width: ${dropdownWidth}px }}
  styles={{
    root: { display: 'inline-block', width: '100%' },
    input: { backgroundColor: '${buttonColor}', color: '${textColor}' },
    dropdown: { borderRadius: '0.375rem', border: \`1px solid ${buttonColor}\` },
    item: { borderRadius: '0.375rem', '&:hover': { backgroundColor: '${buttonColor}', color: '${textColor}' } }
  }}
/>
  `;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide the notification after 2 seconds
    });
  };

  return (
    <Box p="xl" bg="gray.8" style={{ minHeight: '100vh' }}>
      <Title order={1} mb="lg" color="white">Mantine Dropdown Component</Title>

      {/* Dropdown Preview Section */}
      <Box mb="xl">
        <Paper p="lg" bg="dark.8" shadow="sm" radius="md">
          <Title order={4} mb="md">Dropdown Preview</Title>
          <Select
            data={options}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder="Select an option"
            style={{ width: dropdownWidth }}
            styles={{
              root: { display: 'inline-block', width: '100%' },
              input: { backgroundColor: buttonColor, color: textColor },
              dropdown: { borderRadius: '0.375rem', border: `1px solid ${buttonColor}` },
              item: { borderRadius: '0.375rem', '&:hover': { backgroundColor: buttonColor, color: textColor } }
            }}
          />
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
        <NumberInput
          label="Dropdown Width"
          value={dropdownWidth}
          onChange={setDropdownWidth}
          min={100}
          max={400}
          step={10}
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
{`<Select
  data={options}
  value={selectedOption}
  onChange={setSelectedOption}
  placeholder="Select an option"
  style={{ width: ${dropdownWidth}px }}
  styles={{
    root: { display: 'inline-block', width: '100%' },
    input: { backgroundColor: '${buttonColor}', color: '${textColor}' },
    dropdown: { borderRadius: '0.375rem', border: \`1px solid ${buttonColor}\` },
    item: { borderRadius: '0.375rem', '&:hover': { backgroundColor: '${buttonColor}', color: '${textColor}' } }
  }}
/>`}
        </Code>
      </Paper>
    </Box>
  );
}
