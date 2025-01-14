import { useState } from "react";

const Section = ({ question, answer, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-orange-400 mb-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold text-black">{question}</h3>
        {/* Toggle button text based on visibility */}
        {isVisible ? (
          <button
            onClick={() => setIsVisible(false)}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => setIsVisible(true)}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Show
          </button>
        )}
      </div>

      {/* Display the answer if visible */}
      {isVisible && (
        <div className="bg-gray-50 p-4 border-t border-gray-300 rounded-b-lg">
          <p className="text-black">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [sectionsConfig, setSectionConfig] = useState("color");
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">FAQ Section</h2>
      <Section
        question={"What is your name?"}
        answer={"Bhushan"}
        isVisible={sectionsConfig == "name"}
        // isVisible value will be 1 because both the side have true
        // now passing the value true mean 1
        setIsVisible={() => setSectionConfig("name")}
      />
      <Section
        question={"What is your favorite color?"}
        answer={"Blue"}
        isVisible={sectionsConfig == "color"}
        setIsVisible={() => setSectionConfig("color")}
      />
      <Section
        question={"What is your favorite pet?"}
        answer={"dog"}
        isVisible={sectionsConfig == "pet"}
        setIsVisible={() => setSectionConfig("pet")}
      />
      {/* Add more sections as needed */}
    </div>
  );
};

export default FAQ;
