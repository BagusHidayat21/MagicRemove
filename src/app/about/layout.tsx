import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About | MagicRemove",
    description: "Learn about the MagicRemove open source project, its connection to the GameForSmart ecosystem, and PT UBIG.",
    openGraph: {
        title: "About | MagicRemove",
        description: "Learn about the MagicRemove open source project, its connection to the GameForSmart ecosystem, and PT UBIG.",
        url: "https://your-domain.com/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
