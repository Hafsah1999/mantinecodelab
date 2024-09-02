'use client';
import React, { useState } from 'react';
import { Table, ColorInput, NumberInput, Paper, Title, Box, Code, Button } from '@mantine/core';

export default function TablePage() {
  const [headerBgColor, setHeaderBgColor] = useState('#228be6');
  const [rowBgColor, setRowBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [borderColor, setBorderColor] = useState('#cccccc');
  const [columnWidth, setColumnWidth] = useState(150);
  const [copied, setCopied] = useState(false);

  const tableData = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Sam Johnson', age: 45, occupation: 'Manager' },
  ];

  const codeToCopy = `
<Table>
  <thead style={{ backgroundColor: '${headerBgColor}', color: '${textColor}', borderColor: '${borderColor}' }}>
    <tr>
      <th style={{ width: ${columnWidth}px }}>ID</th>
      <th style={{ width: ${columnWidth}px }}>Name</th>
      <th style={{ width: ${columnWidth}px }}>Age</th>
      <th style={{ width: ${columnWidth}px }}>Occupation</th>
    </tr>
  </thead>
  <tbody style={{ backgroundColor: '${rowBgColor}', color: '${textColor}' }}>
    ${tableData.map(
      (row) => `<tr key={row.id}>
        <td style={{ borderColor: '${borderColor}' }}>${row.id}</td>
        <td style={{ borderColor: '${borderColor}' }}>${row.name}</td>
        <td style={{ borderColor: '${borderColor}' }}>${row.age}</td>
        <td style={{ borderColor: '${borderColor}' }}>${row.occupation}</td>
      </tr>`
    ).join('')}
  </tbody>
</Table>
`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide the notification after 2 seconds
    });
  };

  return (
    <Box p="xl" bg="gray.8" style={{ minHeight: '100vh' }}>
      <Title order={1} mb="lg" color="white">Mantine Table Component</Title>

      {/* Table Preview Section */}
      <Box mb="xl">
        <Paper p="lg" bg="dark.8" shadow="sm" radius="md">
          <Title order={4} mb="md">Table Preview</Title>
          <Table>
            <thead style={{ backgroundColor: headerBgColor, color: textColor }}>
              <tr>
                <th style={{ width: columnWidth }}>ID</th>
                <th style={{ width: columnWidth }}>Name</th>
                <th style={{ width: columnWidth }}>Age</th>
                <th style={{ width: columnWidth }}>Occupation</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: rowBgColor, color: textColor }}>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td style={{ borderColor }}>{row.id}</td>
                  <td style={{ borderColor }}>{row.name}</td>
                  <td style={{ borderColor }}>{row.age}</td>
                  <td style={{ borderColor }}>{row.occupation}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Box>

      {/* Customization Options Section */}
      <Paper p="md" mb="xl" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Customization Options</Title>
        <ColorInput
          label="Header Background Color"
          value={headerBgColor}
          onChange={setHeaderBgColor}
          mb="md"
          style={{ input: { borderColor: headerBgColor } }}
        />
        <ColorInput
          label="Row Background Color"
          value={rowBgColor}
          onChange={setRowBgColor}
          mb="md"
          style={{ input: { borderColor: rowBgColor } }}
        />
        <ColorInput
          label="Text Color"
          value={textColor}
          onChange={setTextColor}
          mb="md"
          style={{ input: { borderColor: textColor } }}
        />
        <ColorInput
          label="Border Color"
          value={borderColor}
          onChange={setBorderColor}
          mb="md"
          style={{ input: { borderColor: borderColor } }}
        />
        <NumberInput
          label="Column Width"
          value={columnWidth}
          onChange={setColumnWidth}
          min={100}
          max={300}
          step={10}
          mb="md"
          styles={{ input: { borderColor: borderColor } }}
        />
      </Paper>

      {/* Code Snippet Section */}
      <Paper p="md" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Code Snippet</Title>
        <Button onClick={handleCopyCode} color="blue" style={{ marginBottom: '1rem' }}>
          {copied ? 'Copied!' : 'Copy Code'}
        </Button>
        <Code block>
{`<Table>
  <thead style={{ backgroundColor: '${headerBgColor}', color: '${textColor}', borderColor: '${borderColor}' }}>
    <tr>
      <th style={{ width: ${columnWidth}px }}>ID</th>
      <th style={{ width: ${columnWidth}px }}>Name</th>
      <th style={{ width: ${columnWidth}px }}>Age</th>
      <th style={{ width: ${columnWidth}px }}>Occupation</th>
    </tr>
  </thead>
  <tbody style={{ backgroundColor: '${rowBgColor}', color: '${textColor}' }}>
    {tableData.map((row) => (
      <tr key={row.id}>
        <td style={{ borderColor: '${borderColor}' }}>{row.id}</td>
        <td style={{ borderColor: '${borderColor}' }}>{row.name}</td>
        <td style={{ borderColor: '${borderColor}' }}>{row.age}</td>
        <td style={{ borderColor: '${borderColor}' }}>{row.occupation}</td>
      </tr>
    ))}
  </tbody>
</Table>`}
        </Code>
      </Paper>
    </Box>
  );
}
