import useLanguage from './useLanguage';
import { useEffect, useState } from 'react';

const SelectLanguage = () => {
  const { changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('localelang_zarzar') || 'ru',
  ); // Получаем значение из localStorage или устанавливаем значение по умолчанию

  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    changeLanguage(selectedValue);
    setSelectedLanguage(selectedValue);
  };

  useEffect(() => {
    // При монтировании компонента устанавливаем значение выбранного языка на основе localStorage
    const storedLanguage = localStorage.getItem('localelang_zarzar');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  return (
    <select
      className="duration-250 rounded-md border border-gray-200 bg-green-600 font-semibold text-white shadow-sm transition hover:border-gray-500 hover:text-opacity-80 hover:shadow-md active:text-opacity-80 p-1 md:p-2 text-sm md:text-base"
      onChange={handleLanguageChange}
      value={selectedLanguage} // Устанавливаем выбранное значение
    >
      <option value="ru">🇷🇺 РУ</option>
      <option value="en">🇬🇧 EN</option>
    </select>
  );
};

export default SelectLanguage;
