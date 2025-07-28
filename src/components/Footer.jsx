export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center mt-8">
      <p>&copy; {new Date().getFullYear()} The Mosaic. All rights reserved.</p>
      <a
        href="https://wa.me/917276789555"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-green-400 hover:underline"
      >
        Chat with us on WhatsApp
      </a>
    </footer>
  );
}
