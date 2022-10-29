import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { localStorageKeys } from '../../constants';
import { toggleTheme } from '../../redux/theme/slice';
import { selectTheme } from '../../redux/theme/selectors';

export const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (theme === 'dark') {
      localStorage.setItem(localStorageKeys.MORPHEX_THEME, 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem(localStorageKeys.MORPHEX_THEME, 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    dispatch(
      toggleTheme(theme === 'dark' ? { value: 'light' } : { value: 'dark' })
    );
  };

  return (
    <div className="theme-switch flex mr-1">
      {theme === 'light' ? (
        <Image
          src="/images/icons/dark-mode.png"
          alt="Dark Mode"
          width={25}
          height={25}
          onClick={handleThemeSwitch}
        />
      ) : (
        <Image
          src="/images/icons/light-mode-white-fill.png"
          alt="Light Mode"
          width={25}
          height={25}
          onClick={handleThemeSwitch}
        />
      )}
    </div>
  );
};
