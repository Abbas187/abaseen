import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'The Abaseen | Premium Unstitched Fabric for Modern Men',
    description: 'Experience the finest Pakistani unstitched fabric. The Abaseen offers luxury Wash & Wear, Cotton, and Boski collections for the modern Pakistani man.',
    keywords: ['men unstitched fabric Pakistan', 'wash and wear suits', 'gents cloth online', 'The Abaseen'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
