import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Get Started | MagicRemove",
    description: "Learn how to clone, install, and configure MagicRemove on your local machine.",
    openGraph: {
        title: "Get Started | MagicRemove",
        description: "Learn how to clone, install, and configure MagicRemove on your local machine.",
        url: "https://your-domain.com/get-started",
    },
};

export default function GetStartedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
