import React, { useState, CSSProperties } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  { question: 'What is CASHE?', answer: 'CASHE is a digital lending platform for instant personal loans.' },
  { question: 'Who can apply for a loan?', answer: 'Anyone with a stable income and valid KYC documents can apply.' },
  { question: 'How long does approval take?', answer: 'Approval usually takes just a few minutes after verification.' },
  { question: 'What is the loan tenure?', answer: 'You can choose a loan tenure from 3 to 12 months.' },
  { question: 'Is there a processing fee?', answer: 'Yes, a small fee is deducted from the loan amount as processing charges.' },
  { question: 'Can I prepay my loan?', answer: 'Yes, prepayment is allowed without any penalty.' },
  { question: 'Is my data safe with CASHE?', answer: 'Absolutely, we follow industry-standard encryption and security measures.' },
  { question: 'How do I track my EMI?', answer: 'You can view your EMI schedule inside the CASHE app.' },
  { question: 'What happens on missed payments?', answer: 'Missed payments may incur late fees and affect your credit score.' },
  { question: 'How do I contact customer support?', answer: 'You can reach us via email or the in-app support chat.' },
];

const FAQs = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const styles: { [key: string]: CSSProperties } = {
    container: {
      maxWidth: '700px',
      margin: '0 auto',
      padding: '24px 16px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    faqItem: {
      borderBottom: '1px solid #ddd',
      padding: '12px 0',
      cursor: 'pointer',
    },
    questionRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    question: {
      fontSize: '18px',
      fontWeight: 500,
      margin: 0,
    },
    answer: {
      marginTop: '8px',
      color: '#555',
      fontSize: '16px',
    },
    toggleButton: {
      marginTop: '16px',
      color: '#007BFF',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontSize: '16px',
      textDecoration: 'underline',
    },
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Frequently Asked Questions</h2>
      {visibleFaqs.map((faq, index) => {
        const actualIndex = showAll ? index : index;
        const isOpen = expandedIndexes.includes(actualIndex);

        return (
          <div
            key={actualIndex}
            style={styles.faqItem}
            onClick={() => toggleFAQ(actualIndex)}
          >
            <div style={styles.questionRow}>
              <h3 style={styles.question}>{faq.question}</h3>
              <span>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && <p style={styles.answer}>{faq.answer}</p>}
          </div>
        );
      })}

      {faqs.length > 5 && (
        <button
          style={styles.toggleButton}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
};

export default FAQs;
