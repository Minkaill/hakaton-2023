import useLanguage from './useLanguage';
import { useEffect, useState } from 'react';

const SelectLanguage = () => {
  const { changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('localelang_zarzar') || 'ru'); // Получаем значение из localStorage или устанавливаем значение по умолчанию

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
    <div className="mt-4">
      <select
        className="bg-blue-600 border border-gray-200 rounded px-2 py-1 shadow-sm text-white font-semibold transition duration-250 hover:border-gray-500 hover:shadow-md hover:text-opacity-80 transform hover:-translate-y-1 active:bg-gray-100 active:border-gray-200 active:shadow-sm active:text-opacity-80 w-full"
        onChange={handleLanguageChange}
        value={selectedLanguage} // Устанавливаем выбранное значение
      >
        <option value="ru">🇷🇺 РУ</option>
        <option value="en">🇬🇧 EN</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
