'use client'

import { useState } from 'react';
import { UnstyledButton, Tooltip, Title, rem } from '@mantine/core';
import {
  IconHome2,
  IconFingerprint,
  IconUser,
  IconSettings,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import classes from './DoubleNavbar.module.css';
import { MdContactPage } from "react-icons/md";

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home', route: '/' },
  { icon: MdContactPage , label: 'contact', route: '/contact' },
  { icon: IconUser, label: 'Account', route: '/account' },
  { icon: IconFingerprint, label: 'Security', route: '/security' },
  { icon: IconSettings, label: 'Settings', route: '/settings' },
];

const linksMockdata = [
  { label: 'Buttons', route: '/components/buttons' },
  { label: 'Card', route: '/components/card' },
  { label: 'Dropdown', route: '/components/dropdown' },
  { label: 'Modal', route: '/components/modal' },
  { label: 'Table', route: '/components/table' },
  { label: 'Tooltip', route: '/components/tooltip' },

];

export function DoubleNavbar() {
  const router = useRouter();
  const [active, setActive] = useState('Releases');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => {
          setActive(link.label);
          router.push(link.route);
        }}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <Link
      href={link.route}
      className={classes.link}
      data-active={router.pathname === link.route || undefined}
      key={link.label}
    >
      {link.label}
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {links}
        </div>
      </div>
    </nav>
  );
}