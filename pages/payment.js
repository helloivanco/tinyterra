import Navbar from '../components/navbar';
import Featured2 from '../components/featured2';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <div className='mx-auto min-h-screen max-w-6xl'>
        <Featured2 />
      </div>

      <Footer />
    </div>
  );
}
