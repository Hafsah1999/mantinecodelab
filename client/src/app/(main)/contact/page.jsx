import {
  Container,
  Title,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Card,
  Text,
} from '@mantine/core';

const Contact = () => {
  return (
    <Container size="md" mt={40}>
      {/* Page Title */}
      <Title order={2} mb="xl" align="center">
        Contact Us
      </Title>

      {/* Contact Information Section */}
      <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Card shadow="sm" padding="lg" radius="md">
          <Text weight={500} size="lg">
            Email
          </Text>
          <Text color="dimmed">contact@mantinecodelab.com</Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Text weight={500} size="lg">
            Phone
          </Text>
          <Text color="dimmed">+1 (123) 456-7890</Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Text weight={500} size="lg">
            Address
          </Text>
          <Text color="dimmed">
            1234 Street Name, City, State, 12345
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Text weight={500} size="lg">
            Social Media
          </Text>
          <Text color="dimmed">@mantinecodelab on all platforms</Text>
        </Card>
      </SimpleGrid>

      {/* Contact Form Section */}
      <Container size="sm" mt="xl">
        <form>
          <TextInput
            label="Your Name"
            placeholder="John Doe"
            size="md"
            required
            mb="md"
          />
          <TextInput
            label="Your Email"
            placeholder="john.doe@example.com"
            size="md"
            required
            mb="md"
            type="email"
          />
          <TextInput
            label="Subject"
            placeholder="Subject of your inquiry"
            size="md"
            required
            mb="md"
          />
          <Textarea
            label="Your Message"
            placeholder="Type your message here..."
            size="md"
            required
            minRows={4}
            mb="md"
          />
          <Group position="right">
            <Button type="submit" size="md">
              Send Message
            </Button>
          </Group>
        </form>
      </Container>
    </Container>
  );
}
 export default Contact