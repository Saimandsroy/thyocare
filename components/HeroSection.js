import BookingForm from './BookingForm';

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen pt-16">
            {/* Medical Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=2000')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-blue-900/90"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-16">
                {/* Mobile: Offer + Form First, Desktop: Side by Side */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

                    {/* Mobile Only: Offer Text Above Form */}
                    <div className="lg:hidden text-white text-center mb-4">
                        {/* Offer Badge */}
                        <div className="inline-flex items-center space-x-2 bg-red-500 px-3 py-1.5 rounded-full mb-3">
                            <span className="text-xs font-bold">🎉 NEW YEAR OFFER 2025</span>
                        </div>

                        <h1 className="text-2xl font-bold leading-tight">
                            Avail Upto{' '}
                            <span className="text-yellow-400 text-4xl">50%</span>{' '}
                            <span className="text-yellow-400">OFF</span>
                        </h1>

                        <p className="text-sm text-yellow-300 font-semibold mt-1">
                            Till 31st December 2025
                        </p>

                        <p className="text-sm text-blue-100 mt-1">
                            Take a Step Towards a Healthy Life
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
                        {/* Offer Badge */}
                        <div className="inline-flex items-center space-x-2 bg-red-500 px-4 py-2 rounded-full mb-4">
                            <span className="text-sm font-bold">🎉 NEW YEAR OFFER 2025</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Avail Upto{' '}
                            <span className="text-yellow-400 text-6xl lg:text-7xl">50%</span>{' '}
                            <span className="text-yellow-400">OFF</span>
                        </h1>

                        <p className="text-lg text-yellow-300 font-semibold mb-2">
                            Till 31st December 2025
                        </p>

                        <p className="text-xl text-blue-100 mb-6">
                            New Year, New Resolution<br />
                            Take a Step Towards a Healthy Life
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
