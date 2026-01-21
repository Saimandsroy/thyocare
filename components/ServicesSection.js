'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

// Package data with all tests from the uploaded image
const packages = [
    {
        id: 'aarogyam-c-pro',
        name: 'Aarogyam C Pro With UTSH',
        parameters: 72,
        price: 1399,
        originalPrice: 2799,
        tests: {
            'Thyroid Profile (3)': ['Ultrasensitive TSH (UTSH)', 'Total Thyroxine (T4)', 'Total Triiodothyronine (T3)'],
            'Lipid Profile (10)': ['Total Cholesterol', 'HDL Cholesterol - Direct', 'LDL Cholesterol - Direct', 'LDL / HDL Ratio', 'NON-HDL Cholesterol', 'TC/ HDL Cholesterol Ratio', 'Triglycerides', 'VLDL Cholesterol', 'HDL / LDL Ratio', 'TRIG / HDL Ratio'],
            'Liver Profile (12)': ['Alkaline Phosphatase', 'Bilirubin - Direct', 'Bilirubin - Total', 'Bilirubin - Indirect', 'Gamma Glutamyl Transferase', 'Protein - Total', 'Serum Albumin', 'Serum Globulin', 'SGOT (AST)', 'SGPT (ALT)', 'Serum Albumin / Globulin Ratio', 'SGOT / SGPT Ratio'],
            'Kidney Profile (7)': ['BUN/Creatinine Ratio', 'Blood Urea Nitrogen (BUN)', 'Calcium', 'Serum Creatinine', 'Uric Acid', 'Urea (Calculated)', 'Urea / Sr. Creatinine Ratio'],
            'Iron Deficiency Profile (4)': ['Total Iron Binding Capacity (TIBC)', '% Transferrin Saturation', 'Iron', 'Unsat. Iron-binding Capacity'],
            'Serum Electrolytes (2)': ['Sodium', 'Chloride'],
            'Diabetes Profile (2)': ['Fasting Blood Sugar', 'HbA1c'],
            'CBC (28)': ['Hemoglobin', 'RBC Count', 'WBC Count', 'Platelet Count', 'PCV', 'MCV', 'MCH', 'MCHC', 'RDW', 'Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils', 'And more...'],
            'Vitamin Profile (2)': ['Vitamin D (Total)', 'Vitamin B12'],
            'Other Tests': ['Testosterone', 'High Sensitivity C-reactive Protein (hsCRP)']
        }
    },
    {
        id: 'aarogyam-d-pro',
        name: 'Aarogyam D Pro With UTSH',
        parameters: 86,
        price: 2249,
        originalPrice: 4499,
        tests: {
            'All Aarogyam C Pro Tests': ['All 72 Parameters from C Pro Package'],
            'Cardiac Risk Markers (4)': ['Lipoprotein - A', 'Apolipoprotein - A1', 'Apolipoprotein - B', 'Apo B/Apo A1 Ratio'],
            'Homocysteine': ['Homocysteine'],
            'Pancreas Profile (2)': ['Serum Amylase', 'Serum Lipase'],
            'Fructosamine': ['Fructosamine'],
            'Blood Ketone (D3HB)': ['Blood Ketone (D3HB)'],
            'Minerals': ['Serum Zinc', 'Serum Copper', 'Magnesium'],
            'Additional Tests': ['Ferritin', 'Folate']
        }
    },
    {
        id: 'aarogyam-xl-plus',
        name: 'Aarogyam XL Plus With UTSH',
        parameters: 163,
        price: 4999,
        originalPrice: 10174,
        tests: {
            'All Aarogyam D Pro Tests': ['All 86 Parameters from D Pro Package'],
            'Complete Urine Analysis (24)': ['Specific Gravity', 'Urinary Bilirubin', 'Urine Blood', 'Urobilinogen', 'Urinary Glucose', 'Urine Ketone', 'Urinary Leucocytes', 'Nitrite', 'pH', 'Urinary Protein', 'Appearance', 'Colour', 'And more...'],
            'Cystatin C': ['Cystatin C'],
            'Alpha-1-Antitrypsin': ['Alpha-1-Antitrypsin'],
            'Arthritis Profile (2)': ['Anti CCP (ACCP)', 'Antinuclear Antibodies (ANA)'],
            'Lp-PLA2': ['Lp-PLA2'],
            'Insulin': ['Insulin'],
            'Elements 22 (Toxic and Nutrients)': ['Toxic Metals', 'Aluminium', 'Arsenic', 'Barium', 'Cadmium', 'Caesium', 'Mercury', 'Lead', 'Tin', 'Bismuth', 'Nutrients', 'Cobalt', 'Chromium', 'And more...'],
            'Complete Vitamins Profile (11)': ['Vitamin A', 'Vitamin D2', 'Vitamin D3', 'Vitamin E', 'Vitamin B1 / Thiamine', 'Vitamin B2 / Riboflavin', 'Vitamin B3 / Niacin', 'Vitamin B5 / Pantothenic Acid', 'Vitamin B6 / Pyridoxal-5-phosphate', 'Vitamin B7 / Biotin', 'And more...'],
            'Steroid Profile (10)': ['17-hydroxyprogesterone', 'Testosterone', 'Androstenedione', 'Cortisol', 'Corticosterone', 'Deoxycortisol', 'Dehydroepiandorsterone', 'DHEA - Sulphate (DHEAS)', 'Estradiol', 'Progesterone'],
            'Troponin I Heart Attack Risk': ['Troponin I']
        }
    }
];

export default function ServicesSection() {
    const [expandedPackage, setExpandedPackage] = useState(null);
    const [expandedCategory, setExpandedCategory] = useState({});

    const togglePackage = (packageId) => {
        setExpandedPackage(expandedPackage === packageId ? null : packageId);
        setExpandedCategory({});
    };

    const toggleCategory = (packageId, category) => {
        const key = `${packageId}-${category}`;
        setExpandedCategory(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <section id="packages-details" className="py-16 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block gradient-rhm text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-lg shadow-teal-500/20">
                        Our Packages
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Health Checkup <span className="text-gradient">Packages</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Click on a package to see all included tests
                    </p>
                    <p className="text-sm text-amber-600 mt-3 font-medium bg-amber-50 inline-block px-4 py-1.5 rounded-full">
                        ⚠️ 10-12 hrs fasting is essential
                    </p>
                </div>

                {/* Package Dropdowns */}
                <div className="space-y-5">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-2xl shadow-premium overflow-hidden border border-gray-100 glow-hover"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Package Header - Clickable */}
                            <button
                                onClick={() => togglePackage(pkg.id)}
                                className="w-full px-5 sm:px-6 py-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-slate-50 hover:to-white transition-all duration-300"
                            >
                                <div className="flex-1 text-left">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {pkg.name}
                                        </h3>
                                        <span className="gradient-rhm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                            {pkg.parameters} Tests
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl font-bold text-teal-600">₹{pkg.price.toLocaleString()}</span>
                                        <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                                        <span className="text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white px-2.5 py-1 rounded-full font-semibold shadow-sm">
                                            {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-4 p-2 rounded-full bg-gray-100 group-hover:bg-teal-100 transition-colors">
                                    {expandedPackage === pkg.id ? (
                                        <ChevronUp className="w-5 h-5 text-teal-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    )}
                                </div>
                            </button>

                            {/* Expanded Tests */}
                            {expandedPackage === pkg.id && (
                                <div className="border-t border-gray-200 px-4 sm:px-6 py-4 bg-gray-50">
                                    <div className="space-y-2">
                                        {Object.entries(pkg.tests).map(([category, tests]) => {
                                            const categoryKey = `${pkg.id}-${category}`;
                                            const isExpanded = expandedCategory[categoryKey];

                                            return (
                                                <div key={category} className="bg-white rounded-lg border border-gray-200">
                                                    <button
                                                        onClick={() => toggleCategory(pkg.id, category)}
                                                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                                    >
                                                        <span className="font-medium text-gray-800 text-sm sm:text-base">
                                                            • {category}
                                                        </span>
                                                        {isExpanded ? (
                                                            <ChevronUp className="w-4 h-4 text-gray-400" />
                                                        ) : (
                                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                                        )}
                                                    </button>

                                                    {isExpanded && (
                                                        <div className="px-4 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-1">
                                                            {tests.map((test, idx) => (
                                                                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                                                    <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                                                    <span>{test}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
