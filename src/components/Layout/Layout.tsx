import MainNavigation from './MainNavigation';

import classes from './Layout.module.scss';

function Layout(props: any) {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
