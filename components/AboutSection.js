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
                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/center-signage.jpg"
                                alt="RHM India Diagnostic Centre"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden sm:block">
                            <div className="flex items-center space-x-3">
                                <Shield className="w-10 h-10 text-blue-600" />
                                <div>
                                    <p className="font-bold text-gray-900">Certified Lab</p>
                                    <p className="text-xs text-gray-500">NABL & CAP Accredited</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Details */}
                    <div>
                        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            About RHM India
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            RHM India Diagnostic Centre
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Founded by <strong className="text-gray-900">Manish Gandhi</strong>, RHM India Diagnostic Centre, powered by Thyrocare, is your trusted partner for accurate and affordable pathology services.
                            We bring world-class diagnostic facilities to your neighborhood, ensuring precise reports and timely delivery.
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

                        {/* Founder Card */}
                        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 border border-teal-100">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/images/manish-gandhi.jpg"
                                    alt="Manish Gandhi - Founder"
                                    width={60}
                                    height={60}
                                    className="rounded-full border-2 border-teal-500 object-cover"
                                    style={{ width: '60px', height: '60px' }}
                                />
                                <div>
                                    <p className="font-bold text-gray-900">Manish Gandhi</p>
                                    <p className="text-sm text-teal-600">Founder & Managing Director</p>
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
