import { PropsWithChildren } from 'react';
import MainNavigation from './MainNavigation';

interface LayoutProps extends PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
