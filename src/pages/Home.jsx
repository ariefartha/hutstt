import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBirthdayCake } from 'react-icons/fa';
import { GiPartyPopper, GiFireworkRocket } from 'react-icons/gi';
import { BsBalloon } from 'react-icons/bs';
import { Fireworks } from '@fireworks-js/react';

const Home = () => {
  const audioRef = useRef(null);
  const fireworksRef = useRef(null);
  const [showModal, setShowModal] = useState(true);

  const handleStartCelebration = () => {
    audioRef.current?.play().catch(console.warn);
    fireworksRef.current?.start();
    setShowModal(false);
  };

  useEffect(() => {
    return () => fireworksRef.current?.stop();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-pink-200 to-purple-200 flex flex-col items-center justify-center text-center relative px-4 overflow-hidden">
      {/* Audio */}
      <audio ref={audioRef} loop src="/music.mp3" />

      {/* Fireworks */}
      {!showModal && (
        <Fireworks
          ref={fireworksRef}
          options={{
            autoresize: true,
            opacity: 0.8,
            acceleration: 1.1,
            friction: 0.98,
            gravity: 1.6,
            particles: 80,
            traceLength: 4,
            traceSpeed: 15,
            explosion: 8,
            intensity: 40,
            flickering: 60,
            hue: { min: 100, max: 350 },
            lineWidth: { explosion: { min: 2, max: 4 }, trace: { min: 1, max: 2 } },
            brightness: { min: 60, max: 100 },
            decay: { min: 0.015, max: 0.03 },
            rocketsPoint: { min: 20, max: 80 },
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center space-y-4">
            <h2 className="text-2xl font-bold text-primary">Selamat Datang!</h2>
            <p>Klik "Mulai" untuk menyalakan musik & kembang api 🎉</p>
            <button className="btn btn-primary" onClick={handleStartCelebration}>Mulai</button>
          </div>
        </div>
      )}

      {/* Hero */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }} className="space-y-4 z-10">
        <div className="text-5xl md:text-7xl font-bold text-purple-700">
          <div className="flex justify-center gap-4 mb-4">
            <BsBalloon className="animate-bounce text-pink-500 text-6xl" />
            <GiFireworkRocket className="animate-pulse text-yellow-500 text-6xl" />
            <FaBirthdayCake className="animate-wiggle text-red-500 text-6xl" />
            <GiPartyPopper className="animate-spin-slow text-purple-600 text-6xl" />
          </div>
          <p>HUT STT KE-50</p>
        </div>
        <Link to="/photo" className="btn btn-outline btn-primary">Lihat Foto Dokumentasi</Link>
      </motion.div>
    </div>
  );
};

export default Home;
