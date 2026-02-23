import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your appointment at LaBuonaVita Barbershop online.",
};

export default function BookingPage() {
  return (
    <section className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
          Book an Appointment
        </h1>
        <p className="text-gray-600 text-lg">
          Schedule your visit at LaBuonaVita Barbershop below.
        </p>
      </div>

        {/* Squire inline widget target */}
        <div
          id="squire-booking-widget"
          x-squire-inline-enabled="true"
          data-shop-id="e01b5897-bd1a-4e3b-a512-ef0c66860f59"
          className="max-w-3xl mx-auto w-full"
          style={{ minHeight: "700px" }}
        />

        <Script
          id="squire-widget-script"
          src="https://widget.getsquire.com/widget.js"
          strategy="afterInteractive"
        />
    </section>
  );
}
