import React, { useState } from 'react';
import { 
  Droplets, 
  ShieldPlus, 
  Apple, 
  Brain, 
  Heart, 
  Activity,
  ArrowRight,
  Plus
} from 'lucide-react';

const NutritionalValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nutritionInfo = [
    {
      title: "Essential Oils",
      icon: Droplets,
      description: "Rich in beneficial compounds that aid digestion and boost immunity",
      benefits: ["Digestive Support", "Natural Antimicrobial", "Anti-inflammatory"],
      color: "bg-gradient-to-br from-blue-400 to-cyan-400",
      lightColor: "bg-blue-50",
      textColor: "text-blue-500",
      borderColor: "border-blue-200"
    },
    {
      title: "Antioxidants",
      icon: ShieldPlus,
      description: "Powerful compounds that protect cells from oxidative stress",
      benefits: ["Cell Protection", "Anti-aging Properties", "Immune Support"],
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
      lightColor: "bg-purple-50",
      textColor: "text-purple-500",
      borderColor: "border-purple-200"
    },
    {
      title: "Vitamins & Minerals",
      icon: Apple,
      description: "Essential nutrients vital for overall health and wellness",
      benefits: ["Iron Rich", "Vitamin E", "Calcium & Magnesium"],
      color: "bg-gradient-to-br from-emerald-400 to-teal-400",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-500",
      borderColor: "border-emerald-200"
    }
  ];

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % nutritionInfo.length);
  };

  const activeItem = nutritionInfo[activeIndex];
  const Icon = activeItem.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - Interactive Visual */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent opacity-50 rounded-3xl" />
            
            {/* Main content area */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full translate-x-20 translate-y-20" />
              
              {/* Content */}
              <div className="relative">
                <div className={`${activeItem.color} p-8 rounded-2xl shadow-lg mb-8 transform transition-all duration-500 hover:scale-105`}>
                  <Icon className="w-24 h-24 text-white" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {activeItem.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className={`${activeItem.lightColor} ${activeItem.borderColor} border p-4 rounded-xl
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${activeItem.color} p-1.5 rounded-lg mt-0.5`}>
                          <Plus className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className={`text-5xl font-bold ${activeItem.textColor} tracking-tight mb-4 transition-colors duration-300`}>
                {activeItem.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            {/* Health Impact Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className={`p-4 rounded-xl ${activeItem.lightColor} border ${activeItem.borderColor}`}>
                <Brain className={`w-6 h-6 ${activeItem.textColor} mb-2`} />
                <span className="text-sm font-medium text-gray-700">Brain Health</span>
              </div>
              <div className={`p-4 rounded-xl ${activeItem.lightColor} border ${activeItem.borderColor}`}>
                <Heart className={`w-6 h-6 ${activeItem.textColor} mb-2`} />
                <span className="text-sm font-medium text-gray-700">Heart Health</span>
              </div>
              <div className={`p-4 rounded-xl ${activeItem.lightColor} border ${activeItem.borderColor}`}>
                <Activity className={`w-6 h-6 ${activeItem.textColor} mb-2`} />
                <span className="text-sm font-medium text-gray-700">Energy Boost</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="pt-6">
              <button
                onClick={nextItem}
                className={`${activeItem.color} text-white px-8 py-4 rounded-xl
                  flex items-center gap-3 hover:shadow-lg transition-all duration-300
                  transform hover:-translate-y-0.5`}
              >
                Explore Next Nutrient
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalValues;