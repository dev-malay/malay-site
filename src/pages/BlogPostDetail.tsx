import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { BLOGS_DATA } from '@/constants/data';
import { MainLayout } from '@/components/layout';
import { ArrowLeft } from 'lucide-react';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = BLOGS_DATA.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <MainLayout showHeader={false} showFooter={false}>
        <div className="py-20 text-center space-y-4">
          <h1 className="text-xl text-white">Blog not found</h1>
          <Link to="/blogs" className="text-zinc-500 hover:text-white transition-colors text-xs no-underline" style={{ textDecoration: 'none' }}>
            Back to blogs
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout showHeader={false} showFooter={false}>
      <motion.article
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="py-12 space-y-6 min-h-[80vh]"
      >
        <Link 
          to="/blogs" 
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest no-underline group"
          style={{ textDecoration: 'none' }}
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to blogs
        </Link>

        <div className="space-y-2">
          <h1 className="text-xl font-thin tracking-tight text-white leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-2 text-[9px] text-zinc-600 font-mono uppercase tracking-wider">
            <span>{blog.date}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-300 text-sm leading-relaxed font-thin">
            {blog.content}
          </p>
          <div className="space-y-4 pt-4 text-zinc-400 text-xs leading-relaxed font-thin">
            <p>
              coming soon
            </p>
            <h2 className="text-white text-sm font-normal pt-2"></h2>
            <p>
              
            </p>
            <blockquote className="border-l border-zinc-800 pl-4 italic text-zinc-500 text-[10px]">

            </blockquote>
            <p>
             
            </p>
          </div>
        </div>
      </motion.article>
    </MainLayout>
  );
}
