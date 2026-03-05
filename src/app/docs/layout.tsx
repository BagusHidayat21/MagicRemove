import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Documentation | MagicRemove",
    description: "Comprehensive documentation covering installation, Remove.bg API configuration, troubleshooting, and usage.",
    openGraph: {
        title: "Documentation | MagicRemove",
        description: "Comprehensive documentation covering installation, Remove.bg API configuration, troubleshooting, and usage.",
        url: "https://your-domain.com/docs",
    },
};

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
