import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavigationItem {
    id: number;
    title: string;
    href: string;
}

const navigation: NavigationItem[] = [
    {
        id: 1,
        title: 'About us',
        href: '#about',
    },
    {
        id: 2,
        title: 'Services',
        href: '#services',
    },
    {
        id: 3,
        title: 'Use Cases',
        href: '#cases',
    },
    {
        id: 4,
        title: 'Pricing',
        href: '#pricing',
    },
    {
        id: 5,
        title: 'Blog',
        href: '#blog',
    },
];

export const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center py-10">
            <Link href="/" className="shrink-0">
                <Image src="/logo.svg" width={220} height={36} alt="Positivus" />
            </Link>
            <nav>
                <ul className="flex gap-10">
                    {navigation.map(({ id, title, href }) => (
                        <li key={id}>
                            <Link className="text-xl" href={href}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
