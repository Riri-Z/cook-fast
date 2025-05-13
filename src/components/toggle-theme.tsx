import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false); //load with local on mount

  useEffect(() => {
    const savedThemeInlocal = localStorage.getItem('theme');
    const theme = savedThemeInlocal ?? 'light';
    setTheme(theme);
    setChecked(theme === 'light');
  }, [setTheme]);

  const handleToggleTheme = () => {
    setChecked(!checked);
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" checked={checked} onChange={handleToggleTheme} />

      <Sun className="swap-on" />

      <Moon className="swap-off" />
    </label>
  );
}
