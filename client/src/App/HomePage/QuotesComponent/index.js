import React from 'react'

export default function QuotesComponent({ quotes, authors }) {
  const screenSmall = window.matchMedia("(max-width: 500px)").matches;
  const screenMedium = !screenSmall && window.matchMedia("(max-width: 1024px)").matches;
  //const screenLarge = !screenSmall && !screenMedium;

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
          color: 'black',
          textShadow: '0 0 2px #323232',
          padding: '0 3vw'
        }}
        >
        {quotes.map((quote, idx) => 
          <div
            key={idx}
            style={{
              margin: 'auto',
              width: '60vw',
              padding: '3vh',
              marginBottom: '6vw',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              border: '1px dotted gray',
            }}
          >
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
