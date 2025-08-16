import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Check, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <RecruitingNotice />
            <ContentCards />
        </main>
    );
}

function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
            <div className="absolute inset-0 opacity-20"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <HeroHeader />
                    <HeroSearch />
                </div>
            </div>
        </section>
    );
}

function HeroHeader() {
    return (
        <>
            <h1 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
                Find, Rate & Compare
                <span className="block text-xs text-blue-600 md:text-sm">Choose the right college</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-sm text-gray-600">
                Connect with college coaches, track your recruiting progress, and discover the best college fit for your athletic and academic goals.
            </p>
        </>
    );
}

function HeroSearch() {
    const [selectedOption, setSelectedOption] = useState('Search Colleges');
    return (
        <div id="hero-search" className="relative z-10 mx-auto max-w-2xl">
            <HeroSearchDropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <HeroSearchInput selectedOption={selectedOption} />
        </div>
    );
}

function HeroSearchDropdown({
    selectedOption,
    setSelectedOption,
}: {
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div id="hero-search-dropdown" className="mb-4 flex items-center justify-center">
            <DropdownMenu>
                <DropdownMenuTrigger className="my-1 flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                    <div className="pr-6">{selectedOption}</div>
                    <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-gray-200 bg-white">
                    <DropdownMenuItem onClick={() => setSelectedOption('Search Colleges')} className="flex items-center gap-2">
                        <Check className={`h-4 w-4 text-black ${selectedOption === 'Search Colleges' ? 'opacity-100' : 'opacity-0'}`} />
                        <span className="text-black">Search Colleges</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedOption('Search Coaches')} className="flex items-center gap-2">
                        <Check className={`h-4 w-4 text-black ${selectedOption === 'Search Coaches' ? 'opacity-100' : 'opacity-0'}`} />
                        <span className="text-black">Search Coaches</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

function HeroSearchInput({ selectedOption }: { selectedOption: string }) {
    return (
        <div id="hero-search-input">
            <div className="relative mx-auto flex w-full max-w-3xl items-center justify-between rounded-full border border-gray-300 bg-white py-2 shadow-lg">
                <div className="flex-shrink-0 pl-4">
                    <Search className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                    <Input
                        type="text"
                        placeholder={`${selectedOption}...`}
                        className="border-none shadow-none placeholder:text-lg placeholder:text-gray-400 focus-visible:ring-0"
                    />
                </div>
                <div className="flex-shrink-0 pr-2">
                    <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700" size="lg">
                        <span className="text-base font-semibold">Search</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function RecruitingNotice() {
    return (
        <section className="bg-gray-900 py-3 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-medium md:text-base">
                        📢 Important: We are <span className="font-bold text-yellow-400">NOT</span> a recruiting service - We're a platform that
                        empowers you to take control of your own recruiting journey
                    </p>
                </div>
            </div>
        </section>
    );
}

function ContentCards() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ContentCardsHeader />
                <div>
                    <ContentCardsSlider />
                </div>
            </div>
        </section>
    );
}

function ContentCardsHeader() {
    return (
        <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Everything You Need for College Recruiting</h2>
            <p className="text-gray-600">
                Our comprehensive platform provides all the tools and information you need to succeed in your college recruiting journey.
            </p>
        </div>
    );
}

function ContentCardsSlider() {
    return (
        <div>
            <ContentCard
                imgUrl="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
                title="Coach Ratings &amp; More"
                description="Get honest, anonymous ratings and insights about college coaches from current and former players."
                links={[
                    { label: 'Anonymous Reviews', href: '/' },
                    { label: 'Coach Profiles', href: '/' },
                    { label: 'Program Insights', href: '/' },
                ]}
            />
            <ContentCard
                imgUrl="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop&crop=face"
                title="College Recruiting Platform"
                description="Connect directly with college coaches and showcase your athletic achievements and academic record."
                links={[
                    { label: 'Direct Coach Contact', href: '/' },
                    { label: 'Profile Building', href: '/' },
                    { label: 'Recruiting Timeline', href: '/' },
                ]}
            />
            <ContentCard
                imgUrl="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop"
                title="Recruiting and Policy News"
                description="Stay updated with the latest NCAA rules, recruiting policies, and college sports news."
                links={[
                    { label: 'NCAA Updates', href: '/' },
                    { label: 'Policy Changes', href: '/' },
                    { label: 'Industry News', href: '/' },
                ]}
            />
        </div>
    );
}

function ContentCard({
    imgUrl,
    title,
    description,
    links,
}: {
    imgUrl: string;
    title: string;
    description: string;
    links: Array<{ label: string; href: string }>;
}) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <div className="mb-4">
                <img className="h-40 w-full rounded-lg object-cover" src={imgUrl} alt={title} />
            </div>
            <h3 className="mb-3 text-center text-lg font-bold text-gray-900">{title}</h3>
            <p className="mb-4 text-center text-sm text-gray-600">{description}</p>
            <ul className="space-y-2">
                {links.map((link) => (
                    <ContentCardLink key={link.label} label={link.label} href={link.href} />
                ))}
            </ul>
        </div>
    );
}

function ContentCardLink({ label, href }: { label: string; href: string }) {
    return (
        <li className="flex items-center text-sm text-gray-700">
            <div className="mr-3 h-2 w-2 rounded-full bg-blue-500" />
            <a className="text-blue-600 transition-colors hover:text-blue-800 hover:underline" href={href}>
                {label}
            </a>
        </li>
    );
}
