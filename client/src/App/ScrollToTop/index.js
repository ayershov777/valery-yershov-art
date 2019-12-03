import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// This takes advantage of the fact that Route will re-render when routing
// ScrollToTop component will unmount and re-mount for each page visit

function ScrollToTop({history}) {
  // console.log('test')
  useEffect(() => {
    const scroll = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => scroll();
  }, [history]); // I think watching history is redundant here but I'm not sure what the best practice is in this case
  return (null);
}

export default withRouter(ScrollToTop);
// export