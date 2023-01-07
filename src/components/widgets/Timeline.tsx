import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { CopyrightStyles, Timeline } from 'react-ts-tradingview-widgets';

import { selectTheme } from '../../redux/theme/selectors';

const styles: CopyrightStyles = {
  parent: {
    display: 'none',
  },
};

const TwTimeline = memo(() => {
  const theme = useSelector(selectTheme);

  return (
    <Timeline
      feedMode="market"
      colorTheme={theme === 'dark' ? 'dark' : 'light'}
      isTransparent
      displayMode="regular"
      width="100%"
      height={320}
      locale="en"
      market="crypto"
      copyrightStyles={styles}
    />
  );
});

export default TwTimeline;
