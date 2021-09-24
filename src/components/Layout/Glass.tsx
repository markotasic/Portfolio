import classes from './Glass.module.scss';

function Layout(props: any) {
  return <div className={classes.glass}>{props.children}</div>;
}

export default Layout;
