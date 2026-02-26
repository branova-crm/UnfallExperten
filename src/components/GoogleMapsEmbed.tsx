"use client";

export default function GoogleMapsEmbed() {
    return (
        <section className="maps-section">
            <div className="maps-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.653457193952!2d6.945396677025816!3d50.87455805728867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf11ffb7b43b17%3A0x5c687d06f87054b9!2sKFZ%20Gutachter%20K%C3%B6ln%20%7C%20Ingenieurb%C3%BCro%20Oscar!5e0!3m2!1sde!2sde!4v1740610118671!5m2!1sde!2sde"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KFZ Gutachter Köln Standort"
                ></iframe>
            </div>
        </section>
    );
}
