import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is Dreyna?',
    answer: 'Dreyna offers a range of tools for Valorant players, including an aimbot, ESP with a skin changer, and a spoofer for bypassing hardware bans.'
  },
  {
    question: 'How do I purchase a Dreyna product?',
    answer: 'Visit the product page for the specific tool you want to purchase, select your preferred subscription duration, and complete the checkout process.'
  },
  {
    question: 'Is Dreyna safe to use?',
    answer: "Dreyna's tools are designed with external bypass mechanisms to enhance user safety. However, users are reminded that any third-party software carries inherent risks."
  },
  {
    question: 'What is a spoofer?',
    answer: 'A spoofer changes your hardware identifiers to help avoid detection and bans in Valorant.'
  },
  {
    question: 'How can I access support?',
    answer: 'For any issues or questions, join our public Discord server via the icon in the navbar, where our support team is ready to assist.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/30"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'py-4 border-t border-gray-700' : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;