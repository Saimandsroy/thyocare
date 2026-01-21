import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/images/rhm-logo.png"
                                alt="RHM India Logo"
                                width={60}
                                height={60}
                                className="h-14 w-auto bg-white rounded-lg p-1"
                            />
                            <div>
                                <p className="font-bold text-lg">RHM India</p>
                                <p className="text-xs text-gray-400">Diagnostic Centre</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            Your trusted partner for accurate and affordable pathology services.
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                            <Image
                                src="/images/manish-gandhi.jpg"
                                alt="Manish Gandhi"
                                width={32}
                                height={32}
                                className="rounded-full border border-yellow-400 object-cover"
                                style={{ width: '32px', height: '32px' }}
                            />
                            <div>
                                <p className="text-sm font-medium text-white">Manish Gandhi</p>
                                <p className="text-xs text-gray-500">Founder</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs">
                            Powered by Thyrocare Technologies Ltd.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#packages" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Packages
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Packages */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Health Packages</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">Aarogyam C Pro - ₹1,399</li>
                            <li className="text-gray-400 text-sm">Aarogyam D Pro - ₹2,249</li>
                            <li className="text-gray-400 text-sm">Aarogyam XL Plus - ₹4,999</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">9323400152 / 9820290692</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">support@thyrocare.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Mon-Sat: 8AM-6PM<br />Sun: 8AM-12PM</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Borivali (West), Mumbai - 400092</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} RHM India Diagnostic Centre. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
