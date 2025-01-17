import { useState } from 'react'
import './App.css'

function App(){
const [quotesGenerator, setQuotesGenerator] = useState("")

const quotes =[
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
  "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
  "You must be the change you wish to see in the world. -Mahatma Gandhi",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
  "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
  "Do one thing every day that scares you. -Eleanor Roosevelt",
  "Well done is better than well said. -Benjamin Franklin",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
  "It is during our darkest moments that we must focus to see the light. -Aristotle",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
  "Be yourself; everyone else is already taken. -Oscar Wilde",
  "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
  "Go confidently in the direction of your dreams! Live the life you've imagined. -Henry David Thoreau",
  "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
  "In this life we cannot do great things. We can only do small things with great love. -Mother Teresa",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
  "Life is either a daring adventure or nothing. -Helen Keller"
];

function handleQuotesGenerator(){
  let randomQuotes = Math.floor(Math.random() * quotes.length)
  setQuotesGenerator(quotes[randomQuotes]);
}

  return (
    <>
      <div>
        <h1>Random Quote Generator</h1>
        <h2>{quotesGenerator}</h2>
        <button onClick={handleQuotesGenerator}>Quote Generate</button>
      </div>
      
    </>
  )
};

export default App;