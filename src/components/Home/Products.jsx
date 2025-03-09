import React from 'react';
import Card from '../Card';
import './Products.css';

const products = [
  {
    number: '01',
    title: 'TMT Bars',
    description:
      'Thermo-Mechanically Treated (TMT) Bars are the backbone of modern construction, ensuring strength, durability, and safety for all types of structures. At J M Shah And Co., we provide premium-grade TMT bars that meet the highest quality standards, making them ideal for residential, commercial, and industrial projects.',
    image: 'products/TMT Bars.jpg',
  },
  {
    number: '02',
    title: 'MS Plate',
    description:
      'Mild Steel (MS) Plates are a cornerstone of structural steel applications, offering unparalleled strength, flexibility, and affordability. At J M Shah And Co., we provide high-quality MS plates designed to support diverse construction and industrial needs with precision and reliability.',
    image: 'products/MS Plate.jpg',
  },
  {
    number: '03',
    title: 'MS Beam',
    description:
      'Mild Steel (MS) Beams are the foundation of structural steel frameworks, known for their exceptional strength, durability, and versatility. At J M Shah And Co., we supply premium-quality MS beams that meet the demands of modern construction and industrial applications.',
    image: 'products/MS Beam.webp',
  },
  {
    number: '04',
    title: 'MS And GI Pipe',
    description:
      'At J M Shah And Co., we supply premium-quality Mild Steel (MS) Pipes and Galvanized Iron (GI) Pipes designed to meet the demands of diverse construction, industrial, and infrastructure projects. Known for their strength, durability, and adaptability, our pipes ensure reliable performance across various applications.',
    image: 'products/ms pipe.jpg',
  },
  {
    number: '05',
    title: 'MS Channel',
    description:
      'Mild Steel (MS) Channels are essential structural steel components, providing strength, stability, and versatility for a wide range of construction and industrial applications. At J M Shah And Co., we supply high-quality MS channels that meet stringent quality standards, ensuring durability and precision for every project.',
    image: 'products/ms channel.webp',
  },
  {
    number: '06',
    title: 'Flat And Angle',
    description:
      'At J M Shah And Co., we supply high-quality Mild Steel (MS) Flats and MS Angles, engineered to provide strength, versatility, and durability for a wide range of construction, industrial, and fabrication needs. These essential structural steel components ensure reliable performance across diverse applications.',
    image: 'products/Flat And Angle.jpg',
  },
];

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-header">
        <p className="subheading">WHAT WE DO</p>
        <h2 className="title">Products We Offer</h2>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
      {/* View More Button */}
      <div className="view-more-container">
        <a href="/all-products" className="view-more-button">
          View More <span className="arrow-symbol">→</span>
        </a>
      </div>
    </section>
  );
};

export default Products;
