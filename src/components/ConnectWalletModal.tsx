import React, { useState, useEffect } from 'react';
import { X, Cpu, Shield } from 'lucide-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal = ({ isOpen, onClose }: ConnectWalletModalProps) => {
  const [step, setStep] = useState<'select-wallet' | 'connect' | 'access-code'>('select-wallet');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [phantomAvailable, setPhantomAvailable] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
  useEffect(() => {
    const checkPhantom = () => {
      if ('phantom' in window) {
        setPhantomAvailable(true);
      }
    };
    checkPhantom();
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setStep('access-code');
    }
  }, [isConnected, address]);

  const connectPhantom = async () => {
    try {
      if (!('phantom' in window)) {
        throw new Error('Phantom wallet not found');
      }

      const provider = (window as any).phantom?.solana;
      
      if (!provider?.isPhantom) {
        throw new Error('Phantom wallet not found');
      }

      const response = await provider.connect();
      const publicKey = response.publicKey.toString();
      
      setStep('access-code');
    } catch (err) {
      setError('Failed to connect Phantom wallet. Please try again.');
    }
  };

  const handleWalletSelect = async (walletType: 'phantom' | 'ethereum') => {
    setError('');
    
    if (walletType === 'phantom') {
      if (!phantomAvailable) {
        window.open('https://phantom.app/', '_blank');
        setError('Please install Phantom wallet to continue');
        return;
      }
      await connectPhantom();
    } else {
      try {
        await open();
      } catch (err) {
        setError('Failed to connect wallet. Please try again.');
      }
    }
  };

  const handleAccessCode = async () => {
    if (!accessCode.trim()) {
      setError('Please enter an access code');
      return;
    }
    setError('Invalid access code. Please contact us to obtain a trial code.');
    setAccessCode('');
  };

  const handleDisconnect = () => {
    disconnect();
    setStep('select-wallet');
    setAccessCode('');
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="relative max-w-md w-full mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        <div className="relative bg-galaxy-card/90 backdrop-blur-xl rounded-xl border border-blue-500/20 p-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none circuit-lines opacity-20"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-galaxy-text-secondary hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {step === 'select-wallet' && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Secure Connection</h2>
              </div>
              <p className="text-galaxy-text-secondary mb-8">
                Initialize a secure connection with your preferred crypto wallet to access PrimeTrader AI's neural network.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => handleWalletSelect('phantom')}
                  className="w-full group relative overflow-hidden bg-[#AB9FF2]/10 hover:bg-[#AB9FF2]/20 border border-[#AB9FF2]/30 hover:border-[#AB9FF2]/50 text-white py-4 rounded-lg font-semibold transition-all"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#AB9FF2]/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <img src="https://phantom.app/favicon.ico" className="w-5 h-5" alt="Phantom" />
                    Connect Phantom
                  </div>
                </button>
                <button
                  onClick={() => handleWalletSelect('ethereum')}
                  className="w-full group relative overflow-hidden bg-[#627EEA]/10 hover:bg-[#627EEA]/20 border border-[#627EEA]/30 hover:border-[#627EEA]/50 text-white py-4 rounded-lg font-semibold transition-all"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#627EEA]/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <img src="https://metamask.io/favicon.ico" className="w-5 h-5" alt="MetaMask" />
                    Connect Ethereum Wallet
                  </div>
                </button>
              </div>
            </>
          )}

          {step === 'access-code' && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Neural Network Access</h2>
              </div>
              <p className="text-galaxy-text-secondary mb-6">
                Enter your unique access code to connect with our AI trading network. Need a code? Contact us for trial access.
              </p>
              <div className="relative mb-4">
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Enter access code"
                  className="w-full bg-galaxy-bg/50 border border-blue-500/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handleAccessCode}
                  className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 hover:border-blue-500/50 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  Initialize Connection
                </button>
                <button
                  onClick={handleDisconnect}
                  className="w-full bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  Disconnect Wallet
                </button>
              </div>
            </>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {step === 'access-code' && (
            <div className="mt-4 text-center">
              <a
                href="mailto:support@primetrader.ai"
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                Request trial access code →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;