'use client'
import { Container, Title, Text, Image, Grid, Col, List, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react'; // Ensure this import matches the library version you're using

const AboutPage = () => {
  return (
    <Container size="lg" mt={40}>
      {/* Page Title */}
      <Title order={2} mb="lg" align="center">
        About Mantine Code Lab
      </Title>

      {/* Main Introduction Section */}
      <Text align="center" mb="xl" size="lg" color="dimmed">
        Mantine Code Lab is dedicated to providing top-notch resources and examples for developers
        looking to harness the power of Mantine UI. Our mission is to empower developers by offering
        easy-to-understand examples and comprehensive guides to help you build better user
        interfaces faster and with greater ease.
      </Text>

      {/* Image and Content Section */}
      <Grid gutter="xl" align="center">
        <Col span={12} md={6}>
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Mantine Code Lab"
            radius="md"
          />
        </Col>
        <Col span={12} md={6}>
          <Title order={3} mb="sm">
            Our Story
          </Title>
          <Text mb="md">
            Founded by a passionate team of developers, Mantine Code Lab started as a small project
            aimed at simplifying the development process for those using the Mantine UI framework.
            Over time, it has grown into a comprehensive resource center, offering tutorials,
            component examples, and more.
          </Text>

          <Title order={3} mb="sm">
            Our Mission
          </Title>
          <Text mb="md">
            At Mantine Code Lab, our mission is to:
          </Text>

          <List
            spacing="sm"
            size="md"
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>Provide high-quality, easy-to-follow tutorials and examples.</List.Item>
            <List.Item>Help developers build beautiful, responsive interfaces effortlessly.</List.Item>
            <List.Item>Continuously update our content to keep pace with the latest Mantine features.</List.Item>
          </List>
        </Col>
      </Grid>

      {/* Closing Statement */}
      <Container size="md" mt="xl">
        <Text align="center" size="lg">
          Join us on our journey as we explore the endless possibilities with Mantine UI. Whether
          you're a beginner or an experienced developer, Mantine Code Lab is here to support you
          every step of the way.
        </Text>
      </Container>
    </Container>
  );
}

export default AboutPage;
