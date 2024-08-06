/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import * as classes from './style'; // Импортируйте стили

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Если страница уже загружена
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);

      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    loading && (
      <div css={classes.spinnerWrap}>
        <div css={classes.customLoader} />
      </div>
    )
  );
}
