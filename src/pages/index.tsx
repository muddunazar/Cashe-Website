import React from 'react';
import ReferenceComponent from '../components/ReferenceComponent';

const IndexPage = () => {
  return (
    <main>
      {/* Example usage — pass the name and any props each component expects */}
      <ReferenceComponent name="Header" title="Welcome to CASHE" />

      <ReferenceComponent name="Banner" imageUrl="/banner.jpg" alt="CASHE Banner" />

      <ReferenceComponent
        name="CTA"
        text="Apply Now"
        link="/apply"
        theme="primary"
      />
    </main>
  );
};

export default IndexPage;
