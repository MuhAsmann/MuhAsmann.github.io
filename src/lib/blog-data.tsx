export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    tags: string[];
    author: {
        name: string;
        avatar: string;
    };
    coverImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'building-scalable-applications',
        title: 'Building Scalable Applications with Next.js and TypeScript',
        excerpt: 'Learn how to architect and build production-ready applications that can handle millions of users with modern web technologies.',
        date: '2024-01-15',
        readTime: '8 min read',
        tags: ['Next.js', 'TypeScript', 'Architecture'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Building Scalable Applications with Next.js and TypeScript

When building modern web applications, **scalability** is not just a feature—it's a necessity. In this article, I'll share my experience and best practices for creating applications that can grow with your user base.

## Why Next.js and TypeScript?

The combination of **Next.js** and **TypeScript** provides an excellent foundation for scalable applications. Here's why:

- **Type Safety**: TypeScript catches errors before they reach production
- **Server-Side Rendering**: Next.js provides excellent SEO and performance
- **API Routes**: Built-in API handling without additional backend setup
- **Optimized Builds**: Automatic code splitting and optimization

## Key Architecture Principles

### 1. Component Organization

Organize your components into logical directories:
- \`components/general\` - Reusable UI components
- \`components/sections\` - Page-specific sections
- \`components/layout\` - Layout components

### 2. State Management

For large applications, consider using:
- **Zustand** for simple global state
- **React Query** for server state management
- **Context API** for theme and auth state

### 3. Performance Optimization

Always keep performance in mind:
- Use dynamic imports for code splitting
- Implement proper image optimization
- Leverage Next.js caching strategies
- Monitor Core Web Vitals

## Conclusion

Building scalable applications requires careful planning and the right tools. With Next.js and TypeScript, you have a solid foundation to create applications that can grow with your needs.

Remember: **Start simple, scale smart**.
    `,
    },
    {
        id: 'mastering-flutter-development',
        title: 'Mastering Flutter: From Basics to Advanced Patterns',
        excerpt: 'A comprehensive guide to Flutter development, covering everything from basic widgets to advanced state management patterns.',
        date: '2024-01-10',
        readTime: '12 min read',
        tags: ['Flutter', 'Mobile', 'Dart'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Mastering Flutter: From Basics to Advanced Patterns

Flutter has revolutionized mobile development by providing a **single codebase** for both iOS and Android. Let me share what I've learned building production Flutter apps.

## Getting Started with Flutter

Flutter's widget-based architecture makes it incredibly powerful. Everything in Flutter is a widget, from a simple button to complex layouts.

### Understanding Widgets

There are two types of widgets:
- **StatelessWidget**: Immutable widgets that don't change
- **StatefulWidget**: Widgets that maintain mutable state

## Advanced State Management

As your app grows, state management becomes crucial. Here are the popular approaches:

### 1. Provider Pattern
The most popular and recommended by the Flutter team. It's simple yet powerful.

### 2. BLoC Pattern
Business Logic Component pattern separates business logic from UI, making testing easier.

### 3. Riverpod
A modern, compile-safe alternative to Provider with better performance.

## Best Practices

1. **Keep widgets small**: Break down complex widgets into smaller, reusable pieces
2. **Use const constructors**: Improve performance by using const where possible
3. **Implement proper error handling**: Always handle errors gracefully
4. **Write tests**: Unit tests, widget tests, and integration tests are essential

## Performance Tips

- Use \`ListView.builder\` for long lists
- Implement lazy loading for images
- Avoid rebuilding entire widget trees
- Use **DevTools** for performance profiling

## Conclusion

Flutter is an amazing framework that continues to evolve. By following these patterns and best practices, you can build **beautiful, performant** mobile applications.

Happy coding! 🚀
    `,
    },
    {
        id: 'modern-backend-with-nestjs',
        title: 'Building Modern Backend APIs with NestJS',
        excerpt: 'Explore how NestJS brings structure and scalability to Node.js backend development with TypeScript and dependency injection.',
        date: '2024-01-05',
        readTime: '10 min read',
        tags: ['NestJS', 'Backend', 'API'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Building Modern Backend APIs with NestJS

NestJS has become my go-to framework for building **enterprise-grade** backend applications. Its architecture is inspired by Angular, making it familiar yet powerful.

## Why NestJS?

NestJS brings structure to the often chaotic world of Node.js development:

- **TypeScript First**: Full TypeScript support out of the box
- **Dependency Injection**: Clean, testable code architecture
- **Modular Structure**: Organize code into logical modules
- **Built-in Features**: Guards, interceptors, pipes, and more

## Core Concepts

### Modules
Modules organize your application into cohesive blocks of functionality.

### Controllers
Controllers handle incoming requests and return responses to the client.

### Services
Services contain business logic and can be injected into controllers.

### Providers
Providers are the fundamental concept in NestJS dependency injection.

## Building a RESTful API

Here's what a typical NestJS application structure looks like:

1. **Module Layer**: Organize features into modules
2. **Controller Layer**: Handle HTTP requests
3. **Service Layer**: Business logic
4. **Repository Layer**: Database operations
5. **DTO Layer**: Data validation and transformation

## Database Integration

NestJS works seamlessly with:
- **TypeORM**: For SQL databases
- **Mongoose**: For MongoDB
- **Prisma**: Modern ORM with excellent TypeScript support

## Authentication & Authorization

Implement secure authentication using:
- **Passport.js** integration
- **JWT tokens** for stateless auth
- **Guards** for route protection
- **Role-based access control**

## Testing

NestJS makes testing easy with built-in support for:
- Unit tests with Jest
- E2E tests
- Mocking and dependency injection

## Conclusion

NestJS brings **structure, scalability, and maintainability** to Node.js development. It's perfect for building robust backend APIs that can grow with your application.

Start building with NestJS today and experience the difference! 💪
    `,
    },
];

export function getBlogPostById(id: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
    return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
