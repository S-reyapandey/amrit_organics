import React, { useState } from 'react';
import { 
  Weight, Apple, Coffee,
  ShieldCheck, Leaf, Plus, Minus,
  HeartPulse,
  Scale,
  GlassWater,
  Pill
} from 'lucide-react';

const Benefit = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      title: "Supports Weight Loss",
      icon: Weight,
      description: "Psyllium husk is a natural appetite suppressant, helping you feel full longer. By curbing hunger and reducing calorie intake, it supports sustainable weight loss efforts."
    },
    {
      title: "Improves Digestive Health",
      icon: Apple,
      description: "Psyllium fiber helps regulate bowel movements and alleviate digestive issues like constipation and bloating. Its gentle yet effective action makes it ideal for maintaining gut health."
    },
    {
      title: "Promotes Heart Health",
      icon: HeartPulse,
      description: "The soluble fiber in psyllium binds to cholesterol in the digestive tract, lowering bad LDL cholesterol and improving heart health."
    },
    {
      title: "Regulates Blood Sugar Levels",
      icon: Scale,
      description: "For those managing diabetes or prediabetes, psyllium husk helps stabilize blood sugar levels by slowing carbohydrate absorption."
    }
  ];

  const usageGuide = [
    {
      title: "Daily Drink",
      icon: Coffee,
      description: "Mix 1-2 teaspoons of psyllium husk powder with water or juice and drink immediately."
    },
    {
      title: "Smoothies and Shakes",
      icon: GlassWater,
      description: "Add psyllium fiber to your favorite smoothie for an extra health boost."
    },
    {
      title: "Psyllium Tablets",
      icon: Pill,
      description: "Convenient for on-the-go consumption."
    },
    {
      title: "Baking",
      icon: Leaf,
      description: "Use psyllium husk powder as a thickening agent in gluten-free recipes."
    }
  ];

  const faqs = [
    {
      question: "What is psyllium husk used for?",
      answer: "Psyllium husk is used for weight loss, improving digestion, lowering cholesterol, and stabilizing blood sugar levels."
    },
    {
      question: "How does psyllium husk benefit weight loss?",
      answer: "Psyllium husk absorbs water in the stomach, creating a feeling of fullness that reduces hunger and calorie intake."
    },
    {
      question: "Can psyllium husk powder help with digestion?",
      answer: "Yes, psyllium husk powder is an excellent source of fiber that promotes regular bowel movements and supports overall gut health."
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDF2F7]">
      <div className="relative bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white py-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627,0.632 L59.083,5.088 L54.627,9.544 L50.171,5.088 L54.627,0.632 Z M5.088,50.171 L0.632,54.627 L5.088,59.083 L9.544,54.627 L5.088,50.171 Z M54.627,50.171 L50.171,54.627 L54.627,59.083 L59.083,54.627 L54.627,50.171 Z M5.088,0.632 L9.544,5.088 L5.088,9.544 L0.632,5.088 L5.088,0.632 Z' fill='rgba(255,255,255,0.1)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 font-['Courgette']">
            What is Psyllium Husk? 
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <p className="text-xl text-[#1B4332] leading-relaxed">
          Psyllium husk is the outer layer of the psyllium seed, packed with soluble fiber. When mixed with water, it forms a gel-like substance that aids digestion, supports weight management, and promotes overall health. Available in forms like psyllium husk powder and psyllium husk tablets, this versatile fiber is easy to incorporate into your daily routine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#40916C]"
              >
                <div className="flex flex-col items-center text-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#95D5B2] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#1B4332]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B4332] font-['Manrope']">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-[#2D6A4F]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg p-12 shadow-lg mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1B4332] font-['Courgette']">
            Natural Usage Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {usageGuide.map((usage, index) => {
              const Icon = usage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#95D5B2] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-[#1B4332]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1B4332] font-['Manrope']">
                    {usage.title}
                  </h3>
                  <p className="text-[#2D6A4F] ">
                    {usage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1B4332] font-['Manrope']">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-[#40916C]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F8FAF9]"
                >
                  <span className="text-xl font-semibold text-[#1B4332]">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-6 h-6 text-[#40916C]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#40916C]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-[#2D6A4F] ">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-8">
            <Leaf className="w-12 h-12 text-[#40916C]" />
          </div>
          <h2 className="text-5xl font-bold mb-8 font-['Courgette']">
            Experience Nature's Purity
          </h2>
          <p className="text-2xl max-w-3xl mx-auto mb-8 text-white/90 font-['Signika']">
            Our organic psyllium husk is carefully cultivated and mindfully harvested 
            to bring you nature's finest quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;