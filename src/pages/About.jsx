import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">About The Mosaic</h1>
        <p className="mt-4">The Mosaic is a collective built to support artistic talent, empower personal and brand growth, and provide legal backing for creative professionals.</p>
        <div className="mt-4">
          <div className="w-40 h-40 bg-gray-300 flex items-center justify-center">Founder Image</div>
          <p className="mt-2">Founder Name</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
