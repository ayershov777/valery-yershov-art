import React from 'react'

export default function QuotesComponent({ quotes, authors }) {
  const screenSmall = window.matchMedia("(max-width: 500px)").matches;
  const screenMedium = !screenSmall && window.matchMedia("(max-width: 1024px)").matches;
  const screenLarge = !screenSmall && !screenMedium;

  if(screenSmall) {
    var quoteSize = '5vw';
    var authorSize = '4vw';
  } else if(screenMedium) {
    quoteSize = '2vw';
    authorSize = '1.5vw';
  } else {
    quoteSize = '1.5vw';
    authorSize = '1.25vw';
  }

  return (
    <div style={{ padding: '5vw' }}>
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          textShadow: '0 0 2px white',
          padding: '3vw'
        }}
        >
        {quotes.map((quote, idx) => 
          <div>
            <p
              style={{
                fontSize: quoteSize,
                textAlign: 'justify',
                fontStyle: 'italic'
              }}
            >"{quote}"</p>
            <p
              style={{
                fontSize: authorSize,
                textAlign: 'right'
              }}
            >- {authors[idx]}</p>
          </div>
        )}
      </div>
    </div>
  );
}
