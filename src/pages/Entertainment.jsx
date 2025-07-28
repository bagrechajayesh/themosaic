import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Entertainment() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Artist Representation</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { title: 'Singer', desc: 'Book top vocal talent for your events and productions.' },
            { title: 'Emcee', desc: 'Professional hosts for stage shows and corporate events.' },
            { title: 'Dancer', desc: 'Choreographed performances for celebrations and showcases.' },
          ].map(service => (
            <div key={service.title} className="p-4 border rounded shadow text-center">
              <div className="w-full h-32 bg-gray-300 mb-2" />
              <h2 className="font-semibold">{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
