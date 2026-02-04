'use client';

import React from 'react';

interface MarkdownRendererProps {
    content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    const renderContent = () => {
        const lines = content.trim().split('\n');
        const elements: JSX.Element[] = [];
        let currentList: string[] = [];
        let paragraphBuffer: string[] = [];
        let key = 0;

        const flushParagraph = () => {
            if (paragraphBuffer.length > 0) {
                const text = paragraphBuffer.join(' ').trim();
                if (text) {
                    elements.push(
                        <p key={`p-${key++}`} className="mb-4 text-gray-600 dark:text-gray-400">
                            {processInlineFormatting(text)}
                        </p>
                    );
                }
                paragraphBuffer = [];
            }
        };

        const flushList = () => {
            if (currentList.length > 0) {
                elements.push(
                    <ul key={`ul-${key++}`} className="ml-6 mb-4 list-disc text-gray-600 dark:text-gray-400">
                        {currentList.map((item, idx) => (
                            <li key={idx} className="mb-2">
                                {processInlineFormatting(item)}
                            </li>
                        ))}
                    </ul>
                );
                currentList = [];
            }
        };

        const processInlineFormatting = (text: string) => {
            const parts: (string | JSX.Element)[] = [];
            let lastIndex = 0;
            let partKey = 0;

            // Match **text** for bold with glow
            const boldRegex = /\*\*(.*?)\*\*/g;
            let match;

            while ((match = boldRegex.exec(text)) !== null) {
                // Add text before the match
                if (match.index > lastIndex) {
                    parts.push(text.substring(lastIndex, match.index));
                }

                // Add the bold text with glow effect
                parts.push(
                    <strong
                        key={`bold-${partKey++}`}
                        className="glow-text font-semibold text-blue-600 dark:text-blue-400"
                    >
                        {match[1]}
                    </strong>
                );

                lastIndex = match.index + match[0].length;
            }

            // Add remaining text
            if (lastIndex < text.length) {
                parts.push(text.substring(lastIndex));
            }

            return parts.length > 0 ? parts : text;
        };

        lines.forEach((line) => {
            const trimmedLine = line.trim();

            // Skip empty lines
            if (!trimmedLine) {
                flushParagraph();
                return;
            }

            // Headers
            if (trimmedLine.startsWith('# ')) {
                flushParagraph();
                flushList();
                elements.push(
                    <h1 key={`h1-${key++}`} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                        {processInlineFormatting(trimmedLine.substring(2))}
                    </h1>
                );
            } else if (trimmedLine.startsWith('## ')) {
                flushParagraph();
                flushList();
                elements.push(
                    <h2 key={`h2-${key++}`} className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
                        {processInlineFormatting(trimmedLine.substring(3))}
                    </h2>
                );
            } else if (trimmedLine.startsWith('### ')) {
                flushParagraph();
                flushList();
                elements.push(
                    <h3 key={`h3-${key++}`} className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-5 mb-2">
                        {processInlineFormatting(trimmedLine.substring(4))}
                    </h3>
                );
            }
            // List items
            else if (trimmedLine.startsWith('- ')) {
                flushParagraph();
                currentList.push(trimmedLine.substring(2));
            }
            // Regular paragraph text
            else {
                flushList();
                paragraphBuffer.push(trimmedLine);
            }
        });

        // Flush any remaining content
        flushParagraph();
        flushList();

        return elements;
    };

    return <div className="blog-content">{renderContent()}</div>;
}
