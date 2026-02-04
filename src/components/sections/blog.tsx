import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import { getAllBlogPosts } from '@/lib/blog-data';

const BlogSection = () => {
    const posts = getAllBlogPosts();

    return (
        <Container id="blog" className="bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <div className="self-center">
                    <Tag label="Blog" />
                </div>
                <Typography variant="subtitle" className="max-w-xl text-center">
                    Sharing my thoughts on <span className="glow-text font-semibold text-blue-600 dark:text-blue-400">software development</span>,
                    <span className="glow-text-green font-semibold text-green-600 dark:text-green-400"> best practices</span>, and
                    <span className="glow-text-purple font-semibold text-purple-600 dark:text-purple-400"> technology trends</span>
                </Typography>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="blog-card group block rounded-xl border border-gray-200 bg-white p-6 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
                    >
                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <Typography
                            variant="h3"
                            className="mb-3 text-xl font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        >
                            {post.title}
                        </Typography>

                        {/* Excerpt */}
                        <Typography className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                            {post.excerpt}
                        </Typography>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        {/* Read More Link */}
                        <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                            <span>Read article</span>
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export default BlogSection;
