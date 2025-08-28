import React, { useState } from 'react';

const fruits = [
  { name: 'Apple', img: '/imge/apple.jpg' },
  { name: 'Banana', img: '/imge/banana.jpg' },
  { name: 'Mango', img: '/imge/mango.jpg' },
  { name: 'Orange', img: '/imge/orange.jpg' },
  { name: 'Grapes', img: '/imge/grapes.jpg' },
  { name: 'Pineapple', img: '/imge/pineapple.jpg' },
  { name: 'Cherry', img: '/imge/cherry.jpg' },
  { name: 'Watermelon', img: '/imge/watermelon.jpg' },
  { name: 'Raspberry', img: '/imge/raspberry.jpg' },
  { name: 'Blueberry', img: '/imge/blueberry.jpg' },
  { name: 'Kiwi', img: '/imge/kiwi.jpg' },
  { name: 'Papaya', img: '/imge/papaya.jpg' },
  { name: 'Strawberry', img: '/imge/Strawberry.jpg' },
  { name: 'Guava', img: '/imge/guava.jpg' },
  { name: 'Pear', img: '/imge/pear.jpg' },
  { name: 'Peach', img: '/imge/peach.jpg' },
  { name: 'Pomegranate', img: '/imge/pomegranate.jpg' },
  { name: 'Litchi', img: '/imge/litchi.jpg' },
  { name: 'Fig', img: '/imge/fig.jpg' },
  { name: 'Dragonfruit', img: '/imge/dragonfruit.jpg' }
];

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

const FruitSpeakerApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');

  const toggleTheme = () => setDarkMode(!darkMode);

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-purple-100 text-black'}`}>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="🔎 Search fruit..."
          className="px-4 py-2 rounded shadow border w-full max-w-sm mr-4 text-white bg-[#30336b] text-[20px] outline-none font-bold"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={toggleTheme}
          className="bg-gray-300 dark:bg-gray-700 text-xl text-white px-3 py-2 rounded hover:bg-gray-400 sm:p-2 dark:hover:bg-gray-600"
        >
          {darkMode ? '🌞' : '🌙 '}
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800 dark:text-purple-300">🍇 Fruit Speaker App</h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredFruits.map((fruit, i) => (
            <div
              key={i}
              className="text-center py-4 px-2 rounded-lg  shadow-md bg-purple-300 hover:bg-purple-400 dark:bg-pink-400 dark:hover:bg-pink-700 font-semibold text-white transition-transform transform hover:scale-105"
            >
              <img
                src={fruit.img}
                alt={fruit.name}
                loading="lazy"
                className="w-[100%]  h-[100] object-cover mb-2 rounded-md shadow-2xl"
              />
              <div>{fruit.name}</div>
              <button
                onClick={() => speak(fruit.name)}
                className="mt-2 px-3 py-1 text-sm bg-white text-purple-700 font-semibold rounded hover:bg-purple-100 sm:p-4 w-[100%]"
              >
                🔊 Speak
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FruitSpeakerApp;


