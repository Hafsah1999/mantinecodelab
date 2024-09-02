'use client'
import React, { useState } from 'react';
import { DoubleNavbar } from './(main)/Navbar';
import { Container, Title, Text, Button, Group, Image, Card, Grid, ThemeIcon, Center, Stepper, Avatar, useMantineTheme, Accordion, SimpleGrid, AppShell, Anchor } from '@mantine/core';
import classes from './HomePage.module.css'; // Make sure to create this CSS module
import { IconSettings, IconComponents, IconPalette } from '@tabler/icons-react';
import {  ActionIcon, Divider } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';


const data = [
  {
    icon: IconSettings,
    title: 'Customizable Components',
    description: 'Easily tailor each component to match your design and functionality needs.',
  },
  {
    icon: IconComponents,
    title: 'Extensive Component Library',
    description: 'Access a wide range of components designed for modern web development.',
  },
  {
    icon: IconPalette,
    title: 'Theming Support',
    description: 'Switch between light and dark themes to provide the best user experience.',
  },
];

const HomePage = () => {

  const items = data.map((item, index) => (
    <div className={classes.item} key={index}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <item.icon size={24} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  const theme = useMantineTheme();

  const testimonials = [
    {
      name: 'Amit Pathak',
      role: 'Frontend Developer',
      avatar: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid',
      testimonial: 'Mantine Code Lab has drastically improved my workflow. The customizable components save me so much time!',

    },
    {
      name: 'Alina Zehra',
      role: 'Full Stack Developer',
      avatar: 'https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png',
      testimonial: 'I love the flexibility and design of Mantine components. They integrate perfectly with my projects.',

    },
    {
      name: 'Shristi Gaur',
      role: 'UI/UX Designer',
      avatar: 'https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg',
      testimonial: 'The theming support is fantastic! Switching between light and dark modes has never been easier.',
    },

  ];

  const [active, setActive] = useState(0);

  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const features = [
    {
      icon: IconSettings,
      title: 'Customizable Components',
      description: 'Easily tailor each component to match your design and functionality needs.',
      background: 'https://wallpaper.dog/large/5438555.jpg'
    },
    {
      icon: IconComponents,
      title: 'Extensive Component Library',
      description: 'Access a wide range of components designed for modern web development.',
      background: 'https://wallpaper.dog/large/5438555.jpg'
    },
    {
      icon: IconPalette,
      title: 'Theming Support',
      description: 'Switch between light and dark themes to provide the best user experience.',
      background: 'https://wallpaper.dog/large/5438555.jpg'
    },
  ];
  // const theme = useMantineTheme();

  return (
    <>
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '300px', // Adjust this width to match your DoubleNavbar width
        zIndex: 1000
      }}>
        <DoubleNavbar />
      </div>
      <main style={{
        marginLeft: '300px', // Should match the width of the sidebar
        padding: '20px',
        flexGrow: 1,
        backgroundColor: '#00000', // Light gray background, adjust as needed
      }}>

        {/* Section1 */}
        <Container size="xl" py="xl" style={{ textAlign: 'center' }}>
          <Title order={1} align="center" className={classes.title} color="blue" mt="md" size="h1">
            Welcome to Mantine Code Lab
          </Title>
          <Text align="center" className={classes.description} size="lg" mt="md">
            Explore the best components for building modern, responsive, and beautiful web applications. <br />
            Mantine Code Lab provides a collection of customizable Mantine components for your web projects. Easily integrate and style these components to match your unique design needs and build modern, responsive applications.
          </Text>

          <Image
            src="mantinehead.png" // Replace with your image URL
            alt="Hero Image"
            fit="cover"
            mt="xl"
          />

          {/* <Group position="center" mt="xl">
        <Button size="lg" variant="filled" color="blue">
          Get Started
        </Button>
        <Button size="lg" variant="outline" color="blue">
          Learn More
        </Button>
      </Group> */}
        </Container>



        {/* Section 2 */}
        <Container size="xl" className={classes.wrapper}>
          <Text className={classes.supTitle}>Key Features</Text>

          <Title className={classes.title} order={2}>
            Explore Our <span className={classes.highlight}>Features</span>
          </Title>

          <Container size="xl" p={0}>
            <Text c="dimmed" className={classes.description}>
              Discover the powerful features that make our component library exceptional. Customize, integrate, and enjoy a seamless development experience.
            </Text>
          </Container>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={50} mt={30}>
            {items}
          </SimpleGrid>
        </Container>

        {/* section3 */}
        <Container size="xl" py="xl">
          <Title align="center" mb="lg">
            How It Works
          </Title>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="Step 1" description="Select a Component">
              <Text align="center" mt="md">
                Browse through our extensive library and choose the Mantine component you want to use.
              </Text>
            </Stepper.Step>
            <Stepper.Step label="Step 2" description="Customize the Component">
              <Text align="center" mt="md">
                Tailor the component to your needs using our customization options.
              </Text>
            </Stepper.Step>
            <Stepper.Step label="Step 3" description="Integrate into Your Project">
              <Text align="center" mt="md">
                Copy the code and integrate the customized component into your web project seamlessly.
              </Text>
            </Stepper.Step>
            <Stepper.Completed>
              <Text align="center" mt="md">
                Congratulations! You are now ready to use Mantine components in your project. Get started with the first component!
              </Text>
            </Stepper.Completed>
          </Stepper>

          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Previous
            </Button>
            <Button onClick={nextStep}>Next</Button>
          </Group>
        </Container>

        {/* section4 */}

        <Container size="xl" py="xl">
          <Title align="center" mb="lg" color={theme.colors.blue[6]}>
            What Our Users Say
          </Title>
          <Grid gutter="xl">
            {testimonials.map((testimonial, index) => (

              <Grid.Col span={4}>
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{
                    backgroundImage: `url(${testimonial.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    border: `1px solid ${theme.colors.gray[3]}`,
                    color: theme.colors.gray[0],
                  }}
                >
                  <Group align="center" position="center" mt="md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', padding: '10px' }}>
                    <Avatar src={testimonial.avatar} radius="xl" size="lg" />
                    <div>
                      <Text weight={700} color={theme.colors.dark[7]}>
                        {testimonial.name}
                      </Text>
                      <Text size="sm" color="dimmed">
                        {testimonial.role}
                      </Text>
                    </div>
                  </Group>
                  <Text mt="md" align="center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px' }}>
                    "{testimonial.testimonial}"
                  </Text>
                </Card>
              </Grid.Col>



            ))}
          </Grid>
        </Container>


        <div className={classes.wrapper}>
          <Container size="lg">
            <Grid id="faq-grid" gutter={50}>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Image src="https://i.pinimg.com/564x/da/aa/9f/daaa9f2b825931454a2489682a2d1483.jpg" alt="Frequently Asked Questions" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Title order={2} ta="left" className={classes.title}>
                  Frequently Asked Questions
                </Title>

                <Accordion chevronPosition="right" defaultValue="getting-started" variant="separated">
                  <Accordion.Item className={classes.item} value="getting-started">
                    <Accordion.Control>How do I get started with Mantine Code Lab?</Accordion.Control>
                    <Accordion.Panel>
                      To get started, simply browse our library of components, choose what you need, and follow our integration guide for seamless inclusion into your projects. Visit our [Getting Started](#) page for detailed instructions.
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item className={classes.item} value="customization">
                    <Accordion.Control>How can I customize Mantine components?</Accordion.Control>
                    <Accordion.Panel>
                      Mantine components are highly customizable. You can adjust styles, themes, and functionality using our extensive API. Check out our [Customization Guide](#) for more information.
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item className={classes.item} value="integration">
                    <Accordion.Control>Can I integrate Mantine components into existing projects?</Accordion.Control>
                    <Accordion.Panel>
                      Yes, Mantine components are designed to integrate seamlessly into both new and existing projects. Refer to our [Integration Documentation](#) to ensure a smooth implementation.
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item className={classes.item} value="support">
                    <Accordion.Control>Where can I get support if I encounter issues?</Accordion.Control>
                    <Accordion.Panel>
                      For support, you can visit our [Support Center](#) or join our community forum where you can ask questions and get help from other developers. We also provide direct support for premium users.
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
      </main>

    
      
    </div>
      <footer style={{ backgroundColor: '#1A1B1E', padding: '40px 0' , marginLeft: '300px', // Should match the width of the sidebar
        padding: '20px',
        flexGrow: 1,
        backgroundColor: '#00000',  }}>
      <Container size="lg">
        <Grid justify="space-between" align="center">
          {/* Left Side: Logo and Description */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Text color="white" size="xl" weight={700}>
              Mantine Code Lab
            </Text>
            <Text color="white" size="sm" mt="sm">
              Discover the best Mantine components for your projects and learn how to use them effectively.
            </Text>
          </Grid.Col>

          {/* Middle: Navigation Links */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group position="center" spacing="xl">
              <Text color="white" size="sm">Home</Text>
              <Text color="white" size="sm">Components</Text>
              <Text color="white" size="sm">Blog</Text>
              <Text color="white" size="sm">Contact</Text>
            </Group>
          </Grid.Col>

          {/* Right Side: Social Media Icons */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group position="center" spacing="xs">
              <ActionIcon variant="filled" color="white" size="lg" radius="xl">
                <IconBrandFacebook size={20} />
              </ActionIcon>
              <ActionIcon variant="filled" color="white" size="lg" radius="xl">
                <IconBrandTwitter size={20} />
              </ActionIcon>
              <ActionIcon variant="filled" color="white" size="lg" radius="xl">
                <IconBrandInstagram size={20} />
              </ActionIcon>
              <ActionIcon variant="filled" color="white" size="lg" radius="xl">
                <IconBrandLinkedin size={20} />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>

        {/* Divider and Copyright Information */}
        <Divider my="xl" color="white" />
        <Text color="white" size="xs" align="center">
          © 2024 Mantine Code Lab. All rights reserved.
        </Text>
      </Container>
    </footer>
    </>
  
  );
};

export default HomePage;