'use client';

import { useState } from 'react';
import { Check, AlertCircle, Loader2 } from 'lucide-react';

// Google Apps Script URL - Your deployed script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzNS4xvUo3S7qG7V0Jh7PuEuRDWrQPASGN6LvwqhM3wQtpOp29Wkvo2MU7EcPWFIL9P/exec';

// Package options based on uploaded images
const packages = [
    {
        id: 'aarogyam-c-pro',
        name: 'Aarogyam C Pro With UTSH (72 Parameters)',
        price: 1399,
        originalPrice: 2799,
        tests: [
            'Thyroid Profile (3)',
            'Lipid Profile (10)',
            'Liver Profile (12)',
            'Kidney Profile (7)',
            'Iron Deficiency Profile (4)',
            'Serum Electrolytes (2)',
            'Diabetes Profile (2)',
            'CBC (28)',
            'Vitamin Profile (2)',
            'Testosterone',
            'High Sensitivity C-reactive Protein (hsCRP)'
        ]
    },
    {
        id: 'aarogyam-d-pro',
        name: 'Aarogyam D Pro With UTSH (86 Parameters)',
        price: 2249,
        originalPrice: 4499,
        tests: [
            'All Aarogyam C Pro Tests (72 Parameters)',
            'Cardiac Risk Markers (4)',
            'Homocysteine',
            'Pancreas Profile (2)',
            'Fructosamine',
            'Blood Ketone (D3HB)',
            'Serum Zinc',
            'Serum Copper',
            'Magnesium',
            'Ferritin',
            'Folate'
        ]
    },
    {
        id: 'aarogyam-xl-plus',
        name: 'Aarogyam XL Plus With UTSH (163 Parameters)',
        price: 4999,
        originalPrice: 10174,
        tests: [
            'All Aarogyam D Pro Tests (86 Parameters)',
            'Cystatin C',
            'Alpha-1-Antitrypsin',
            'Arthritis Profile (2)',
            'Lp-PLA2',
            'Insulin',
            'Elements 22 (Toxic and Nutrients)',
            'Complete Vitamins Profile (11)',
            'Steroid Profile (9)',
            'Troponin I Heart Attack Risk',
            'Complete Urine Analysis (24)',
            'Fasting Blood Sugar'
        ]
    }
];

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
        package: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [statusMessage, setStatusMessage] = useState('');

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!formData.package) {
            newErrors.package = 'Please select a package';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setSubmitStatus(null);

        try {
            // Get selected package details
            const selectedPackage = packages.find(p => p.id === formData.package);

            const payload = {
                name: formData.name,
                mobile: formData.mobile,
                address: formData.address,
                package: selectedPackage?.name || formData.package,
                price: selectedPackage?.price || 0,
                timestamp: new Date().toISOString()
            };

            // Send to Google Apps Script using no-cors mode
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            // Since no-cors doesn't return response, assume success
            setSubmitStatus('success');
            setStatusMessage('Booking submitted successfully! We will contact you shortly.');

            // Reset form
            setFormData({
                name: '',
                mobile: '',
                address: '',
                package: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
                setStatusMessage('');
            }, 5000);

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setStatusMessage('Something went wrong. Please try again or call us directly.');

            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
                setStatusMessage('');
            }, 5000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Book Your Test</h3>
            <p className="text-gray-600 mb-6">Fill the form below and we'll contact you</p>

            {/* Status Message */}
            {submitStatus && (
                <div
                    className={`mb-6 p-4 rounded-lg flex items-start space-x-3 toast-enter ${submitStatus === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                >
                    {submitStatus === 'success' ? (
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{statusMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                </div>

                {/* Mobile Field */}
                <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number *
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        maxLength={10}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
                    />
                    {errors.mobile && (
                        <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                    )}
                </div>

                {/* Address Field */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete address"
                        rows={3}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none`}
                    />
                    {errors.address && (
                        <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                    )}
                </div>

                {/* Package Selection */}
                <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Package *
                    </label>
                    <select
                        id="package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.package ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white`}
                    >
                        <option value="">-- Select a Package --</option>
                        {packages.map(pkg => (
                            <option key={pkg.id} value={pkg.id}>
                                {pkg.name} - ₹{pkg.price.toLocaleString()}
                            </option>
                        ))}
                    </select>
                    {errors.package && (
                        <p className="mt-1 text-sm text-red-500">{errors.package}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${isLoading
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center space-x-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting...</span>
                        </span>
                    ) : (
                        'Book Now'
                    )}
                </button>
            </form>

            <p className="mt-4 text-xs text-gray-500 text-center">
                *10-12 hrs fasting is essential for accurate results
            </p>
        </div>
    );
}
