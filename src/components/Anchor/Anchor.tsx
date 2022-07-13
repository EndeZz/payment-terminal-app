import Link from 'next/link';
import { FC } from 'react';
import { AnchorCustom } from './Anchor.styled';

interface AnchorProps {
  children: React.ReactNode;
  href: string;
}

export const Anchor: FC<
  AnchorProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  children,
  href,
  ...attrs
}) => (
  <Link href={href} passHref>
    <AnchorCustom {...attrs}>{children}</AnchorCustom>
  </Link>
);
