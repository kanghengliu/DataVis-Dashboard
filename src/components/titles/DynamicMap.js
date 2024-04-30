// DynamicMoviesMap.jsx
import dynamic from 'next/dynamic';

const DynamicMoviesMap = dynamic(() => import('./map'), {
  ssr: false,
});

export default DynamicMoviesMap;
