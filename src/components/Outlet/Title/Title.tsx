import * as classes from './style';

interface ITitleProps {
  text: string;
  color: string;
  fontSize?: string;
}

export default function Title({ text, color, fontSize }: ITitleProps) {
  return (
    <h2
      style={{ color, fontSize }}
      css={classes.title}>
      {text}
    </h2>
  );
}

Title.defaultProps = {
  fontSize: null,
};
