import classes from './Glass.module.scss';

const Layout = (props: any) => {
  return <div className={classes.glass}>{props.children}</div>;
};

export default Layout;
