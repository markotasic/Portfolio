import GlassSmall from './GlassSmall';

const Language = (props: any) => {
  return (
    <GlassSmall>
      <props.img />
      <p>{props.text}</p>
    </GlassSmall>
  );
};

export default Language;
