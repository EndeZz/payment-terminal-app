import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const AnchorCustom = styled.a`
  font-size: 1.6rem;
  line-height: 2.2rem;
  border: 1px solid transparent;
  border: 0;
  background: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  gap: 6px;

  &:disabled {
    opacity: 0.4;
    /* pointer-events: none; */
    cursor: not-allowed;
  }
`;

interface AnchorProps {
  children: React.ReactNode;
  href: string;
}

const Anchor: FC<
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

export default Anchor;
