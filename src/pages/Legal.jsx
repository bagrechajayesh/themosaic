import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Legal() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Legal Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { title: 'Contracts & Agreements', desc: 'Drafting and reviewing talent and service agreements.' },
            { title: 'IPR Advisory', desc: 'Trademark, copyright & intellectual property protection.' },
            { title: 'Compliance & Advisory', desc: 'Support with industry regulations & documentation.' },
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
