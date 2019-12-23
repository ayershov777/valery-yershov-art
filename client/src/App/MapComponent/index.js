import React from 'react'

export default function MapComponent() {
  return (
    <div
      className="mapouter"
      style={{
        position: 'relative',
        textAlign: 'right',
        height: '500px',
        width: '600px'
      }}
    >
      <div
        className="gmap_canvas"
        style={{
          overflow: 'hidden',
          background: 'none !important',
          height: '500px',
          width: '600px'
        }}
      >
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=760%2010th%20ave%20%234s%2C%20New%20York%2C%20NY%2010019&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://www.couponflat.com"></a>
      </div>
    </div> 
  );
}
