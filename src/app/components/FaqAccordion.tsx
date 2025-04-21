'use client';
import React, { useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "How do I know if a product is available in boutiques?",
    answer:
      "You can query the status of your orders any time in My Orders. If you’re not registered, use your email and order number."
  },
  {
    question: "How can I find the prices or get other information about Chanel products?",
    answer:
      "You can inquire via boutiques or online service centers for up-to-date info."
  },
  {
    question: "How many collections come out every year?",
    answer:
      "Chanel launches several collections per year, including Cruise, Fall/Winter, Spring/Summer, and Métiers d’art."
  },
  {
    question: "Are all of the fashion collections featured on the website?",
    answer:
      "Not all collections are fully displayed online. Visit boutiques for more exclusive pieces."
  }
];

const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      {/* Título de FAQ con color negro */}
      <h1 className="text-center text-black lg:text-4xl text-3xl font-semibold">FAQ's</h1>

      <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
        <div className="md:mb-0 mb-8 text-center md:text-left">
          {/* Título de Preguntas con color negro */}
          <h2 className="font-medium text-xl mb-4 text-white">Questions</h2>
          <p className="text-sm text-gray-600 md:w-8/12 mx-auto md:mx-0">
            If you don’t find your answer, please contact us or leave a message — we’ll be happy to assist you.
          </p>
        </div>
      </div>

      <div className="lg:w-8/12 w-full mx-auto">
        {questions.map((q, index) => (
          <div key={index}>
            <hr className="w-full my-8" />
            <div className="w-full md:px-6">
              <div className="flex justify-between items-center w-full cursor-pointer" onClick={() => toggle(index)}>
                {/* Pregunta con color negro */}
                <p className="flex items-center font-medium text-base text-black">
                  <span className="mr-4 font-semibold text-lg text-black">Q{index + 1}.</span> {q.question}
                </p>
                <button aria-label="toggle">
                  {openIndex === index ? (
                    <span className="text-2xl text-black">−</span>
                  ) : (
                    <span className="text-2xl text-black">+</span>
                  )}
                </button>
              </div>
              {openIndex === index && (
                <div className="mt-6">
                  {/* Respuesta con color negro */}
                  <p className="text-base text-black">{q.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
