import * as classes from './style';

interface ITitleProps {
  text: string;
  color: string;
}

export default function Title({ text, color }: ITitleProps) {
  return (
    <h2
      style={{ color }}
      css={classes.title}>
      {text}
    </h2>
  );
}
