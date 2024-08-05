import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import * as classes from './styles';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Container from '../Container';

interface Props {
  path: string;
  className?: string;
  priority?: boolean;
  text: string;
  subtitle: string;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

// TODO: Use it for sections/pages with background instead using background property in CSS
export default function BackgroundSection({ priority, className, path, text, subtitle }: Props) {
  return (
    <div className={className}>
      <div css={classes.bgWrap}>
        <Image
          priority={priority}
          alt='background'
          src={path}
          placeholder='blur'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <Container>
        <div css={classes.body}>
          <div css={classes.content}>
            <Subtitle
              color='#fff'
              text={subtitle}
            />
            <Title
              color='#fff'
              text={text}
            />
          </div>

          <div
            role='presentation'
            onClick={handleClick}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Link
                underline='hover'
                color='inherit'
                href='/'>
                MUI
              </Link>
              <Link
                underline='hover'
                color='inherit'
                href='/material-ui/getting-started/installation/'>
                Core
              </Link>
              <Typography color='text.primary'>Breadcrumbs</Typography>
            </Breadcrumbs>
          </div>
        </div>
      </Container>
    </div>
  );
}

BackgroundSection.defaultProps = {
  className: null,
  priority: false,
};
