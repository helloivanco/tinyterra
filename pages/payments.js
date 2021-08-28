import Navbar2 from '../components/navbar2';
import Featured2 from '../components/featured2';
import Thumbnails from '../components/thumbnails';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='bg-gray-900'>
      <Navbar2 />
      <div className='mx-auto min-h-screen max-w-6xl'>
        <Featured2 />
      </div>
      <Footer />
    </div>
  );
}
