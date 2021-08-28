import Navbar from '../components/navbar';
import Featured from '../components/featured';
import Thumbnails from '../components/thumbnails';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
      console.log(stickyValue);
      if (
        stickyValue === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function DarkModeToggle() {
  const initial =
    typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;

  const [theme, setTheme] = useState(initial);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    if (theme === 'dark') {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }

    window.localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

const Home = () => {
  const [colorTheme, setTheme] = DarkModeToggle();

  return (
    <div className='h-screen bg-white dark:bg-gray-900 transition duration-1000'>
      <div onClick={() => setTheme(colorTheme)}>
        {colorTheme !== 'light' ? (
          <div className='text-md'>Light</div>
        ) : (
          <div classNam='text-md'>Dark</div>
        )}
      </div>
    </div>
  );
};

export default Home;
