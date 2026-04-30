import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function ThankYou() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>Thank You!</h1>
    <p>We’ve received your message. We’ll get back to you soon.</p>
  </div>;
}
