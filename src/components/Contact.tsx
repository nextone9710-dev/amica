import { useState } from 'react';
import { companyInfo } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const body = new FormData();
    body.append('wpforms[fields][1][first]', formData.firstName);
    body.append('wpforms[fields][1][last]', formData.lastName);
    body.append('wpforms[fields][2]', formData.email);
    body.append('wpforms[fields][5]', formData.phone);
    body.append('wpforms[fields][6]', '');
    body.append('wpforms[fields][4]', '');
    body.append('wpforms[fields][3]', formData.message);
    body.append('wpforms[id]', '440');
    body.append('page_title', 'Contact');
    body.append('page_url', 'https://amice.co.uk/contact/');
    body.append('page_id', '275');
    body.append('wpforms[post_id]', '275');
    body.append('wpforms[submit]', 'wpforms-submit');
    body.append('wpforms[token]', '');
    body.append('action', 'wpforms_submit');
    body.append('start_timestamp', String(Math.floor(Date.now() / 1000)));
    body.append('end_timestamp', String(Math.floor(Date.now() / 1000)));

    try {
      const response = await fetch('/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            Get In <span className="font-semibold">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to discuss your uniform requirements? Contact us today for a free quote.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a
            href={`tel:${companyInfo.phone}`}
            className="bg-white p-6 text-center group hover:shadow-lg transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-500 text-sm">{companyInfo.phoneDisplay}</p>
          </a>

          <a
            href={`mailto:${companyInfo.email}`}
            className="bg-white p-6 text-center group hover:shadow-lg transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-500 text-sm">{companyInfo.email}</p>
          </a>

          <a
            href={`https://wa.me/${companyInfo.whatsapp.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 text-center group hover:shadow-lg transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-gray-500 text-sm">Chat with us</p>
          </a>

          <div className="bg-white p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Location</h3>
            <p className="text-gray-500 text-sm">{companyInfo.address}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-sm p-8 md:p-12">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder:text-xs placeholder:text-gray-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder:text-xs placeholder:text-gray-300"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder:text-xs placeholder:text-gray-300"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder:text-xs placeholder:text-gray-300"
                      placeholder="+44 7xxx xxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none placeholder:text-xs placeholder:text-gray-300"
                    placeholder="Tell us about your uniform requirements..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-primary text-white py-4 px-6 font-medium tracking-wide transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
