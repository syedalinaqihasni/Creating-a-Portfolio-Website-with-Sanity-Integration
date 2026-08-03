import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Seo title="Page Not Found | Syed Ali Naqi Hasni" description="The page you are looking for does not exist." />
      
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <AlertTriangle size={64} className="text-warning-500 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neutral-900 dark:text-white">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">Page Not Found</h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary" size="lg">
          Return Home
        </Button>
      </div>
    </>
  );
};

export default NotFound;