import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to The Mosaic</h1>
        <p className="mt-4">We represent artists and empower growth through creativity and legal clarity.</p>
      </main>
      <Footer />
    </>
  );
}
