import { CONTACT } from '../components/data/contactInfo';

// Optional: set VITE_CONTACT_FORM_EMAIL in .env.local to test with your own inbox.
const INQUIRY_EMAIL = (
  import.meta.env.VITE_CONTACT_FORM_EMAIL || CONTACT.email
).toLowerCase();
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${INQUIRY_EMAIL}`;
const IS_DEV = import.meta.env.DEV;

export const getContactFormRecipient = () => INQUIRY_EMAIL;

export const submitContactInquiry = async (form) => {
  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    interest: form.interest,
    message: form.message.trim(),
    _replyto: form.email.trim(),
    _subject: `New Contact Inquiry from ${form.name.trim()}`,
    _template: 'table',
    _captcha: false,
  };

  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    throw new Error('Invalid response from email service.');
  }

  const isSuccess =
    response.ok && (data.success === 'true' || data.success === true);

  if (!isSuccess) {
    throw new Error(
      data.message ||
        'Unable to send your inquiry. Please try again or email us directly.',
    );
  }

  if (IS_DEV) {
    console.info('[Contact form] Submission accepted by FormSubmit.', {
      recipient: INQUIRY_EMAIL,
      response: data,
    });
  }

  return data;
};
