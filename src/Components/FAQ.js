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
            className=" px-5 py-2 bg-orange-400 font-semibold text-white rounded-md "
            onClick={() => setIsVisible(true)}
          >
            ▲
          </button>
        ) : (
          <button
            className=" px-5 py-2 bg-orange-400 font-semibold text-white rounded-md "
            onClick={() => setIsVisible(true)}
          >
            ▼
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
  const [sectionsConfig, setSectionConfig] = useState("");
  return (
    <div className="w-2/3 mx-auto p-6  mt-36">
      <h2 className="text-2xl font-bold mb-6">FAQ Section ────⋆⋅☆⋅⋆──</h2>
      <Section
        question={" What is Swiggy?"}
        answer={
          "Swiggy is an online food delivery platform that connects customers with restaurants and delivers food to their doorstep quickly and efficiently."
        }
        isVisible={sectionsConfig == "swiggy"}
        // isVisible value will be 1 because both the side have true
        // now passing the value true mean 1
        setIsVisible={() => setSectionConfig("swiggy")}
      />
      <Section
        question={" How do I create an account on Swiggy?"}
        answer={
          "To create an account, download the Swiggy app or visit the Swiggy website, click on Sign Up  and enter your mobile number or email. You can also sign up using your Google or Facebook account."
        }
        isVisible={sectionsConfig == "accont"}
        setIsVisible={() => setSectionConfig("accont")}
      />
      <Section
        question={"What should I do if I forget my password?"}
        answer={
          "Click on the Forgot Password? link on the login page, and follow the instructions to reset your password."
        }
        isVisible={sectionsConfig == "password"}
        setIsVisible={() => setSectionConfig("password")}
      />
      <Section
        question={"What payment methods are accepted on Swiggy?"}
        answer={
          "Swiggy accepts multiple payment options, including:UPI (Google Pay, PhonePe, etc.)Net Banking"
        }
        isVisible={sectionsConfig == "payment"}
        setIsVisible={() => setSectionConfig("payment")}
      />
      <Section
        question={"How can I apply a coupon or discount?"}
        answer={
          " At checkout, you can enter the coupon code in the Apply Coupon section. Valid discounts will be automatically deducted from the total amount."
        }
        isVisible={sectionsConfig == "coupon"}
        setIsVisible={() => setSectionConfig("coupon")}
      />
      <Section
        question={"How can I place an order on Swiggy?"}
        answer={
          "Log in to your account =>Enter your delivery address =>Browse the restaurant options or search for your favorite dish => Add items to your cart. =>Proceed to checkout and complete the payment. "
        }
        isVisible={sectionsConfig == "order"}
        setIsVisible={() => setSectionConfig("order")}
      />
      <Section
        question={" What is the average delivery time?"}
        answer={
          " The average delivery time depends on the restaurant's preparation time and your location. Swiggy usually provides an estimated delivery time when you place your order."
        }
        isVisible={sectionsConfig == "time"}
        setIsVisible={() => setSectionConfig("time")}
      />
    </div>
  );
};

export default FAQ;
