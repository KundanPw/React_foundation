import './App.css';
import TweetList from './Components/TweetList';


const initialDymmyTweets = [
  {id: 0, content: 'We have a new twitter called as threads', likeCount: 3},
  {id: 1, content: 'What should we post ??', likeCount: 4},
  {id: 2, content: 'What is up with tech community ?', likeCount: 5}
];

// let nextId = 3
function App() {
  return (
    <div>
        <TweetList tweets = {initialDymmyTweets}/>
    </div>
  );
}

export default App;
