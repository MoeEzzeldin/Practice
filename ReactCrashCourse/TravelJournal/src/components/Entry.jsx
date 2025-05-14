export default function Entry(props) { 
  // Destructure props for easier access
  const { image, title, country, googlemapslink, dates, text } = props.entry;

  return (
    <>
    <article className="journal-entry">
      <div className="entry-image">
        <img src={image.src} alt={title} />
      </div>
      <div className="entry-content">
        <div className="location-info">
          <span className="location-marker">📍</span>
          <span className="country">{country}</span>
          <a href={googlemapslink} className="maps-link">View on Google Maps</a>
        </div>
        <h1 className="entry-title">{title}</h1>
        <h4 className="entry-dates">{dates}</h4>
        <p className="entry-description">{text}</p>
      </div>
    </article>
    </>
  );
}
