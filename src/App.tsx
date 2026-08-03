import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './layouts/Layout';
import Loading from './components/common/Loading';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Certificates = lazy(() => import('./pages/Certificates'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Skills = lazy(() => import('./pages/Skills'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;