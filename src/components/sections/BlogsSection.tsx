import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/common';
import { BLOGS_DATA } from '@/constants/data';

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface BlogItemProps {
  title: string;
  date: string;
}

function BlogItem({ title, date }: BlogItemProps) {
  return (
    <div className="flex justify-between mb-3.75 gap-5">
      <a href="#" className="text-blue-500 no-underline font-normal hover:underline">
        {title} ↗
      </a>
      <span className="text-zinc-500">{date}</span>
    </div>
  );
}

export function BlogsSection() {
  return (
    <motion.section id="blogs" className="py-2.5" variants={itemVariants}>
      <SectionTitle>Blogs</SectionTitle>
      {BLOGS_DATA.map((blog, idx) => (
        <BlogItem key={idx} {...blog} />
      ))}
    </motion.section>
  );
}
