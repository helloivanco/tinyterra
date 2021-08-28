import Navbar from '../components/navbar';
import TokenLeaderboard from '../components/token-leaderboard';
const Home = () => {
  return (
    <div className='content-center bg-bg bg-cover min-h-screen'>
      <Navbar />
      <TokenLeaderboard />
    </div>
  );
};

export default Home;
