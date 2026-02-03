import { useState } from 'react';

export function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID;

  if (!formId) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      return;
    }

    setStatus('submitting');

    try {
      const formData = new FormData();
      formData.append('email_address', email);

      const response = await fetch(
        `https://app.convertkit.com/forms/${formId}/subscriptions`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-r from-[var(--color-warm-100)] to-[var(--color-warm-200)] rounded-lg shadow-md px-6 py-4 text-center">
        <p className="text-lg text-[var(--color-warm-800)]">
          <span className="text-xl mr-2">✅</span>
          You're on the list!
        </p>
        <p className="text-sm text-[var(--color-warm-600)] mt-1">
          Check your inbox for a welcome email.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[var(--color-warm-100)] to-[var(--color-warm-200)] rounded-lg shadow-md px-6 py-4">
      <div className="text-center mb-3">
        <p className="text-lg text-[var(--color-warm-800)]">
          <span className="text-xl mr-2">📧</span>
          Get Weekly Escape Alerts
        </p>
        <p className="text-sm text-[var(--color-warm-600)]">
          We'll email you the best warm destinations each week
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === 'submitting'}
          className="flex-1 px-4 py-2 rounded-lg border border-[var(--color-warm-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-400)] focus:border-transparent disabled:bg-gray-100"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || !email}
          className={`
            px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200
            ${status === 'submitting' || !email
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[var(--color-warm-500)] hover:bg-[var(--color-warm-600)] active:scale-95'
            }
          `}
        >
          {status === 'submitting' ? 'Joining...' : 'Subscribe'}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-center text-sm text-red-600 mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
