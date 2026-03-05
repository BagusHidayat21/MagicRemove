import Link from 'next/link';
import { Github, BookOpen } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-12">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-slate-900 text-lg mb-2 tracking-tight">MagicRemove</h3>
                        <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-4">
                            A clean, modern, and minimal open-source tool for removing image backgrounds in milliseconds.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                            <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200 uppercase tracking-wider">
                                Part of the GameForSmart ecosystem
                            </span>
                            <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded border border-blue-100 uppercase tracking-wider">
                                Powered by PT UBIG
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="/docs" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> API Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-started" className="hover:text-blue-600 transition-colors">Usage Guide</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-600 transition-colors">About the Project</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Community</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <a href="https://github.com/GameForSmart" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-2">
                                    <Github className="w-4 h-4" /> GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-slate-900 transition-colors">MIT License</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} Open Source Project. All rights reserved.</p>
                    <p>
                        Background removal engine powered by <a href="https://www.remove.bg" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 font-medium underline underline-offset-2 transition-colors">Remove.bg</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
