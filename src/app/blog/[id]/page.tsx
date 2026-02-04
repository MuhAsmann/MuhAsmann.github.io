import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

import { getBlogPostById, getAllBlogPosts } from '@/lib/blog-data';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import MarkdownRenderer from '@/components/general/markdown-renderer';

interface BlogPostPageProps {
    params: {
        id: string;
    };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        id: post.id,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = getBlogPostById(params.id);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Asman's Blog`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getBlogPostById(params.id);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
            <Container>
                {/* Back Button */}
                <Link
                    href="/#blog"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <span>Back to blog</span>
                </Link>

                {/* Article Header */}
                <article className="mx-auto max-w-4xl">
                    <header className="mb-8">
                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title with glow effect */}
                        <Typography
                            variant="h1"
                            className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent dark:from-gray-100 dark:via-blue-400 dark:to-gray-100"
                        >
                            {post.title}
                        </Typography>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 border-y border-gray-200 dark:border-gray-700 py-4">
                            <div className="flex items-center gap-2">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span className="font-medium text-gray-900 dark:text-gray-100">
                                        {post.author.name}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </time>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none rounded-xl bg-white dark:bg-gray-800 p-8 shadow-sm md:p-12">
                        <MarkdownRenderer content={post.content} />
                    </div>

                    {/* Share Section */}
                    <div className="mt-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                        <Typography variant="h3" className="mb-4">
                            Enjoyed this article?
                        </Typography>
                        <Typography className="mb-4">
                            Share it with your network or connect with me to discuss more about{' '}
                            <span className="glow-text-green font-semibold text-green-600 dark:text-green-400">
                                {post.tags.join(', ')}
                            </span>
                        </Typography>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-500 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg"
                        >
                            Get in touch
                        </Link>
                    </div>
                </article>
            </Container>
        </div>
    );
}
