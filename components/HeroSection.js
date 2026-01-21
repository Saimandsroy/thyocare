import Image from 'next/image';
import BookingForm from './BookingForm';

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen pt-16">
            {/* Medical Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('/images/center-interior.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/75 to-blue-900/90"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
                {/* Mobile: Offer + Form First, Desktop: Side by Side */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

                    {/* Mobile Only: Text Above Form */}
                    <div className="lg:hidden text-white text-center mb-4">
                        {/* Founder Image - Mobile */}
                        <div className="flex justify-center mb-3">
                            <div className="relative">
                                <Image
                                    src="/images/manish-gandhi.jpg"
                                    alt="Manish Gandhi - Founder"
                                    width={80}
                                    height={80}
                                    className="rounded-full border-3 border-yellow-400 shadow-lg object-cover"
                                    style={{ width: '80px', height: '80px' }}
                                />
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                    Founder
                                </div>
                            </div>
                        </div>

                        <p className="text-yellow-300 text-sm font-semibold mb-1">Manish Gandhi</p>

                        {/* Offer Badge */}
                        <div className="inline-flex items-center space-x-2 bg-blue-500/80 px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm">
                            <span className="text-xs font-bold">🏥 RHM India Diagnostic Centre</span>
                        </div>

                        <h1 className="text-2xl font-bold leading-tight mb-2">
                            Advanced Pathology<br />
                            <span className="text-yellow-400">Services</span>
                        </h1>

                        <p className="text-sm text-blue-100 mt-1">
                            Powered by Thyrocare
                        </p>

                        {/* Trust Indicators - Compact for Mobile */}
                        <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs">
                            <div className="bg-white/10 backdrop-blur px-3 py-1 rounded-lg">
                                NABL Accredited
                            </div>
                            <div className="bg-white/10 backdrop-blur px-3 py-1 rounded-lg">
                                CAP Certified
                            </div>
                            <div className="bg-white/10 backdrop-blur px-3 py-1 rounded-lg">
                                6 Hrs Reports
                            </div>
                        </div>
                    </div>

                    {/* Booking Form - Shows After Offer Text on Mobile */}
                    <div id="packages" className="lg:order-2 lg:flex-1 flex justify-center mb-6 lg:mb-0">
                        <BookingForm />
                    </div>

                    {/* Desktop Only: Full Content on Left */}
                    <div className="hidden lg:block lg:order-1 lg:flex-1 text-white">
                        {/* Founder Feature - Desktop */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <Image
                                    src="/images/manish-gandhi.jpg"
                                    alt="Manish Gandhi - Founder"
                                    width={100}
                                    height={100}
                                    className="rounded-full border-4 border-yellow-400 shadow-xl object-cover"
                                    style={{ width: '100px', height: '100px' }}
                                />
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 gradient-rhm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                                    Founder
                                </div>
                            </div>
                            <div>
                                <p className="text-yellow-400 text-2xl font-bold">Manish Gandhi</p>
                                <p className="text-blue-200 text-sm">Managing Director, RHM India</p>
                            </div>
                        </div>

                        {/* Offer Badge */}
                        <div className="inline-flex items-center space-x-2 bg-blue-500/80 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
                            <span className="text-sm font-bold">🏥 Welcome to RHM India</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Your Trusted<br />
                            <span className="text-yellow-400">Pathology Partner</span>
                        </h1>

                        <p className="text-xl text-blue-100 mb-6 font-light">
                            Powered by Thyrocare Technologies<br />
                            <span className="text-lg opacity-90">Accurate Reports. Affordable Prices.</span>
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                                <span className="font-semibold">NABL</span> Accredited
                            </div>
                            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                                <span className="font-semibold">CAP</span> Certified
                            </div>
                            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                                Reports in <span className="font-semibold">6 Hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
