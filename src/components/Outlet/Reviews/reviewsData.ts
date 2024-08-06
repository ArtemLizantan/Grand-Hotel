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
        'GrandHotel promised luxury, but delivered limited options and unclear pricing. The search function needs improvement.',
      rating: 5,
      path: 'images/content/rew1.png',
    },
    {
      name: 'Kate',
      feedback:
        'Beautiful hotel photos, but GrandHotel fell short on practical features. No filters for budget or amenities. Disappointing.',
      rating: 5,
      path: 'images/content/rew2.png',
    },
    {
      name: 'Elizabeth',
      feedback:
        'GrandHotel has potential, but needs to focus on user experience. More detailed hotel information and better search options are essential.',
      rating: 5,
      path: 'images/content/rew3.png',
    },
  ],
};
