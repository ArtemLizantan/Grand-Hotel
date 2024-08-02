import { ROUTER } from '@/routes';

interface SubNavItem {
  idItem: number;
  nameItem: string;
  pathItem: string;
}

interface NavItem {
  id: number;
  name: string;
  path?: string;
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
      id: 2,
      name: 'Contacts',
      path: ROUTER.CONTACTS,
    },
    {
      id: 3,
      name: 'DESTINATIONS',
      items: [
        {
          idItem: 1,
          nameItem: 'ITALY',
          pathItem: '/page/1',
        },
        {
          idItem: 2,
          nameItem: 'FRANCE',
          pathItem: '/page/1',
        },
        {
          idItem: 3,
          nameItem: 'HUNGARY',
          pathItem: '/page/1',
        },
      ],
    },
    {
      id: 4,
      name: 'ABOUT US',
      path: ROUTER.ABOUT_US,
    },
    {
      id: 5,
      name: 'Pages',
      path: ROUTER.PAGES,
    },
  ],
};
