import Navbar from '../components/navbar';
import Featured3 from '../components/featured3';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <div className='mx-auto min-h-screen max-w-6xl'>
        <Featured3 />
      </div>

      <Footer />
    </div>
  );
}
