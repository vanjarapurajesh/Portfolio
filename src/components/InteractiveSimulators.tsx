import { useState, useEffect, FormEvent } from 'react';
import { Film, CheckCircle2, Ticket, Shield, Cpu, Zap, Eye, EyeOff } from 'lucide-react';

/* ==========================================================================
   MOVIEMAGIC SIMULATOR
   ========================================================================== */
export function MovieMagicSimulator() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [phoneNumber, setPhoneNumber] = useState('+91 93463 45700');
  const [bookingState, setBookingState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [showNotification, setShowNotification] = useState(false);

  // Preset seats: 0 = empty, 1 = occupied by default
  const seatsPreset = [
    1, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0, 0,
    1, 1, 0, 0, 0, 1,
    0, 0, 1, 1, 0, 0
  ];

  const toggleSeat = (index: number) => {
    if (seatsPreset[index] === 1 || bookingState === 'loading') return;
    setSelectedSeats((prev) =>
      prev.includes(index) ? prev.filter((s) => s !== index) : [...prev, index]
    );
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedSeats.length === 0) return;
    setBookingState('loading');

    setTimeout(() => {
      setBookingState('success');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 9000);
    }, 1500);
  };

  const resetBooking = () => {
    setSelectedSeats([]);
    setBookingState('idle');
  };

  return (
    <div className="bg-[#090D1A] border border-slate-800/80 rounded-2xl p-4 sm:p-6 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 bg-blue-500/10 text-blue-400 font-mono text-[9px] uppercase border-b border-l border-slate-800/80 rounded-bl-xl">
        AWS SNS Simulator
      </div>

      <h4 className="font-display font-bold text-sm text-white mb-2 flex items-center">
        <Film className="w-4 h-4 text-cyan-400 mr-2 shrink-0" />
        MovieMagic Ticketing Grid
      </h4>
      <p className="text-slate-400 text-[11px] font-light mb-4">
        Interactive Seat Selector. Triggers AWS SNS alerts and commits seat states to DynamoDB upon confirmation.
      </p>

      {bookingState !== 'success' ? (
        <form onSubmit={handleBookingSubmit} className="space-y-4">
          {/* Cinema Screen Symbol */}
          <div className="relative w-full h-5 rounded-tl-full rounded-tr-full bg-gradient-to-b from-cyan-500/20 to-transparent border-t border-cyan-500/50 text-center mb-6">
            <span className="text-[8px] font-mono tracking-widest text-cyan-400/80 uppercase">
              CINEMA SCREEN
            </span>
          </div>

          {/* Seat Grid */}
          <div className="grid grid-cols-6 gap-2.5 max-w-xs mx-auto mb-6">
            {seatsPreset.map((status, index) => {
              const isSelected = selectedSeats.includes(index);
              const isOccupied = status === 1;

              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => toggleSeat(index)}
                  disabled={isOccupied}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[10px] font-mono transition-all ${
                    isOccupied
                      ? 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-900'
                      : isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                  title={isOccupied ? 'Occupied' : isSelected ? 'Selected' : 'Available'}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Seat Status Legend */}
          <div className="flex justify-center items-center space-x-4 text-[10px] text-slate-400 font-mono">
            <div className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-800" />
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded bg-cyan-500" />
              <span>Selected</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded bg-slate-800" />
              <span>Taken</span>
            </div>
          </div>

          {/* User Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-[9px] font-mono uppercase text-slate-500 mb-1.5">
                Phone Number (AWS SNS target)
              </label>
              <input
                type="text"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full text-xs bg-slate-950/80 border border-slate-850 rounded-lg p-2 text-white font-mono"
              />
            </div>
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                disabled={selectedSeats.length === 0 || bookingState === 'loading'}
                className="w-full h-9 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex justify-center items-center cursor-pointer transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                {bookingState === 'loading' ? (
                  <span className="flex items-center justify-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                    <span>Deploying...</span>
                  </span>
                ) : (
                  <>
                    <Ticket className="w-3.5 h-3.5 mr-1" />
                    <span>Confirm Seat {selectedSeats.map(s => s+1).join(',')}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="text-center py-6 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex justify-center items-center mb-4 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <CheckCircle2 className="w-6 h-6 animate-pulse" />
          </div>
          <h5 className="font-display font-extrabold text-sm text-white mb-2">
            Booking Confirmed in DynamoDB!
          </h5>
          <p className="text-[11px] text-slate-400 max-w-sm font-light mb-5 leading-normal">
            Your transaction committed successfully. Seat indices: <span className="font-mono text-cyan-400 font-bold">{selectedSeats.map(s=>s+1).join(', ')}</span> has been registered to <span className="font-mono text-slate-300 font-medium">{phoneNumber}</span>.
          </p>

          <button
            onClick={resetBooking}
            className="px-4 py-1.5 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-400 hover:text-white"
          >
            Reset Grid View
          </button>
        </div>
      )}

      {/* Floating Mock SNS Alert Toast */}
      {showNotification && (
        <div className="mt-4 p-3 bg-slate-950 border border-emerald-500/40 rounded-xl flex items-start space-x-3 shadow-lg shadow-emerald-950/20 animate-slide-up">
          <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 animate-bounce" />
          <div className="text-left">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-[#7DD3FC] font-mono">AWS SNS ALERT DIALOG</span>
              <span className="text-[9px] font-mono text-slate-500 mb-0.5">Delivered Now</span>
            </div>
            <p className="text-[10px] leading-relaxed text-slate-300 font-mono mt-1">
              "MovieMagic confirming Ticket #{Math.round(Math.random() * 90000 + 10000)} seat(s) {selectedSeats.map(s=>s+1).join(', ')}. Registered to DynamoDB client success. Code: MM-2026R"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


/* ==========================================================================
   QUANTUM SECURE CHAT (BB84 QKD) SIMULATOR
   ========================================================================== */
export function QuantumSecureChatSimulator() {
  const [senderBit, setSenderBit] = useState<0 | 1>(0);
  const [senderBasis, setSenderBasis] = useState<'+' | 'x'>('+');
  const [receiverBasis, setReceiverBasis] = useState<'+' | 'x'>('+');
  const [eveEavesdrop, setEveEavesdrop] = useState(false);
  const [simStep, setSimStep] = useState<'config' | 'results'>('config');

  const [simResults, setSimResults] = useState<{
    photonState: string;
    bobMeasuredBit: number;
    eveInterception?: {
      measuredBasis: string;
      measuredBit: number;
      distortedPhoton: string;
    };
    basisMatched: boolean;
    keyAccepted: boolean;
    errorRateDetected: number;
  } | null>(null);

  // Character representing photon polarization
  const getPhotonSymbol = (bit: 0 | 1, basis: '+' | 'x') => {
    if (basis === '+') {
      return bit === 0 ? '↑' : '→';
    } else {
      return bit === 0 ? '↗' : '↖';
    }
  };

  const handleTransmit = () => {
    // 1. Photon leaving Alice
    const photon = getPhotonSymbol(senderBit, senderBasis);
    let currentPhoton = photon;
    let eveMeasuredBasis = '';
    let eveMeasuredBit: number = 0;

    // 2. Eve intercepts (attacks)
    if (eveEavesdrop) {
      eveMeasuredBasis = Math.random() > 0.5 ? '+' : 'x';
      if (eveMeasuredBasis === senderBasis) {
        eveMeasuredBit = senderBit;
      } else {
        eveMeasuredBit = Math.random() > 0.5 ? 0 : 1;
      }
      // Re-polarizes photon according to Eve's wrong basis
      currentPhoton = getPhotonSymbol(eveMeasuredBit as any, eveMeasuredBasis as any);
    }

    // 3. Bob measures
    const basisMatched = senderBasis === receiverBasis;
    let bobMeasuredBit: number = 0;

    if (eveEavesdrop) {
      // Bob measures photon that was distorted by Eve
      if (receiverBasis === eveMeasuredBasis) {
        bobMeasuredBit = eveMeasuredBit;
      } else {
        bobMeasuredBit = Math.random() > 0.5 ? 0 : 1;
      }
    } else {
      // Standard flow (Alice -> Bob)
      if (basisMatched) {
        bobMeasuredBit = senderBit;
      } else {
        bobMeasuredBit = Math.random() > 0.5 ? 0 : 1;
      }
    }

    // Key is accepted in BB84 if bases match and error rate check passes
    const keyAccepted = basisMatched && (bobMeasuredBit === senderBit);
    const errorRateDetected = eveEavesdrop ? (basisMatched && bobMeasuredBit !== senderBit ? 50 : 25) : 0;

    setSimResults({
      photonState: photon,
      bobMeasuredBit,
      basisMatched,
      keyAccepted,
      errorRateDetected,
      eveInterception: eveEavesdrop ? {
        measuredBasis: eveMeasuredBasis,
        measuredBit: eveMeasuredBit,
        distortedPhoton: currentPhoton
      } : undefined
    });

    setSimStep('results');
  };

  return (
    <div className="bg-[#090D1A] border border-slate-800/80 rounded-2xl p-4 sm:p-6 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 bg-blue-500/10 text-blue-400 font-mono text-[9px] uppercase border-b border-l border-slate-800/80 rounded-bl-xl">
        BB84 QKD Engine
      </div>

      <h4 className="font-display font-bold text-sm text-white mb-2 flex items-center">
        <Shield className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
        BB84 Quantum Key Simulator
      </h4>
      <p className="text-slate-400 text-[11px] font-light mb-5">
        Visual simulation of Quantum Key Distribution demonstrating post-quantum threat safeguards and photon measurement tolerances.
      </p>

      {simStep === 'config' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Alice Input */}
            <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-850">
              <span className="text-[9px] font-mono text-cyan-400 font-extrabold uppercase tracking-wide">
                ALICE (Sender Controls)
              </span>
              <div className="mt-2.5 space-y-3.5">
                {/* Bit select */}
                <div>
                  <span className="block text-[8px] font-mono text-slate-500 uppercase mb-1.5">bit value</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSenderBit(0)}
                      className={`flex-1 py-1 text-xs font-mono rounded ${
                        senderBit === 0 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 border border-slate-850 text-slate-400'
                      }`}
                    >
                      Bit 0
                    </button>
                    <button
                      type="button"
                      onClick={() => setSenderBit(1)}
                      className={`flex-1 py-1 text-xs font-mono rounded ${
                        senderBit === 1 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 border border-slate-850 text-slate-400'
                      }`}
                    >
                      Bit 1
                    </button>
                  </div>
                </div>

                {/* Sender Basis select */}
                <div>
                  <span className="block text-[8px] font-mono text-slate-500 uppercase mb-1.5">polarization basis</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSenderBasis('+')}
                      className={`flex-1 py-1 text-xs font-mono rounded ${
                        senderBasis === '+' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-900 border border-slate-850 text-slate-400'
                      }`}
                    >
                      Rectilinear (+)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSenderBasis('x')}
                      className={`flex-1 py-1 text-xs font-mono rounded ${
                        senderBasis === 'x' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-900 border border-slate-850 text-slate-400'
                      }`}
                    >
                      Diagonal (x)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bob Input */}
            <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-850 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-orange-400 font-extrabold uppercase tracking-wide">
                  BOB (Receiver Controls)
                </span>
                <div className="mt-2.5">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase mb-1.5">measurement basis</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setReceiverBasis('+')}
                      className={`flex-1 py-1 text-xs font-mono rounded ${
                        receiverBasis === '+' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-900 border border-slate-850 text-slate-400'
                      }`}
                    >
                      Rectilinear (+)
                    </button>
                    <button
                      type="button"
                      onClick={() => setReceiverBasis('x')}
                      className={`flex-1 py-1 text-xs font-mono rounded ${
                        receiverBasis === 'x' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-900 border border-slate-850 text-slate-400'
                      }`}
                    >
                      Diagonal (x)
                    </button>
                  </div>
                </div>
              </div>

              {/* Eve Threat Hook */}
              <div className="mt-4 pt-3.5 border-t border-slate-900 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {eveEavesdrop ? (
                    <Eye className="w-4 h-4 text-rose-500 animate-pulse" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-slate-500" />
                  )}
                  <span className="text-[10px] font-mono text-slate-400 font-medium">Eve Intercept Simulation</span>
                </div>
                <input
                  type="checkbox"
                  checked={eveEavesdrop}
                  onChange={(e) => setEveEavesdrop(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-rose-500 focus:ring-0 focus:ring-offset-0 shrink-0 cursor-pointer"
                />
              </div>
            </div>

          </div>

          <button
            type="button"
            onClick={handleTransmit}
            className="w-full h-10 mt-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex justify-center items-center transition-all shadow-md shadow-emerald-950/20"
          >
            <Cpu className="w-4 h-4 mr-1.5 animate-spin-slow" />
            <span>Transmit Photon with Polarized State</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          
          {/* Signal Pipeline diagram */}
          <div className="flex justify-between items-center text-center p-3 bg-slate-950/80 border border-slate-850 rounded-xl font-mono text-[11px] gap-2">
            <div>
              <span className="block text-[8px] text-slate-500 uppercase">ALICE</span>
              <span className="text-cyan-400 font-extrabold">{senderBit}</span>
              <span className="text-slate-500 mx-1">[{senderBasis}]</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center relative px-2">
              <div className="w-full h-[1px] bg-dashed border-t border-slate-850" />
              <div className="absolute top-1/2 -translate-y-1/2 bg-blue-500/20 border border-blue-400/40 text-[10px] w-6 h-6 rounded-full flex justify-center items-center text-cyan-300 font-bold animate-pulse">
                {simResults?.photonState}
              </div>
            </div>

            {eveEavesdrop && (
              <div className="px-2 border-x border-rose-900/50">
                <span className="block text-[8px] text-slate-500 uppercase">EVE (SPY)</span>
                <span className="text-rose-500 font-extrabold">{simResults?.eveInterception?.measuredBit}</span>
                <span className="text-slate-500 mx-1">[{simResults?.eveInterception?.measuredBasis}]</span>
                <span className="block text-[9px] text-[#A6E22E] mt-0.5">{simResults?.eveInterception?.distortedPhoton}</span>
              </div>
            )}

            <div className="flex-1 flex items-center justify-center relative px-2">
              <div className="w-full h-[1px] bg-dashed border-t border-slate-850" />
            </div>

            <div>
              <span className="block text-[8px] text-slate-500 uppercase">BOB</span>
              <span className="text-orange-400 font-extrabold">{simResults?.bobMeasuredBit}</span>
              <span className="text-slate-500 mx-1">[{receiverBasis}]</span>
            </div>
          </div>

          {/* Diagnosis details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/40 border border-slate-850/80 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Bases Matched:</span>
                <span className={simResults?.basisMatched ? 'text-emerald-400 font-mono font-bold' : 'text-amber-500 font-mono'}>
                  {simResults?.basisMatched ? 'YES (Kept)' : 'NO (Sifted Out)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Post-Sifting Key Status:</span>
                <span className={simResults?.keyAccepted ? 'text-emerald-400 font-mono font-bold' : 'text-rose-500 font-mono'}>
                  {simResults?.keyAccepted ? 'Secure Key Token Match' : 'Mismatched / Sifted'}
                </span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/40 border border-slate-850/80 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Quantum Error Rate (QBER):</span>
                <span className={simResults?.errorRateDetected && simResults.errorRateDetected > 11 ? 'text-rose-400 font-mono font-extrabold' : 'text-emerald-400 font-mono'}>
                  {simResults?.errorRateDetected}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Post-Quantum Threat:</span>
                <span className={eveEavesdrop ? 'text-rose-500 font-mono font-bold animate-pulse' : 'text-emerald-400 font-mono'}>
                  {eveEavesdrop ? 'EAVESDROPPER DEFIED!' : 'SECURE LINK EXCLUSIVE'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSimStep('config')}
              className="flex-1 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-400 hover:text-white"
            >
              Back to Transmitter Controls
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
