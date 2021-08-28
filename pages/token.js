import Navbar from '../components/navbar';
import TokenHeader from '../components/token-header';
import TokenDetails from '../components/token-details';
import TokenChart from '../components/token-chart';

const Token = () => {
  return (
    <div className='content-center bg-bg bg-cover min-h-screen'>
      <Navbar />
      <div className='max-w-5xl mx-auto px-4 mt-6 lg:px-8'>
        <TokenHeader />
        <div class='grid grid-cols-5 gap-3'>
          <div class='col-span-5 lg:col-span-3'>
            <TokenChart />
          </div>

          <div class='lg:ml-4 col-span-5 lg:col-span-2'>
            <TokenDetails />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Token;
