"use client";

import { useState } from "react";

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
        className="w-full py-4 text-left flex justify-between items-center hover:text-[#D8CDE2] transition-colors duration-200"
      >
        <span className="text-[#D8CDE2] text-sm font-medium">{question}</span>
        <span className="text-[#D8CDE2] text-lg transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-[#A8A0B0] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
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
    <section className="bg-[#13061F] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-[#D8CDE2] text-2xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A8A0B0] text-sm">
            Everything you need to know about Alvara NFTs
          </p>
        </div>
        <div className="bg-[#1A0F2E] rounded-lg border border-[#2A1B3D] p-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 