'use client';
import React, { useState } from 'react';
import { Card, ColorInput, NumberInput, Paper, Title, Box, Code, Text } from '@mantine/core';

export default function CardPage() {
  const [cardColor, setCardColor] = useState('#228be6');
  const [cardWidth, setCardWidth] = useState(300);
  const [textColor, setTextColor] = useState('#fffff');
  const [cardPadding, setCardPadding] = useState(20); // Added state for card padding

  return (
    <Box p="xl" bg="gray.8" style={{ minHeight: '100vh' }}>
      <Title order={1} mb="lg" color="white">Mantine Card Component</Title>

      {/* Card Preview Section */}
      <Box mb="xl">
        <Paper p="lg" bg="dark.8" shadow="sm" radius="md">
          <Title order={4} mb="md">Card Preview</Title>
          <Box p="md" bg="dark.8" radius="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card
              style={{
                backgroundColor: cardColor,
                width: cardWidth,
                padding: cardPadding,
                borderRadius: '0.375rem',
                border: 'none',
              }}
            >
              <Title order={4} style={{ color: textColor }}>Card Title</Title>
              <Text style={{ color: textColor }}>This is a sample card component. Customize it as you like!</Text>
            </Card>
          </Box>
        </Paper>
      </Box>

      {/* Customization Options Section */}
      <Paper p="md" mb="xl" bg="dark.8" shadow="sm" radius="md">
        <Title order={2} mb="md" color="white">Customization Options</Title>
        <ColorInput
          label="Card Background Color"
          value={cardColor}
          onChange={setCardColor}
          mb="md"
          style={{ input: { borderColor: cardColor } }}
        />
        <NumberInput
          label="Card Width"
          value={cardWidth}
          onChange={setCardWidth}
          min={200}
          max={600}
          step={10}
          mb="md"
          styles={{ input: { borderColor: cardColor } }}
        />
        <NumberInput
          label="Card Padding"
          value={cardPadding}
          onChange={setCardPadding}
          min={10}
          max={50}
          step={5}
          mb="md"
          styles={{ input: { borderColor: cardColor } }}
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
        <Code block>
{`<Card
  style={{
    backgroundColor: '${cardColor}',
    width: ${cardWidth}px,
    padding: ${cardPadding}px,
    borderRadius: '0.375rem',
    border: 'none',
  }}
>
  <Title order={4} style={{ color: '${textColor}' }}>Card Title</Title>
  <Text style={{ color: '${textColor}' }}>This is a sample card component. Customize it as you like!</Text>
</Card>`}
        </Code>
      </Paper>
    </Box>
  );
}
