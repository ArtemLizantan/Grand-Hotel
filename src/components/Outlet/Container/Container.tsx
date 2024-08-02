import { ReactNode } from 'react';
import * as classes from './styles';

interface ContainerProps {
  children: ReactNode;
}

// TODO: Add a container to blocks inside a section
export default function Container({ children }: ContainerProps) {
  return <div css={classes.container}>{children}</div>;
}
