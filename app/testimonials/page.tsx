import { Metadata } from "next";
import { Quote } from "lucide-react";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what our customers are saying about their experience.",
};

export default function TestimonialsPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-surface-900 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-surface-600">
            Don&apos;t just take our word for it—hear from our satisfied
            customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 relative"
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 text-accent/20"
              />
              <blockquote>
                <p className="text-surface-700 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer className="text-surface-500">
                  <cite className="not-italic font-medium">
                    – {testimonial.author},{" "}
                    <span className="text-accent">{testimonial.source}</span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-surface-600 mb-4">
            Ready to experience the difference?
          </p>
            <Link href="/booking" className="btn-primary">
              Book Your Appointment
            </Link>
        </div>
      </div>
    </div>
  );
}
