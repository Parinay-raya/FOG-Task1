import React from 'react';

const FeatureSection = () => {
  return (
    <section className="feature-section" style={featureStyle}>
      <h1>Featured Products</h1>
      <p>Check out our latest offerings!</p>
    </section>
  );
};

const featureStyle = {
  padding: '40px',
  backgroundColor: '#f4f4f4',
  textAlign: 'center'
};

export default FeatureSection;
