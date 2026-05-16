import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOGS_DATA } from '@/constants/data';
import { MainLayout } from '@/components/layout';
import { ArrowLeft } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function BlogsPage() {
  return (
    <MainLayout showHeader={false} showFooter={false}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 space-y-10 min-h-[80vh]"
      >

        <div className="flex justify-start">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs no-underline group"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Home
          </Link>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-thin tracking-tight text-white">Blogs</h1>
          <p className="text-zinc-500 text-xs max-w-[600px]">
            Thoughts on AI, software engineering, and building products.
          </p>
        </div>

        <div className="grid gap-10">
          {BLOGS_DATA.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Link 
                to={`/blogs/${blog.slug}`}
                className="group block space-y-1.5 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-0">
                  <h2 className="text-lg font-normal text-white group-hover:text-zinc-300 transition-colors">
                    {blog.title}
                  </h2>
                  <span className="text-[10px] text-zinc-600 font-mono">{blog.date}</span>
                </div>
                <p className="text-zinc-500 text-xs font-thin leading-relaxed line-clamp-2">
                  {blog.content}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
}
