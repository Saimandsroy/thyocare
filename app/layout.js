import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Thyrocare Services - Book Health Checkup Packages | Up to 50% OFF',
    description: 'Book your health checkup packages with Thyrocare. NABL & CAP accredited labs. Aarogyam packages starting at ₹1,399. Home sample collection available.',
    keywords: 'health checkup, thyrocare, blood test, health packages, diagnostics, aarogyam',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
