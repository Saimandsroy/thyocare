'use client';

import Image from 'next/image';
import { useState } from 'react';

const facilityImages = [
    {
        src: '/images/center-signage.jpg',
        alt: 'RHM India Diagnostic Centre Entrance',
        title: 'Our Centre',
        span: 'col-span-2 row-span-2'
    },
    {
        src: '/images/center-doctor.jpg',
        alt: 'Dr. Vinodrai Gandhi at Work',
        title: 'Expert Care',
        span: 'col-span-1 row-span-1'
    },
    {
        src: '/images/center-interior.jpg',
        alt: 'Reception Area',
        title: 'Comfortable Waiting',
        span: 'col-span-1 row-span-1'
    },
    {
        src: '/images/center-reception.jpg',
        alt: 'Sample Collection Area',
        title: 'Modern Facility',
        span: 'col-span-2 row-span-1'
    }
];

export default function GallerySection() {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-lg shadow-teal-500/30">
                        Our Facility
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        A Glimpse Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">RHM India</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        State-of-the-art diagnostic facilities designed for your comfort and accurate testing.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
                    {facilityImages.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${image.span} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1`}
                            onClick={() => setActiveImage(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                                <p className="text-white/80 text-sm">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {activeImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
                        onClick={() => setActiveImage(null)}
                    >
                        <div className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={activeImage.src}
                                alt={activeImage.alt}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-white font-bold text-2xl">{activeImage.title}</h3>
                                <p className="text-white/80">{activeImage.alt}</p>
                            </div>
                        </div>
                        <button
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                            onClick={() => setActiveImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
