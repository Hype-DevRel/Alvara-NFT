"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function SuccessButton() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <button
      onClick={handleSuccess}
      className={`font-semibold py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight-950 ${
        isSuccess
          ? "bg-green-600 text-white focus:ring-green-500"
          : "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500"
      }`}
    >
      {isSuccess ? (
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4" />
          Success!
        </div>
      ) : (
        "Success"
      )}
    </button>
  );
}
