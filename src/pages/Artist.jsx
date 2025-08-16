import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// fallback image if neither .jpg nor .png exists
const PLACEHOLDER = '/artists/placeholder.jpg';

export default function Artist() {
  const { slug } = useParams();

  // start with .jpg by default
  const [imgSrc, setImgSrc] = useState(`/artists/${slug}.jpg`);

  const handleImgError = () => {
    if (imgSrc.endsWith('.jpg')) {
      // if .jpg fails, try .png
      setImgSrc(`/artists/${slug}.png`);
    } else {
      // if .png fails too, show placeholder
      setImgSrc(PLACEHOLDER);
    }
  };

  const displayName = slug.replace(/-/g, ' ');

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        to="/entertainment"
        className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Entertainment
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Image */}
        <div className="md:col-span-1">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <img
              src={imgSrc}
              alt={displayName}
              onError={handleImgError}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Bio placeholder */}
        <div className="md:col-span-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 capitalize">
            {displayName}
          </h1>
          <p className="mt-1 text-gray-600">Artist</p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Profile coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
