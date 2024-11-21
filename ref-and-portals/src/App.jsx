import Player from './components/Player.jsx';
import TimerChallange from './components/TimeChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={1} />
        <TimerChallange title="Medium" targetTime={5} />
        <TimerChallange title="Difficult" targetTime={10} />
        <TimerChallange title="Pro only" targetTime={15} />
      </div>
    </>
  );
}

export default App;


