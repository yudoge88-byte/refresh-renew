import { useSubmitQuoteRequest } from "@/hooks/useQueries";
import { CheckCircle2, Clock, Loader2, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "Under $10,000", label: "Under $10,000" },
  { value: "$10,000 – $25,000", label: "$10,000 – $25,000" },
  { value: "$25,000 – $50,000", label: "$25,000 – $50,000" },
  { value: "$50,000 – $100,000", label: "$50,000 – $100,000" },
  { value: "$100,000+", label: "$100,000+" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    startDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitQuote, isPending, isError } = useSubmitQuoteRequest();

  useEffect(() => {
    document.title =
      "Get a Free Quote — Refresh! Renew! | Hamilton Renovation Contractor";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuote(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        projectDetails: JSON.stringify({
          projectType: form.projectType,
          budget: form.budget,
          startDate: form.startDate,
          message: form.message,
        }),
      },
      { onSuccess: () => setSubmitted(true) },
    );
  };

  return (
    <div>
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
            Free. No Obligation. No Pressure.
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            No obligation. No pressure. Just an honest conversation about your
            project.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-charcoal">
                    Call Us Directly
                  </h3>
                </div>
                <a
                  href="tel:+19055550182"
                  data-ocid="contact.phone.link"
                  className="font-display font-bold text-4xl text-gold hover:text-gold-dark transition-colors block"
                >
                  (905) 555-0182
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-charcoal">
                    Business Hours
                  </h3>
                </div>
                <div className="text-gray-600 space-y-1 text-sm">
                  <p>Monday – Friday: 7:30am – 6:00pm</p>
                  <p>Saturday: 8:00am – 3:00pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-charcoal">Service Area</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hamilton · Ancaster · Dundas · Stoney Creek · Waterdown ·
                  Burlington · Grimsby &amp; Surrounding Areas
                </p>
              </div>

              <div className="bg-cream rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-charcoal mb-3">
                  What to Expect
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The consultation and detailed quote are completely free. We
                  visit your home, listen to your goals, and provide a written
                  quote within 5–7 business days — no obligation, no pushy sales
                  tactics.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="text-center py-16"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-5" />
                  <h2 className="font-display font-bold text-3xl text-charcoal mb-4">
                    Thank You!
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                    We'll be in touch within 1 business day to schedule your
                    free site visit. We look forward to hearing more about your
                    project.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-ocid="contact.modal"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-charcoal mb-2"
                      >
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        data-ocid="contact.name.input"
                        className="w-full px-4 py-3 border border-border rounded-lg text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-charcoal mb-2"
                      >
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(905) 555-0000"
                        data-ocid="contact.phone.input"
                        className="w-full px-4 py-3 border border-border rounded-lg text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      data-ocid="contact.email.input"
                      className="w-full px-4 py-3 border border-border rounded-lg text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Type of Project
                    </label>
                    <input
                      id="projectType"
                      name="projectType"
                      type="text"
                      value={form.projectType}
                      onChange={handleChange}
                      placeholder="e.g. Kitchen Renovation, Basement Finishing, Addition..."
                      data-ocid="contact.projecttype.input"
                      className="w-full px-4 py-3 border border-border rounded-lg text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-semibold text-charcoal mb-2"
                      >
                        Approximate Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        data-ocid="contact.budget.select"
                        className="w-full px-4 py-3 border border-border rounded-lg text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="startDate"
                        className="block text-sm font-semibold text-charcoal mb-2"
                      >
                        Preferred Start Date
                      </label>
                      <input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={form.startDate}
                        onChange={handleChange}
                        data-ocid="contact.startdate.input"
                        className="w-full px-4 py-3 border border-border rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, the space, what you're hoping to achieve..."
                      data-ocid="contact.message.textarea"
                      className="w-full px-4 py-3 border border-border rounded-lg text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors text-sm resize-none"
                    />
                  </div>

                  {isError && (
                    <div
                      className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3"
                      data-ocid="contact.error_state"
                    >
                      Something went wrong. Please try again or call us directly
                      at (905) 555-0182.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    data-ocid="contact.submit_button"
                    className="w-full py-4 bg-gold hover:bg-gold-dark disabled:opacity-60 text-white font-bold text-lg rounded shadow-gold transition-colors flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send My Quote Request"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
