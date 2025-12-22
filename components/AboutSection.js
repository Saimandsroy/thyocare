import Image from 'next/image';
import { Award, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left - Image/Branding */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 text-white">
                            <div className="flex items-center space-x-4 mb-6">
                                <Image
                                    src="https://web-assets.thyrocare.com/thyrocare-booking-assets/_next/images/logo.webp"
                                    alt="Thyrocare Logo"
                                    width={180}
                                    height={50}
                                    className="h-12 w-auto bg-white rounded-lg p-2"
                                />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">
                                Tests You Can Trust
                            </h3>
                            <p className="text-blue-100 mb-6 leading-relaxed">
                                Thyrocare is India's first and most advanced Totally Automated Laboratory
                                having its presence in India and worldwide. We are NABL and CAP accredited,
                                ensuring the highest quality standards in diagnostic services.
                            </p>

                            {/* Accreditations */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <Shield className="w-10 h-10 mx-auto mb-2" />
                                    <p className="text-sm font-medium">NABL Accredited</p>
                                    <p className="text-xs text-blue-200">100% Labs Certified</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <Award className="w-10 h-10 mx-auto mb-2" />
                                    <p className="text-sm font-medium">CAP Certified</p>
                                    <p className="text-xs text-blue-200">Since 2007</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Details */}
                    <div>
                        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            About Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Your Trusted Partner in Healthcare
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With over two decades of experience, Thyrocare has been at the forefront of
                            preventive healthcare in India. Our commitment to accuracy, affordability,
                            and accessibility has made us the preferred choice for millions of customers.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Quick Reports</h4>
                                    <p className="text-gray-600 text-sm">98% reports delivered within 6 hours after samples reach the lab</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Home Collection</h4>
                                    <p className="text-gray-600 text-sm">Free home sample collection available across major cities</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Accurate & Reliable</h4>
                                    <p className="text-gray-600 text-sm">9 out of 10 doctors trust Thyrocare reports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        To Avail Service
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Address</h4>
                                    <p className="text-gray-600 text-sm">K-03, Gr Floor, Sumer Nagar 2 CHSL, Kora Kendra Flyover Bus Stop, S.V. Road, Borivali (West), Mumbai - 400092</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Phone</h4>
                                    <p className="text-gray-600 text-sm">9323400152 / 9820290692</p>
                                    <p className="text-gray-500 text-xs mt-1">Mon-Sat: 8 AM - 6 PM | Sun: 8 AM - 12 PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600 text-sm">support@thyrocare.com</p>
                                    <p className="text-gray-500 text-xs mt-1">We'll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
