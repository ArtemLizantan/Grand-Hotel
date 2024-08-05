export interface Review {
  name: string;
  feedback: string;
  rating: number;
  path: string;
}

export interface Reviews {
  content: {
    title: string;
  };
  reviews: Review[];
}

// TODO: Fill out your data
export const reviews: Reviews = {
  content: {
    title: 'Reviews',
  },
  reviews: [
    {
      name: 'Anna',
      feedback:
        'Uncover Amazing Hotel Deals at Grand Hotel! The stay was incredible, with luxurious rooms and top-notch service. Highly recommended!',
      rating: 5,
      path: 'images/content/rew1.png',
    },
    {
      name: 'Kate',
      feedback:
        'Staying at Grand Hotel was a fantastic experience! Amazing deals, excellent amenities, and friendly staff. Will definitely return!',
      rating: 5,
      path: 'images/content/rew2.png',
    },
    {
      name: 'Elizabeth',
      feedback:
        'Grand Hotel offers unparalleled comfort and value! The best hotel deal I’ve found, with exceptional service and beautiful surroundings.',
      rating: 5,
      path: 'images/content/rew3.png',
    },
  ],
};
