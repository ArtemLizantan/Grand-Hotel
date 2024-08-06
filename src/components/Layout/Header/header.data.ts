import { ROUTER } from '@/routes';

interface SubNavItem {
  idItem: number;
  nameItem: string;
  pathItem: string;
}

interface NavItem {
  id: number;
  name: string;
  path?: URL | string;
  items?: SubNavItem[] | undefined;
}

interface HeaderData {
  nav: NavItem[];
}

export const headerData: HeaderData = {
  nav: [
    {
      id: 1,
      name: 'Home ',
      path: ROUTER.HOME,
    },

    {
      id: 4,
      name: 'ABOUT US',
      path: ROUTER.ABOUT_US,
    },

    {
      id: 3,
      name: 'DESTINATIONS',
      items: [
        {
          idItem: 1,
          nameItem: 'USA',
          pathItem: '/usa',
        },
        {
          idItem: 2,
          nameItem: 'FRANCE',
          pathItem: '/france',
        },
        {
          idItem: 3,
          nameItem: 'HUNGARY',
          pathItem: '/hungary',
        },
      ],
    },
    {
      id: 5,
      name: 'PAGES',
      path: ROUTER.PAGES,
      items: [
        {
          idItem: 1,
          nameItem: 'Cookies',
          pathItem: '/cookies',
        },
        {
          idItem: 2,
          nameItem: 'Privacy Policy',
          pathItem: '/privacy-policy',
        },
        {
          idItem: 3,
          nameItem: 'Terms and Conditions',
          pathItem: '/terms-and-conditions',
        },
      ],
    },
    {
      id: 2,
      name: 'Contacts',
      path: ROUTER.CONTACTS,
    },
  ],
};
