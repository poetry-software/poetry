import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b-2 border-blue-600 bg-blue-900 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://www.2adays.com/assets/v2/2adays-logo-new-new-2aed60e87fa1b3aca48ae70783c9177c8812d07ac540077d72bc62aa62b75a76.svg"
                            className="h-10 w-auto"
                        />
                    </div>
                    <nav className="hidden space-x-8 md:flex">
                        <a href="/" className="text-base font-semibold text-white transition-colors hover:text-blue-200">
                            Home
                        </a>
                        <a href="/" className="text-base font-semibold text-white transition-colors hover:text-blue-200">
                            Colleges
                        </a>
                        <a href="/" className="text-base font-semibold text-white transition-colors hover:text-blue-200">
                            Coaches
                        </a>
                        <a href="/" className="text-base font-semibold text-white transition-colors hover:text-blue-200">
                            News
                        </a>
                        <a href="/" className="text-base font-semibold text-white transition-colors hover:text-blue-200">
                            About
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="hidden cursor-pointer items-center font-semibold text-white transition-colors hover:text-blue-200 md:flex">
                            <Search className="mr-2 h-5 w-5" />
                            Search
                        </div>
                        <Button className="hidden rounded-lg bg-white text-base font-bold text-blue-900 hover:bg-gray-200 md:block" size="lg">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
