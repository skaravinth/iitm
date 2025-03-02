import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "general",
    rating: 0,
    message: "",
    attachFile: null,
    allowContact: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const feedbackTypes = [
    { id: "general", label: "General Feedback" },
    { id: "feature", label: "Feature Request" },
    { id: "accuracy", label: "Accuracy Issue" },
    { id: "ui", label: "User Interface" },
    { id: "bug", label: "Bug Report" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleRatingClick = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
    if (errors.rating) {
      setErrors({
        ...errors,
        rating: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (formData.rating === 0) {
      newErrors.rating = "Please select a rating";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Feedback message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Feedback message must be at least 10 characters";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Feedback submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          feedbackType: "general",
          rating: 0,
          message: "",
          attachFile: null,
          allowContact: false,
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setErrors({ submit: "Failed to submit feedback. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="max-w-3xl mt-10 mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#6B4F4F] px-6 py-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Help Us Improve</h1>
                <p className="mt-2 text-white/80">Your feedback helps us make our Dog AI better</p>
              </div>
              <div className="hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/20">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="px-6 py-8">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-3 text-lg font-medium text-gray-900">Thank you for your feedback!</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Your insights help us improve our Dog AI app and provide better service.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.submit && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">{errors.submit}</h3>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`shadow-sm focus:ring-[#6B4F4F] focus:border-[#6B4F4F] block w-full sm:text-sm border-gray-300 rounded-md ${
                          errors.name ? "border-red-300" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`shadow-sm focus:ring-[#6B4F4F] focus:border-[#6B4F4F] block w-full sm:text-sm border-gray-300 rounded-md ${
                          errors.email ? "border-red-300" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Feedback Type
                  </label>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-5">
                    {feedbackTypes.map((type) => (
                      <div key={type.id}>
                        <label
                          className={`flex items-center justify-center px-3 py-2 text-sm border rounded-md cursor-pointer ${
                            formData.feedbackType === type.id
                              ? "bg-[#6B4F4F] text-white border-[#6B4F4F]"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="feedbackType"
                            value={type.id}
                            checked={formData.feedbackType === type.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    How would you rate your experience?
                  </label>
                  <div className="mt-2 flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-8 w-8 ${
                            formData.rating >= star ? "text-yellow-400" : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      {formData.rating > 0 
                        ? `${formData.rating} star${formData.rating > 1 ? 's' : ''}` 
                        : 'Select rating'}
                    </span>
                  </div>
                  {errors.rating && (
                    <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Feedback
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please share your experience, suggestions, or report any issues..."
                      className={`shadow-sm focus:ring-[#6B4F4F] focus:border-[#6B4F4F] block w-full sm:text-sm border-gray-300 rounded-md ${
                        errors.message ? "border-red-300" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="allowContact"
                      name="allowContact"
                      type="checkbox"
                      checked={formData.allowContact}
                      onChange={handleInputChange}
                      className="focus:ring-[#6B4F4F] h-4 w-4 text-[#6B4F4F] border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="allowContact" className="font-medium text-gray-700">
                      Contact permission
                    </label>
                    <p className="text-gray-500">
                      We may contact you for more details about your feedback.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6B4F4F] hover:bg-[#5a4242] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4F4F] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Feedback"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
  );
};

export default FeedbackForm;