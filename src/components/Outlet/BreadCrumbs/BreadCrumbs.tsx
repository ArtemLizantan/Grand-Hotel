import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { pathName } from './breadCrumbsData';
import * as classes from './styles';

interface Props {
  activeClasses?: string;
  capitalizeLinks?: boolean;
  containerClasses?: string;
  homeElement?: React.ReactElement;
  itemClasses?: string;
  listClasses?: string;
  separator?: string;
}

const pathTitleMapping = pathName;

const getTitleFromPath = (path: string, capitalizeLinks: boolean) => {
  const title = pathTitleMapping[path];
  if (title) {
    return title;
  }

  return capitalizeLinks ? path.charAt(0).toUpperCase() + path.slice(1) : path;
};

export default function BreadCrumbs(): React.ReactElement {
  const {
    separator = <ArrowRightRoundedIcon />,
    homeElement = <span>Home</span>,
    capitalizeLinks = false,
  } = {} as Props;

  const router = useRouter();
  const { asPath } = router;
  const [breadcrumbTrail, setBreadcrumbTrail] = useState<{ href: string; text: string }[]>([]);

  useEffect(() => {
    const storedTrail = getCookie('breadcrumbTrail');
    if (storedTrail) {
      const parsedTrail = JSON.parse(storedTrail) as {
        href: string;
        text: string;
      }[];
      setBreadcrumbTrail(parsedTrail);
    }
  }, []);

  useEffect(() => {
    const asPathNestedRoutes = asPath
      .replace(/\/$/, '')
      .split('/')
      .filter((v) => v.length > 0);

    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      const href = `/${asPathNestedRoutes.slice(0, idx + 1).join('/')}`;
      const text = getTitleFromPath(subpath, capitalizeLinks);

      return { href, text };
    });

    setBreadcrumbTrail(crumbList);

    setCookie('breadcrumbTrail', JSON.stringify(crumbList));
  }, [asPath, capitalizeLinks]);

  const handleBreadcrumbClick = (href: string) => {
    setBreadcrumbTrail((prevTrail) => prevTrail.filter((crumb) => crumb.href <= href));
  };

  if (asPath === '/') {
    return <div />;
  }

  return (
    <nav css={classes.breadcrumbContainer}>
      <ol css={classes.breadcrumbList}>
        <li css={classes.breadcrumbItem}>
          <Link
            css={classes.breadcrumbLink}
            href='/'
            onClick={() => handleBreadcrumbClick('/')}>
            {homeElement}{' '}
            <svg
              width='10'
              height='16'
              viewBox='0 0 10 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.015625 13.1677L5.9843 7.99363L0.015625 2.81958L1.20936 0.749962L9.56551 7.99363L1.20936 15.2373L0.015625 13.1677Z'
                fill='white'
              />
            </svg>{' '}
            &nbsp;
          </Link>
        </li>

        {breadcrumbTrail.map((crumb, idx) => (
          <li
            key={crumb.href}
            css={classes.breadcrumbItem}>
            {idx > 0 && <span>{separator}</span>}
            <Link
              css={classes.breadcrumbLink}
              href={crumb.href}
              onClick={() => handleBreadcrumbClick(crumb.href)}>
              {crumb.text.charAt(0).toUpperCase() + crumb.text.slice(1)}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
