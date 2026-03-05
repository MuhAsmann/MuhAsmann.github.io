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
    {
        id: 'building-high-performance-apis-with-go',
        title: 'Building High Performance APIs with Go',
        excerpt: 'Learn why Go is one of the best languages for building fast, scalable backend services and how its concurrency model makes it powerful for modern APIs.',
        date: '2024-01-20',
        readTime: '7 min read',
        tags: ['Go', 'Backend', 'API', 'Concurrency'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Building High Performance APIs with Go

Modern applications demand **fast, reliable, and scalable backend services**. As traffic grows, backend systems must handle thousands or even millions of requests efficiently.

This is where **Go (Golang)** shines.

In this article, I'll explain why Go is a powerful choice for backend development and how its concurrency model helps build high-performance APIs.

---

## Why Go for Backend Development?

Go was designed by Google to solve real-world infrastructure problems. It focuses on **simplicity, performance, and scalability**.

Some of the reasons why Go is widely used in backend systems:

- **Fast compilation and execution**
- **Simple and readable syntax**
- **Excellent concurrency support**
- **Lightweight memory usage**
- **Great standard library for networking**

Many modern systems such as **Docker, Kubernetes, and Terraform** are built using Go.

---

## The Power of Goroutines

One of Go's most powerful features is **goroutines**.

A goroutine is a lightweight thread managed by the Go runtime. It allows you to run multiple tasks concurrently without the overhead of traditional threads.

Example:

\`\`\`go
package main

import (
    "fmt"
    "time"
)

func processTask(id int) {
    fmt.Println("Processing task", id)
    time.Sleep(2 * time.Second)
    fmt.Println("Finished task", id)
}

func main() {
    for i := 1; i <= 5; i++ {
        go processTask(i)
    }

    time.Sleep(3 * time.Second)
}
\`\`\`

In this example, multiple tasks run **concurrently** using goroutines.

This makes Go extremely efficient for handling **API requests, background jobs, and microservices**.

---

## Building a Simple HTTP API in Go

Go provides a powerful standard library for building web servers.

Here is a simple example using \`net/http\`.

\`\`\`go
package main

import (
    "encoding/json"
    "net/http"
)

type Response struct {
    Message string \`json:"message"\`
}

func handler(w http.ResponseWriter, r *http.Request) {
    response := Response{
        Message: "Hello from Go backend!",
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func main() {
    http.HandleFunc("/api/hello", handler)
    http.ListenAndServe(":8080", nil)
}
\`\`\`

This example shows how quickly you can build a **simple API endpoint** using Go's standard library.

---

## Performance Advantages

Compared to many backend frameworks, Go provides:

### Efficient Concurrency
Goroutines are much lighter than traditional OS threads.

### Low Memory Usage
Go applications typically consume less memory under heavy load.

### Fast Startup Time
Go services start quickly, which is important for **microservices and containerized environments**.

---

## When Should You Use Go?

Go is especially suitable for:

- **Backend APIs**
- **Microservices architecture**
- **High-concurrency systems**
- **Real-time services**
- **Infrastructure tools**

If you're building systems that must be **fast, scalable, and reliable**, Go is a strong choice.

---

## Final Thoughts

Backend development is not only about writing code — it's about designing systems that can handle growth.

Go provides a powerful balance between **simplicity and performance**, making it one of the best tools for building modern backend services.

As backend engineers, our goal is to build systems that are **simple, efficient, and scalable**.

And Go helps us do exactly that.
`,
    },
    {
        id: 'understanding-goroutines-and-concurrency',
        title: 'Understanding Goroutines and Concurrency in Go',
        excerpt: 'Concurrency is one of Go’s most powerful features. In this article, we explore how goroutines work and how they help build highly concurrent backend services.',
        date: '2024-01-25',
        readTime: '6 min read',
        tags: ['Go', 'Concurrency', 'Backend'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Understanding Goroutines and Concurrency in Go

One of the reasons Go is so powerful for backend development is its built-in support for **concurrency**.

Modern backend systems must handle many requests simultaneously. Go makes this easier using **goroutines**.

## What is a Goroutine?

A goroutine is a lightweight thread managed by the Go runtime.

Unlike traditional threads, goroutines consume very little memory and can scale to thousands or even millions of concurrent tasks.

Example:

\`\`\`go
func sayHello() {
    fmt.Println("Hello from goroutine")
}

func main() {
    go sayHello()
}
\`\`\`

By simply adding the \`go\` keyword, the function runs concurrently.

## Why Goroutines Are Powerful

Goroutines allow backend services to:

- Handle multiple API requests concurrently
- Process background jobs
- Run asynchronous tasks efficiently

This makes Go extremely suitable for **microservices and high-traffic APIs**.

## When to Use Concurrency

Concurrency is useful for:

- Parallel API processing
- Background job processing
- Data pipelines
- High throughput services

## Final Thoughts

Understanding concurrency is essential for building scalable backend services.

Go makes concurrency simple and efficient, allowing developers to build systems that handle massive workloads.
`
    },
    {
        id: 'clean-architecture-in-go',
        title: 'Designing Clean Architecture in Go Backend Projects',
        excerpt: 'Learn how to structure Go backend applications using clean architecture principles for better scalability and maintainability.',
        date: '2024-01-28',
        readTime: '7 min read',
        tags: ['Go', 'Architecture', 'Backend'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Designing Clean Architecture in Go Backend Projects

As backend applications grow, code can quickly become difficult to maintain.

This is why **clean architecture** is important.

Clean architecture separates business logic from infrastructure so that applications remain scalable and maintainable.

## Typical Go Project Structure

\`\`\`
project
├── cmd
├── internal
│   ├── handler
│   ├── service
│   ├── repository
│   └── model
└── pkg
\`\`\`

Each layer has a clear responsibility.

### Handler
Handles HTTP requests.

### Service
Contains business logic.

### Repository
Responsible for database access.

## Benefits of Clean Architecture

- Easier testing
- Better maintainability
- Clear separation of concerns
- Scalable codebase

## Final Thoughts

A well-structured backend project makes collaboration easier and prevents technical debt.

Clean architecture helps backend engineers build **long-term maintainable systems**.
`
    },
    {
        id: 'structuring-production-go-apis',
        title: 'How I Structure Production Ready Go APIs',
        excerpt: 'A practical guide on how to structure backend APIs in Go for production environments.',
        date: '2024-02-01',
        readTime: '8 min read',
        tags: ['Go', 'API', 'Backend'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# How I Structure Production Ready Go APIs

Building APIs for production requires more than just writing handlers.

A production backend must include:

- Logging
- Error handling
- Middleware
- Configuration management

## Example API Structure

\`\`\`
/cmd/server
/internal/handler
/internal/service
/internal/repository
/internal/middleware
/internal/config
\`\`\`

## Middleware Layer

Middleware is essential for:

- Logging requests
- Authentication
- Rate limiting
- Request tracing

Example:

\`\`\`go
func LoggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        log.Println("Request:", r.URL.Path)
        next.ServeHTTP(w, r)
    })
}
\`\`\`

## Error Handling

Consistent error responses improve API usability.

\`\`\`json
{
  "error": "invalid request"
}
\`\`\`

## Final Thoughts

A production-ready backend API focuses on reliability, observability, and maintainability.

Good structure makes backend systems easier to scale and maintain.
`
    },
    {
        id: 'optimizing-database-queries',
        title: 'Optimizing Database Queries for High Traffic APIs',
        excerpt: 'Database performance is critical for backend systems. Learn strategies to optimize queries and improve API performance.',
        date: '2024-02-05',
        readTime: '7 min read',
        tags: ['Database', 'Backend', 'Performance'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Optimizing Database Queries for High Traffic APIs

In many backend systems, the database is the biggest performance bottleneck.

Poorly optimized queries can slow down an entire application.

## Use Proper Indexing

Indexes improve query performance dramatically.

Example:

\`\`\`sql
CREATE INDEX idx_user_email ON users(email);
\`\`\`

## Avoid N+1 Queries

Fetching related data inefficiently can cause many unnecessary database queries.

Instead, use joins or batch queries.

## Use Caching

Frequently accessed data should be cached using tools such as Redis.

Caching can significantly reduce database load.

## Final Thoughts

Optimizing database performance is one of the most impactful improvements a backend engineer can make.

Small optimizations can dramatically improve API performance.
`
    },
    {
        id: 'scaling-backend-services',
        title: 'Scaling Backend Services: Key Concepts Every Developer Should Know',
        excerpt: 'As applications grow, backend services must scale to handle increasing traffic. Here are the key concepts behind scalable systems.',
        date: '2024-02-10',
        readTime: '9 min read',
        tags: ['System Design', 'Backend', 'Scaling'],
        author: {
            name: 'Asman',
            avatar: '/images/closeup.jpeg',
        },
        content: `
# Scaling Backend Services: Key Concepts Every Developer Should Know

When applications grow, backend systems must scale to handle more users and traffic.

Understanding basic scaling concepts is essential for backend engineers.

## Vertical vs Horizontal Scaling

Vertical scaling increases server resources.

Horizontal scaling adds more servers.

Modern systems usually rely on horizontal scaling.

## Load Balancing

Load balancers distribute incoming requests across multiple servers.

This prevents any single server from becoming a bottleneck.

## Caching

Caching reduces database load and improves response times.

Common tools include Redis and Memcached.

## Background Workers

Some tasks should run asynchronously.

Examples include:

- sending emails
- generating reports
- processing uploads

These tasks can be handled by worker services.

## Final Thoughts

Scalable backend systems require careful design and planning.

By understanding scaling concepts, developers can build systems that grow with their users.
`
    }
];

export function getBlogPostById(id: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
    return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
