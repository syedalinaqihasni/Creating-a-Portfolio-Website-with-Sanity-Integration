import { useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // For demonstration purposes, we'll just log the form data
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo title="Contact | Syed Ali Naqi Hasni" description="Get in touch with Syed Ali Naqi Hasni for collaboration, job opportunities, or just to say hello." />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl text-primary-100 mb-6">Let's talk about your project or just say hello.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Email</h3>
              <a 
                href="mailto:contact@example.com" 
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
              >
                contact@example.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Location</h3>
              <p className="text-neutral-700 dark:text-neutral-300">San Francisco, California</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white"
            >
              Send Me a Message
            </motion.h2>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-sm"
            >
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success-500/10 border border-success-500/20 rounded-lg text-success-500">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-error-500/10 border border-error-500/20 rounded-lg text-error-500">
                  {errorMessage}
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white"
                  placeholder="Your email address"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white"
                  placeholder="Subject of your message"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-700 dark:text-white resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;