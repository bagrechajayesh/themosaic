// src/pages/Contact.jsx
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Have a question or a project in mind? Send a message here or use WhatsApp for a quick chat.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: Quick contacts / WhatsApp */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Contacts</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium">Phone / WhatsApp</div>
                  <a
                    href="https://wa.me/917276789555?text=Hi%20The%20Mosaic%2C%20I%27d%20like%20to%20learn%20more…"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    +91 72767 89555
                  </a>
                </div>
              </li>

              {/* Optional email row — add your address if/when you want */}
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <span className="text-gray-600">
                    (Add your email here or remove this row)
                  </span>
                </div>
              </li>

              {/* Optional address row — update or remove */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium">Address</div>
                  <span className="text-gray-600">
                    (Add your office address here or remove this row)
                  </span>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/917276789555?text=Hi%20The%20Mosaic%2C%20I%27d%20like%20to%20learn%20more…"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-white hover:bg-green-700 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Netlify form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Send a Message</h2>

            {/* Netlify form: change the name if you like */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {/* Netlify form-name hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="+91…"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="How can we help?"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-between pt-2">
                <p className="text-xs text-gray-500">
                  By submitting, you agree to be contacted about your request.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-white hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Optional Netlify reCAPTCHA (uncomment if you enable it in settings) */}
            {/*
            <div data-netlify-recaptcha="true" className="mt-4"></div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
