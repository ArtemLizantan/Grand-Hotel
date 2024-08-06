import * as classes from './style';

interface ISubtitleProps {
  text: string;
  color: string;
  fontSize?: string;
}

export default function Subtitle({ text, color, fontSize }: ISubtitleProps) {
  return (
    <h4
      style={{ color, fontSize }}
      css={classes.subtitle}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}


Subtitle.defaultProps = {
  fontSize: null,
};
