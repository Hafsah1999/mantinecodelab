'use client'
import {
    Container,
    Title,
    Text,
    Grid,
    Group,
    Switch,
    Select,
    Button,
    Divider,
    TextInput,
    PasswordInput,
  } from '@mantine/core';
  
  const  Settings = () => {
    return (
      <Container size="sm" mt={40}>
        {/* Page Title */}
        <Title order={2} mb="xl">
          Settings
        </Title>
  
        {/* Account Settings Section */}
        <Title order={4} mb="sm">
          Account Settings
        </Title>
        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          mb="md"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Enter new password"
          mb="md"
          required
        />
        <Button variant="outline" mb="xl">
          Save Changes
        </Button>
  
        <Divider my="lg" />
  
        {/* Appearance Section */}
        <Title order={4} mb="sm">
          Appearance
        </Title>
        <Select
          label="Theme"
          placeholder="Select theme"
          data={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'system', label: 'System Default' },
          ]}
          mb="md"
        />
        <Button variant="outline" mb="xl">
          Save Appearance
        </Button>
  
        <Divider my="lg" />
  
        {/* Notifications Section */}
        <Title order={4} mb="sm">
          Notifications
        </Title>
        <Grid>
          <Grid.Col span={12}>
            <Group position="apart" mb="sm">
              <Text>Email Notifications</Text>
              <Switch size="md" />
            </Group>
            <Group position="apart" mb="sm">
              <Text>Push Notifications</Text>
              <Switch size="md" />
            </Group>
            <Group position="apart" mb="sm">
              <Text>Weekly Reports</Text>
              <Switch size="md" />
            </Group>
          </Grid.Col>
        </Grid>
        <Button variant="outline">Save Notifications</Button>
      </Container>
    );
  }
  export default Settings;  