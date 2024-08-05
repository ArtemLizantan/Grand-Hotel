import * as classes from './style';

interface ISubtitleProps {
  text: string;
  color: string;
}

export default function Subtitle({ text, color }: ISubtitleProps) {
  return (
    <h2
      style={{ color }}
      css={classes.subtitle}>
      {text}
    </h2>
  );
}
