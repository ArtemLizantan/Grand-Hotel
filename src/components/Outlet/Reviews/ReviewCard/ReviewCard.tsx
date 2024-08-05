import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import * as classes from './styles';
import { Review } from '../reviewsData';

// TODO: Add sizes
const AVATAR_DIMENSIONS = {
  height: 79,
  width: 79,
};

export default function ReviewCard({ review, className }: { review: Review; className?: string }) {
  const { name, feedback, rating, path } = review;

  return (
    <div
      className={className}
      css={classes.slide}>
      <Image
        alt='avatar'
        height={AVATAR_DIMENSIONS.height}
        src={path}
        width={AVATAR_DIMENSIONS.width}
      />
      <div css={classes.wrap}>
        <Typography
          component='p'
          sx={{ mb: '8px' }}
          variant='h5'>
          {name}
        </Typography>
        <Typography
          css={classes.feedback}
          component='p'
          sx={{ mb: '16px' }}
          variant='body2'>
          {feedback}
        </Typography>
        <Rating
          id={name}
          css={classes.rating}
          name='read-only'
          value={rating}
          readOnly
        />
      </div>
    </div>
  );
}

ReviewCard.defaultProps = {
  className: null,
};
