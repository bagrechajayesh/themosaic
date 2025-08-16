// src/pages/Artist.jsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Put images in public/artists/*.jpg (or import from src/assets if you prefer)
const ARTISTS = {
  'arvind-sivakumaran': {
    name: 'Arvind Sivakumaran',
    role: 'Filmmaker • Scholar • Writer',
    bio: 'Replace with Arvind’s detailed bio.',
    image: '/artists/arvind.jpg',
  },
  'vinay-choudary': {
    name: 'Vinay Choudary',
    role: 'Writer • Director • Script Consultant',
    bio: 'Replace with Vinay’s detailed bio.',
    image: '/artists/vinay.jpg',
  },
  'steven-hanulik': {
    name: 'Steven Hanulik',
    role: 'Filmmaker • Copywriter',
    bio: 'Replace with Steven’s detailed bio.',
    image: '/artists/steven.jpg',
  },
};

export default function Artist() {
  const { slug } = useParams();
  const a = ARTISTS[slug];

  const name = a?.name ?? slug.replace(/-/g, ' ');
  const role = a?.role ?? 'Artist';
  const bio  = a?.bio ?? 'Profile coming soon.';
  const image = a?.image ?? '/artists/placeholder.jpg';

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/entertainment" className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Entertainment
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <img
              src={image}
              alt={name}
              className="w-full h-80 object-cover"
              onError={(e) => (e.currentTarget.src = '/artists/placeholder.jpg')}
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{name}</h1>
          <p className="mt-1 text-gray-600">{role}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{bio}</p>
        </div>
      </div>
    </section>
  );
}
