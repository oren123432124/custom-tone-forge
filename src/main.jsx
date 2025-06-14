import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";

export default function Main() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="w-full text-center py-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to Custom Tone Forge</h1>
        <p className="text-lg text-gray-300 mb-8">
          Your one-stop destination for dream guitar builds tailored by genre, budget, and vibe.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/shop">
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl text-white text-lg font-semibold transition">
              Browse Custom Builds
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-transparent border border-white px-6 py-3 rounded-xl text-white text-lg font-semibold hover:bg-white hover:text-black transition">
              1-on-1 Zoom Build
            </button>
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <Carousel />
      </section>
    </main>
  );
}