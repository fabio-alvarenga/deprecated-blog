import { ReactChild, ReactChildren } from 'react';
import Header from '../Header';
import { Container } from './styles';

interface AuxProps {
  children: ReactChild | ReactChildren;
  home: boolean;
}

export default function Layout({ children, home }: AuxProps): JSX.Element {
  return (
    <Container>
      {home && <Header />}
      {children}
    </Container>
  );
}
