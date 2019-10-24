import React from 'react';

const Quote = ({image, character, quote}) => (
   <figure>
   <img
   src={image}
   alt={character}
   />
   <figcaption>
     <blockquote>
       {quote}
     </blockquote>
     <cite>
       {character}
     </cite>
   </figcaption>
 </figure>
);
export default Quote;