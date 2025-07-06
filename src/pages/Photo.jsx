import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fireworks } from '@fireworks-js/react';

const allPhotos = Array.from({ length: 65 }, (_, i) => `/${i + 1}.jpg`);



const Photo = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const fireworksRef = useRef(null);

  useEffect(() => {
    const fw = fireworksRef.current;
    fw?.start();
    return () => fw?.stop();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="relative min-h-screen bg-base-200 p-4 overflow-hidden flex flex-col">
      {/* Fireworks Canvas */}
      <Fireworks
        ref={fireworksRef}
        options={{
          rocketsPoint: { min: 10, max: 90 },
          hue: { min: 0, max: 360 },
          delay: { min: 15, max: 30 },
          speed: 2,
          acceleration: 1.05,
          friction: 0.95,
          gravity: 1.5,
          particles: 50,
          explosion: 5,
          intensity: 30,
          trace: 3,
          traceSpeed: 10,
          flickering: 30,
          lineWidth: { explosion: { min: 2, max: 4 }, trace: { min: 1, max: 2 } },
          brightness: { min: 50, max: 80 },
          decay: { min: 0.015, max: 0.03 },
          autoresize: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <h1 className="text-3xl font-bold text-center text-primary relative z-10 font-title">
        Galery Dokumentasi
      </h1>
      <p className='text-sm italic text-center relative z-10 mb-6'>(klik foto untuk mendownload)</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 z-10 relative">
        {allPhotos.slice(0, visibleCount).map((photo, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.03 }}
          >
            <img
              src={photo}
              alt={`Foto ${idx + 1}`}
              className="w-full h-40 object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-70"
            />

            <a
              href={photo}
              download={`foto-${idx + 1}.jpg`}
              className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 shadow text-sm"
            >
              Download
            </a>
          </motion.div>
        ))}
      </div>

      {visibleCount < allPhotos.length && (
        <div className="mt-8 text-center z-10 relative">
          <button className="btn btn-outline btn-primary" onClick={handleLoadMore}>
            Lihat Foto Lainnya
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500 z-10 relative">
        © 2025{' '}
        <a
          href="https://igedeariefartha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          gede artha digital
        </a>
        . All rights reserved.
      </footer>

    </div>
  );
};

export default Photo;
