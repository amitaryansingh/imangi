import React from 'react';
import styles from './Body.module.css';

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <header className={styles.bodyHeader}>
        <h1>Welcome to Imangi</h1>
      </header>
      <main className={styles.bodyContent}>
        <section id="history-of-imangi" className={styles.bodySection}>
          <div className={styles.bodyText}>
            <h2>History of Imangi</h2>
            <p>
  Imangi is an innovative movie ticket booking website designed to enhance your movie-going experience. With a modern and user-friendly interface, Imangi allows users to easily browse the latest movie releases, check showtimes, and select their preferred seats—all from the comfort of their homes.
  <br /><br />
  The website offers comprehensive search options, including filters for genre, language, and location, making it simple to find movies that suit your preferences. Real-time updates provide the latest information on seat availability, ensuring an accurate and seamless booking process.
  <br /><br />
  Imangi prioritizes convenience and security, featuring a streamlined payment process with multiple options for a hassle-free experience. Users can create personal accounts to track bookings, receive personalized recommendations, and stay informed about new releases or special promotions.
  <br /><br />
  The platform enhances your movie experience by offering exclusive discounts and deals, catering to both casual viewers and avid cinema-goers. Whether planning a solo movie night, a date, or an outing with friends, Imangi simplifies the entire ticket booking process.
  <br /><br />
  Imangi is more than just a ticket booking website; it’s your destination for an exceptional movie experience. With a commitment to customer satisfaction and a passion for innovation, Imangi continues to set new standards in the world of online movie ticket booking, making every movie outing a memorable one.
</p>

          </div>
          <img src="m1.jpg" alt="History of Imangi"/>
        </section>
        <section id="our-vision" className={styles.bodySection}>
          <div className={styles.bodyText}>
            <h2>Our Vision</h2>
            <p>
              At Imangi Studios, our vision is to lead the entertainment industry through innovation and creativity. We aim to craft immersive experiences that captivate and inspire a global audience, blending cutting-edge technology with exceptional storytelling. Our goal is to stay ahead of industry trends, continually delivering high-quality, engaging products that resonate with users.
              <br /><br />
              We are committed to exploring new technologies and fostering a culture of creativity within our team. By embracing new challenges and ideas, we strive to set new standards in interactive entertainment. As we move forward, Imangi remains dedicated to shaping the future of digital media and making a lasting impact through groundbreaking experiences.
            </p>
          </div>
          <img src="m2.jpg" alt="Our Vision" />
        </section>
      </main>
    </div>
  );
};

export default Body;
