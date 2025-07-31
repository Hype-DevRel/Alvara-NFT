"use client";

import { useState } from "react";
import { HelpCircle, X } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2A1B3D] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 text-left flex justify-between items-center hover:text-[#D8CDE2] transition-colors duration-200"
      >
        <span className="text-[#D8CDE2] text-sm font-medium">{question}</span>
        <span className="text-[#D8CDE2] text-lg transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-3">
          <p className="text-[#A8A0B0] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FloatingFAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const faqData = [
    {
      question: "How many NFTs can I mint?",
      answer: "You can mint up to 5 NFTs per wallet address. This limit helps ensure fair distribution and prevents hoarding."
    },
    {
      question: "What perks do I get with my NFT?",
      answer: "NFT holders gain access to exclusive community features, governance voting rights, early access to new features, and special rewards within the Alvara ecosystem."
    },
    {
      question: "Can I sell my NFT?",
      answer: "Yes, you can freely trade your NFTs on supported marketplaces. However, some perks may be tied to holding the NFT for a minimum period."
    },
    {
      question: "Is there a lock period with veALVA?",
      answer: "Yes, veALVA tokens have a lock period that determines your voting power and rewards. Longer lock periods provide greater benefits and influence."
    },
    {
      question: "How much does it cost?",
      answer: "Minting costs vary based on current gas fees and network conditions. The base minting fee is 0.05 ETH, plus gas fees for the transaction."
    }
  ];

  return (
    <>
      {/* Floating FAQ Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#D73D80] hover:bg-[#D73D80]/80 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        aria-label="FAQ"
      >
        <HelpCircle className="w-6 h-6" />
      </button>

      {/* FAQ Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#1A0F2E] rounded-lg border border-[#2A1B3D] max-w-md w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#2A1B3D]">
              <h2 className="text-[#D8CDE2] text-lg font-semibold">
                FAQ
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#A8A0B0] hover:text-[#D8CDE2] transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* FAQ Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 