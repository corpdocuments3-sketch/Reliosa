import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import gremsoLogo from '../assets/gremso-logo.png';
import api from '../lib/api';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Invalid verification link. No token provided.');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await api.get(`/auth/verify-email/${token}`);
        setStatus('success');
        setMessage(response.data.message || 'Email verified successfully. You can now log in.');
      } catch (err: any) {
        setStatus('error');
        setMessage(err.response?.data?.message || 'Verification failed. The link may be expired.');
      }
    };

    verifyToken();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center mb-6">
            <img
              src={gremsoLogo}
              alt="Gremso"
              className="h-12 w-12 object-contain"
              width={48}
              height={48}
            />
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Email Verification
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
          {status === 'loading' && (
            <div className="flex flex-col items-center justify-center py-6 block w-full">
              <Loader2 className="h-12 w-12 text-gray-800 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Verifying your email...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="flex flex-col items-center justify-center py-6 w-full">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <p className="text-gray-800 font-medium text-lg mb-2">Verified!</p>
              <p className="text-gray-500 mb-6">{message}</p>
              <Link
                to="/login"
                className="w-full bg-gremso text-white px-6 py-3 rounded-lg font-medium hover:bg-gremso-dark transition-colors"
                style={{ display: 'block' }}
              >
                Go to Login
              </Link>
            </div>
          )}

          {status === 'error' && (
            <div className="flex flex-col items-center justify-center py-6 w-full">
              <XCircle className="h-16 w-16 text-red-500 mb-4" />
              <p className="text-gray-800 font-medium text-lg mb-2">Verification Failed</p>
              <p className="text-red-600 mb-6">{message}</p>
              <Link
                to="/signup"
                className="w-full bg-gray-100 text-gray-800 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-200 transition-colors"
               style={{ display: 'block' }}
              >
                Back to Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
