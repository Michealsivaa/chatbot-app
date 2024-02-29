import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useStyles from './styles';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log('location',location.pathname)
  const {
    breadcrumbStyle
} = useStyles();

  return (
    <div className={breadcrumbStyle}>
      <div>You are in</div>
      <NavigateNextIcon />
      <Link to="/">Home</Link>
      <NavigateNextIcon />
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <div key={name}>
            {isLast ? (
              <span>{name}</span>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;