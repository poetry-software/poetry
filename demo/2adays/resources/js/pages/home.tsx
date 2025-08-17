import { Header } from '@/components/header';
import { ReviewsSelector } from '@/components/ReviewsSelector';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ArrowRight, Book, Check, ChevronDown, Mail, Phone, Search, Star, Users } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <RecruitingNotice />
            <ContentCards />
            <TrustedByTicker />
            <Reviews />
            <Features />
            <TopColleges />
            <Blog />
            <Footer />
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
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div id="hero-search-input">
            <div
                className={`relative mx-auto flex w-full max-w-3xl items-center justify-between rounded-full border bg-white py-2 shadow-lg transition-colors duration-200 ${
                    isFocused ? 'border-blue-500' : 'border-gray-300'
                }`}
            >
                <div className="flex-shrink-0 pl-4">
                    <Search className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                    <Input
                        type="text"
                        placeholder={`${selectedOption}...`}
                        className="border-none text-base shadow-none placeholder:text-base placeholder:text-gray-400 focus-visible:ring-0 md:text-base"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
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
    const [active, setActive] = useState<0 | 1 | 2>(0);

    return (
        <div>
            <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-4">
                    <CoachRatingsContentCard />
                    <CollegeRecruitingPlatformContentCard />
                    <RecruitingAndPolicyNewsContentCard />
                </div>
            </div>
            <div className="overflow-hidden md:hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
                    <div className="w-full flex-shrink-0">
                        <CoachRatingsContentCard />
                    </div>
                    <div className="w-full flex-shrink-0">
                        <CollegeRecruitingPlatformContentCard />
                    </div>
                    <div className="w-full flex-shrink-0">
                        <RecruitingAndPolicyNewsContentCard />
                    </div>
                </div>
            </div>
            <ThreeDots active={active} setActive={setActive} />
        </div>
    );
}

function ThreeDots({ active, setActive }: { active: 0 | 1 | 2; setActive: React.Dispatch<React.SetStateAction<0 | 1 | 2>> }) {
    return (
        <div className="flex justify-center space-x-2 py-4 md:hidden">
            <div
                className={`h-3 w-3 rounded-full ${active === 0 ? 'bg-blue-500' : 'cursor-pointer bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => active !== 0 && setActive(0)}
            ></div>
            <div
                className={`h-3 w-3 rounded-full ${active === 1 ? 'bg-blue-500' : 'cursor-pointer bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => active !== 1 && setActive(1)}
            ></div>
            <div
                className={`h-3 w-3 rounded-full ${active === 2 ? 'bg-blue-500' : 'cursor-pointer bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => active !== 2 && setActive(2)}
            ></div>
        </div>
    );
}

function CoachRatingsContentCard() {
    return (
        <ContentCard
            imgUrl="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&crop=face"
            title="Coach Ratings & More"
            description="Get honest, anonymous ratings and insights about college coaches from current and former players."
            links={[
                { label: 'Anonymous Reviews', href: '/' },
                { label: 'Coach Profiles', href: '/' },
                { label: 'Program Insights', href: '/' },
            ]}
        />
    );
}

function CollegeRecruitingPlatformContentCard() {
    return (
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
    );
}

function RecruitingAndPolicyNewsContentCard() {
    return (
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
        <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
            <div className="mb-4 md:mb-6">
                <img className="h-40 w-full rounded-lg object-cover md:h-48" src={imgUrl} alt={title} />
            </div>
            <div className="flex-grow">
                <h3 className="mb-3 text-center text-lg font-bold text-gray-900">{title}</h3>
                <p className="mb-4 text-center text-sm text-gray-600">{description}</p>
            </div>
            <ul className="mt-auto space-y-2">
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

type TrustedByTickerVariant = 'espn' | 'ncaa' | 'sportsillustrated' | 'athleticbusiness' | 'collegesports' | 'recruitingtimes';

function TrustedByTicker() {
    const items: Array<{ variant: TrustedByTickerVariant }> = [
        { variant: 'espn' },
        { variant: 'ncaa' },
        { variant: 'sportsillustrated' },
        { variant: 'athleticbusiness' },
        { variant: 'collegesports' },
        { variant: 'recruitingtimes' },
    ];

    return (
        <section className="w-full overflow-hidden bg-gray-100 py-8">
            <TrustedByTickerHeader />
            <div className="relative overflow-hidden">
                <div className="scroll_linear_infinite flex w-max gap-12 md:gap-16">
                    {Array.from({ length: 12 }, (_, index) => (
                        <>
                            {items.map((item) => (
                                <TrustedByTickerItem key={`${index}-${item.variant}`} variant={item.variant} />
                            ))}
                        </>
                    ))}
                </div>
            </div>
            <TrustedByTickerFooter />
        </section>
    );
}

function TrustedByTickerItem({
    variant,
}: {
    variant: 'espn' | 'ncaa' | 'sportsillustrated' | 'athleticbusiness' | 'collegesports' | 'recruitingtimes';
}) {
    switch (variant) {
        case 'espn':
            return <TrustedByTickerESPN />;
        case 'ncaa':
            return <TrustedByTickerNCAA />;
        case 'sportsillustrated':
            return <TrustedByTickerSportsIllustrated />;
        case 'athleticbusiness':
            return <TrustedByTickerAthleticBusiness />;
        case 'collegesports':
            return <TrustedByTickerCollegeSports />;
        case 'recruitingtimes':
            return <TrustedByTickerRecruitingTimes />;
        default:
            return null;
    }
}

function TrustedByTickerESPN() {
    return (
        <div className="flex min-w-[140px] flex-shrink-0 justify-center text-gray-500 transition-colors duration-200 hover:text-gray-700">
            <svg className="h-8 w-auto md:h-10" viewBox="0 0 120 40" fill="currentColor">
                <rect x="10" y="8" width="15" height="24" rx="2"></rect>
                <rect x="30" y="12" width="15" height="16" rx="2"></rect>
                <rect x="50" y="8" width="15" height="24" rx="2"></rect>
                <rect x="70" y="15" width="15" height="10" rx="2"></rect>
                <text x="95" y="25" font-size="12" font-weight="bold">
                    ESPN
                </text>
            </svg>
        </div>
    );
}

function TrustedByTickerNCAA() {
    return (
        <div className="flex min-w-[140px] flex-shrink-0 justify-center text-gray-500 transition-colors duration-200 hover:text-gray-700">
            <svg className="h-8 w-auto md:h-10" viewBox="0 0 120 40" fill="currentColor">
                <circle cx="20" cy="20" r="12" stroke-width="2" stroke="currentColor" fill="none"></circle>
                <text x="40" y="25" font-size="14" font-weight="bold">
                    NCAA
                </text>
            </svg>
        </div>
    );
}

function TrustedByTickerSportsIllustrated() {
    return (
        <div className="flex min-w-[140px] flex-shrink-0 justify-center text-gray-500 transition-colors duration-200 hover:text-gray-700">
            <svg className="h-8 w-auto md:h-10" viewBox="0 0 140 40" fill="currentColor">
                <rect x="5" y="10" width="25" height="20" rx="3" stroke-width="2" stroke="currentColor" fill="none"></rect>
                <text x="40" y="18" font-size="10" font-weight="bold">
                    SPORTS
                </text>
                <text x="40" y="28" font-size="10" font-weight="bold">
                    ILLUSTRATED
                </text>
            </svg>
        </div>
    );
}

function TrustedByTickerAthleticBusiness() {
    return (
        <div className="flex min-w-[140px] flex-shrink-0 justify-center text-gray-500 transition-colors duration-200 hover:text-gray-700">
            <svg className="h-8 w-auto md:h-10" viewBox="0 0 140 40" fill="currentColor">
                <polygon points="10,25 20,10 30,25" stroke-width="2" stroke="currentColor" fill="none"></polygon>
                <text x="40" y="18" font-size="9" font-weight="bold">
                    ATHLETIC
                </text>
                <text x="40" y="28" font-size="9" font-weight="bold">
                    BUSINESS
                </text>
            </svg>
        </div>
    );
}

function TrustedByTickerCollegeSports() {
    return (
        <div className="flex min-w-[140px] flex-shrink-0 justify-center text-gray-500 transition-colors duration-200 hover:text-gray-700">
            <svg className="h-8 w-auto md:h-10" viewBox="0 0 130 40" fill="currentColor">
                <rect x="5" y="5" width="20" height="15" rx="2"></rect>
                <rect x="5" y="20" width="20" height="15" rx="2"></rect>
                <text x="35" y="18" font-size="9" font-weight="bold">
                    COLLEGE
                </text>
                <text x="35" y="28" font-size="9" font-weight="bold">
                    SPORTS
                </text>
            </svg>
        </div>
    );
}

function TrustedByTickerRecruitingTimes() {
    return (
        <div className="flex min-w-[140px] flex-shrink-0 justify-center text-gray-500 transition-colors duration-200 hover:text-gray-700">
            <svg className="h-8 w-auto md:h-10" viewBox="0 0 140 40" fill="currentColor">
                <circle cx="15" cy="20" r="10" stroke-width="2" stroke="currentColor" fill="none"></circle>
                <line x1="15" y1="15" x2="15" y2="20" stroke-width="2" stroke="currentColor"></line>
                <line x1="15" y1="20" x2="18" y2="23" stroke-width="2" stroke="currentColor"></line>
                <text x="35" y="18" font-size="8" font-weight="bold">
                    RECRUITING
                </text>
                <text x="35" y="28" font-size="8" font-weight="bold">
                    TIMES
                </text>
            </svg>
        </div>
    );
}

function TrustedByTickerHeader() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center">
                <p className="text-sm font-medium tracking-wide text-gray-600 uppercase">Trusted by Leading Sports Organizations</p>
            </div>
        </div>
    );
}

function TrustedByTickerFooter() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Featured in major sports publications and trusted by college athletic programs nationwide</p>
            </div>
        </div>
    );
}

function Reviews() {
    const [selectedType, setSelectedType] = useState<'all' | 'coach' | 'school'>('all');

    const reviews = [
        {
            rating: 5,
            review: 'Coach Smith was incredible throughout my recruiting process. Very responsive, supportive, and helped me understand what it takes to compete at the collegiate level. The training program was exactly what I needed.',
            userName: 'Sarah M.',
            sport: 'Soccer',
            college: 'University of North Carolina',
            coach: 'Coach Smith • Head Coach',
            type: 'coach',
        },
        {
            rating: 5,
            review: 'The platform made it so easy to track my recruiting progress and communicate with multiple coaches at once.',
            userName: 'Mike T.',
            sport: 'Basketball',
            college: 'Duke University',
            type: 'school',
        },
        {
            rating: 5,
            review: "Coach Johnson pushed me to be my best both on and off the track. Her knowledge of the sport and recruiting process was invaluable. She genuinely cares about her athletes' success beyond just athletics.",
            userName: 'Jessica L.',
            sport: 'Track & Field',
            college: 'Stanford University',
            coach: 'Coach Johnson • Assistant Coach',
            type: 'coach',
        },
        {
            rating: 5,
            review: 'Found my perfect college match through 2aDays. The detailed college profiles helped me make an informed decision.',
            userName: 'David R.',
            sport: 'Football',
            college: 'University of Alabama',
            type: 'school',
        },
        {
            rating: 4,
            review: 'Coach Davis has an amazing ability to develop swimmers at all levels. Her technical expertise and motivational approach helped me drop significant time in my events. Highly recommend working with her!',
            userName: 'Olivia P.',
            sport: 'Swimming',
            college: 'University of California',
            coach: 'Coach Davis • Head Coach',
            type: 'coach',
        },
        {
            rating: 5,
            review: "Coach Wilson's training methods are top-notch. He helped me improve my technique and mental toughness. His experience competing at the highest levels really shows in his coaching approach.",
            userName: 'Ryan H.',
            sport: 'Wrestling',
            college: 'Penn State University',
            coach: 'Coach Wilson • Head Coach',
            type: 'coach',
        },
        {
            rating: 5,
            review: "The recruiting timeline feature kept me organized throughout the entire process. Couldn't have done it without 2aDays!",
            userName: 'Emma K.',
            sport: 'Volleyball',
            college: 'University of Texas',
            type: 'school',
        },
        {
            rating: 5,
            review: 'The recruiting trends and success stories gave me confidence that I was making the right choices.',
            userName: 'Connor B.',
            sport: 'Golf',
            college: 'University of Georgia',
            type: 'school',
        },
        {
            rating: 5,
            review: 'The campus tour scheduling feature made visiting colleges so much easier. Highly recommend!',
            userName: 'Madison L.',
            sport: 'Lacrosse',
            college: 'Northwestern University',
            type: 'school',
        },
        {
            rating: 5,
            review: "The scholarship calculator and financial aid resources were game-changers for my family's planning.",
            userName: 'Sophia C.',
            sport: 'Softball',
            college: 'University of Oklahoma',
            type: 'school',
        },
        {
            rating: 4,
            review: 'The video upload feature made sharing my highlights so much easier. Coaches loved the professional presentation.',
            userName: 'Ava M.',
            sport: 'Gymnastics',
            college: 'UCLA',
            type: 'school',
        },
        {
            rating: 4,
            review: 'Amazing training facilities overview helped me choose the perfect program for my athletic development.',
            userName: 'Blake R.',
            sport: 'Swimming',
            college: 'University of Florida',
            type: 'school',
        },
        {
            rating: 5,
            review: 'The detailed facility photos and virtual tours saved me so much time in my college search.',
            userName: 'Chloe K.',
            sport: 'Cross Country',
            college: 'University of Oregon',
            type: 'school',
        },
        {
            rating: 4.5,
            review: 'The academic requirements and GPA calculator helped me understand exactly what I needed to achieve in the classroom.',
            userName: 'Tyler N.',
            sport: 'Baseball',
            college: 'Vanderbilt University',
            type: 'school',
        },
    ];

    return (
        <section className="relative bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ReviewsHeader />
                <ReviewsSelector onTypeChange={(type) => setSelectedType(type)} />
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {reviews
                        .filter((review) => selectedType === 'all' || review.type === selectedType)
                        .map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                </div>
            </div>
        </section>
    );
}

function RatingStar({ rating, position }: { rating: number; position: number }) {
    const starValue = rating - position;

    if (starValue >= 1) {
        return <Star className="h-5 w-5 fill-current text-yellow-400" />;
    } else if (starValue > 0) {
        return (
            <div className="relative h-5 w-5">
                <Star className="absolute inset-0 h-5 w-5 text-gray-300" />
                <div className="absolute inset-0 h-5 w-5">
                    <div className="h-full w-1/2 overflow-hidden">
                        <Star className="h-5 w-5 fill-current text-yellow-400" />
                    </div>
                </div>
            </div>
        );
    } else {
        return <Star className="h-5 w-5 text-gray-300" />;
    }
}

function RatingStars({ rating }: { rating: number }) {
    return (
        <div className="mb-3 flex items-center">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <RatingStar key={i} rating={rating} position={i} />
                ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>
    );
}

function ReviewCard({
    rating,
    review,
    userName,
    sport,
    college,
    coach,
}: {
    rating: number;
    review: string;
    userName: string;
    sport: string;
    college: string;
    coach?: string;
}) {
    return (
        <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
                <RatingStars rating={rating} />

                <blockquote className="text-base leading-relaxed text-gray-700 italic">{review}</blockquote>
            </div>

            <div className="mt-auto border-t border-gray-200 pt-4">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="font-bold text-gray-900">{userName}</div>
                        <div className="text-gray-700">{sport}</div>
                        <div className={`text-blue-600 opacity-0 hover:text-blue-800 ${coach ? 'cursor-pointer opacity-100' : 'cursor-default'}`}>
                            {coach || 'Coach'}
                        </div>
                    </div>
                    <div className="cursor-pointer font-medium text-blue-600 hover:text-blue-800">{college}</div>
                </div>
            </div>
        </div>
    );
}

function ReviewsHeader() {
    return (
        <div className="mb-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">What Students Are Saying</h2>
            <p className="mb-4 text-xl text-gray-600">Real reviews from student-athletes who found success with 2aDays</p>
        </div>
    );
}

function Features() {
    const features = [
        {
            icon: <Search className="h-12 w-12 text-blue-600" />,
            title: 'Find Your College Fit',
            description:
                'Use our advanced matching algorithm to discover colleges that align with your athletic abilities, academic goals, and personal preferences.',
            listItems: ['Personalized Matches', 'Academic Alignment', 'Athletic Requirements'],
        },
        {
            icon: <Users className="h-12 w-12 text-green-600" />,
            title: 'Contact Our Experts',
            description:
                'Get personalized guidance from our team of recruiting experts who have helped thousands of student-athletes achieve their college dreams.',
            listItems: ['1-on-1 Consultations', 'Expert Guidance', 'Success Strategies'],
        },
        {
            icon: <Star className="h-12 w-12 text-yellow-600" />,
            title: 'Anonymous Ratings',
            description:
                'Access honest, anonymous ratings and reviews from current and former players about coaches, programs, and college experiences.',
            listItems: ['Honest Reviews', 'Player Insights', 'Program Details'],
        },
        {
            icon: <Book className="h-12 w-12 text-purple-600" />,
            title: 'Track Recruiting Progress',
            description: 'Monitor your recruiting journey with our comprehensive tracking system that keeps you organized and on top of deadlines.',
            listItems: ['Progress Tracking', 'Deadline Management', 'Communication Logs'],
        },
    ];
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FeaturesHeader />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturesHeader() {
    return (
        <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Powerful Features for Your Success</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Our platform provides everything you need to navigate the college recruiting process with confidence and clarity.
            </p>
        </div>
    );
}

function FeatureCard({ icon, title, description, listItems }: { icon: React.ReactElement; title: string; description: string; listItems: string[] }) {
    return (
        <div className="group rounded-xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-xl">
            <div className="mb-6">{icon}</div>
            <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">{title}</h3>
            <p className="mb-6 text-gray-600">{description}</p>
            <ul className="space-y-2">
                {listItems.map((item) => (
                    <FeatureListItem key={item} feature={item} />
                ))}
            </ul>
        </div>
    );
}

function FeatureListItem({ feature }: { feature: string }) {
    return (
        <li className="flex items-center text-sm text-gray-700">
            <FeatureListItemDot />
            {feature}
        </li>
    );
}

function FeatureListItemDot() {
    return <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>;
}

function TopColleges() {
    const [selectedDivision, setSelectedDivision] = useState<'D1' | 'D2' | 'D3'>('D1');

    const emojis: Record<string, string> = {
        basketball: '🏀',
        soccer: '⚽',
        alligator: '🐊',
        football: '🏈',
        running: '🏃‍♂️',
        books: '📚',
        mountains: '🏔️',
        waves: '🌊',
        pine: '🌲',
        lightning: '⚡',
        graduation: '🎓',
        palm: '🌴',
        wheat: '🌾',
        maple: '🍁',
    };

    const colleges: { [key in 'D1' | 'D2' | 'D3']: Array<{ schoolName: string; location: string; division: 'D1' | 'D2' | 'D3'; emoji: string }> } = {
        D1: [
            {
                schoolName: 'Duke University',
                location: 'Durham, NC',
                division: 'D1' as const,
                emoji: 'basketball',
            },
            {
                schoolName: 'University of North Carolina',
                location: 'Chapel Hill, NC',
                division: 'D1' as const,
                emoji: 'soccer',
            },
            {
                schoolName: 'Stanford University',
                location: 'Stanford, CA',
                division: 'D1' as const,
                emoji: 'running',
            },
            {
                schoolName: 'University of Alabama',
                location: 'Tuscaloosa, AL',
                division: 'D1' as const,
                emoji: 'football',
            },
            {
                schoolName: 'UCLA',
                location: 'Los Angeles, CA',
                division: 'D1' as const,
                emoji: 'basketball',
            },
            {
                schoolName: 'University of Florida',
                location: 'Gainesville, FL',
                division: 'D1' as const,
                emoji: 'alligator',
            },
        ],
        D2: [
            {
                schoolName: 'Bentley University',
                location: 'Waltham, MA',
                division: 'D2' as const,
                emoji: 'books',
            },
            {
                schoolName: 'Cal State San Bernardino',
                location: 'San Bernardino, CA',
                division: 'D2' as const,
                emoji: 'mountains',
            },
            {
                schoolName: 'Nova Southeastern University',
                location: 'Davie, FL',
                division: 'D2' as const,
                emoji: 'waves',
            },
            {
                schoolName: 'Grand Valley State',
                location: 'Allendale, MI',
                division: 'D2' as const,
                emoji: 'mountains',
            },
            {
                schoolName: 'Winona State University',
                location: 'Winona, MN',
                division: 'D2' as const,
                emoji: 'pine',
            },
            {
                schoolName: 'University of Tampa',
                location: 'Tampa, FL',
                division: 'D2' as const,
                emoji: 'lightning',
            },
        ],
        D3: [
            {
                schoolName: 'Williams College',
                location: 'Williamstown, MA',
                division: 'D3' as const,
                emoji: 'mountains',
            },
            {
                schoolName: 'Middlebury College',
                location: 'Middlebury, VT',
                division: 'D3' as const,
                emoji: 'maple',
            },
            {
                schoolName: 'Amherst College',
                location: 'Amherst, MA',
                division: 'D3' as const,
                emoji: 'graduation',
            },
            {
                schoolName: 'Bowdoin College',
                location: 'Brunswick, ME',
                division: 'D3' as const,
                emoji: 'waves',
            },
            {
                schoolName: 'Carleton College',
                location: 'Northfield, MN',
                division: 'D3' as const,
                emoji: 'wheat',
            },
            {
                schoolName: 'Pomona College',
                location: 'Claremont, CA',
                division: 'D3' as const,
                emoji: 'palm',
            },
        ],
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <TopCollegesHeader />
                <DivisionSelector selectedDivision={selectedDivision} setSelectedDivision={setSelectedDivision} />
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
                    {colleges[selectedDivision].map((college) => (
                        <CollegeCard key={college.schoolName} {...college} emojis={emojis} />
                    ))}
                </div>
                <ViewMoreTopCollegesButton />
            </div>
        </section>
    );
}

function TopCollegesHeader() {
    return (
        <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Top Colleges &amp; Universities</h2>
            <p className="text-xl text-gray-600">Explore top institutions across all NCAA divisions</p>
        </div>
    );
}

function ViewMoreTopCollegesButton() {
    return (
        <div className="mt-8 flex items-center justify-center">
            <Button
                size="lg"
                className="cursor-pointer rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
            >
                View More Top Colleges
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
    );
}

function DivisionSelector({
    selectedDivision,
    setSelectedDivision,
}: {
    selectedDivision: 'D1' | 'D2' | 'D3';
    setSelectedDivision: (division: 'D1' | 'D2' | 'D3') => void;
}) {
    const divisions: Array<'D1' | 'D2' | 'D3'> = ['D1', 'D2', 'D3'];

    return (
        <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-1 rounded-lg bg-white p-1 shadow-md">
                {divisions.map((division) => (
                    <DivisionSelectorButton
                        key={division}
                        division={division}
                        selectedDivision={selectedDivision}
                        setSelectedDivision={setSelectedDivision}
                    />
                ))}
            </div>
        </div>
    );
}

function DivisionSelectorButton({
    division,
    selectedDivision,
    setSelectedDivision,
}: {
    division: 'D1' | 'D2' | 'D3';
    selectedDivision: 'D1' | 'D2' | 'D3';
    setSelectedDivision: (division: 'D1' | 'D2' | 'D3') => void;
}) {
    return (
        <button
            onClick={() => setSelectedDivision(division)}
            className={`rounded-md px-6 py-3 font-semibold transition-all duration-200 ${
                selectedDivision === division ? 'bg-blue-600 text-white shadow-sm' : 'cursor-pointer text-gray-700 hover:text-blue-600'
            }`}
        >
            Division {division}
        </button>
    );
}

function CollegeCard({
    schoolName,
    location,
    division,
    emoji,
    emojis,
}: {
    schoolName: string;
    location: string;
    division: 'D1' | 'D2' | 'D3';
    emoji: string;
    emojis: Record<string, string>;
}) {
    return (
        <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-2xl">{emojis[emoji] || '🏀'}</div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{schoolName}</h3>
                        <p className="text-sm text-gray-600">{location}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    Division {division}
                </span>
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800">
                    View Details
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

function Blog() {
    const blogs = [
        {
            title: 'Understanding NCAA Recruiting Rules: A Complete Guide for 2024',
            length: '5 min read',
            date: 'March 15, 2024',
            imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=250&fit=crop',
            category: 'NCAA Rules',
        },
        {
            title: 'How to Create a Standout Athletic Resume',
            length: '7 min read',
            date: 'March 12, 2024',
            imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&amp;h=250&amp;fit=crop',
            category: 'Recruiting Tips',
        },
        {
            title: 'The Transfer Portal: What Student-Athletes Need to Know',
            length: '6 min read',
            date: 'March 10, 2024',
            imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
            category: 'Transfer Portal',
        },
        {
            title: 'Building Relationships with College Coaches',
            length: '4 min read',
            date: 'March 8, 2024',
            imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
            category: 'Coach Relations',
        },
    ];
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <BlogHeader />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.title} {...blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BlogHeader() {
    return (
        <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600">Stay informed with expert insights, tips, and updates on college recruiting</p>
        </div>
    );
}

function BlogCard({ title, length, date, imageUrl, category }: { title: string; length: string; date: string; imageUrl: string; category: string }) {
    return (
        <article className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="h-48 w-full overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" src={imageUrl} alt={title} />
            </div>
            <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                    <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">{category}</span>
                    <span className="text-xs text-gray-500">{length}</span>
                </div>
                <h3 className="mb-3 text-xl leading-tight font-bold text-gray-900 transition-colors hover:text-blue-600">{title}</h3>
                <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">{date}</time>
                    <button className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800">Read More →</button>
                </div>
            </div>
        </article>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-900 py-12 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="mb-4 text-xl font-bold">Company Name</h3>
                        <p className="mb-4 max-w-md text-gray-300">
                            Your trusted partner in recruiting excellence. We connect top talent with outstanding opportunities.
                        </p>
                        <div className="flex space-x-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">contact@company.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span className="text-sm">(555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Resources</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a className="transition-colors hover:text-white" href="#">
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
                    <p className="text-sm text-gray-400">© 2024 Company Name. All rights reserved.</p>
                    <div className="mt-4 flex space-x-6 md:mt-0">
                        <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#">
                            Facebook
                        </a>
                        <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#">
                            Twitter
                        </a>
                        <a className="text-sm text-gray-400 transition-colors hover:text-white" href="#">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
