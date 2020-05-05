const DATA = {
  collections: {
    seaside: {
      cover: {
        photo: "octopus", // this is being used as a work reference, to obtain the first photo.
        description: "Valery Yershov’s “Seaside Collection” is an artistic amalgamation of woodwork, sculpture, and paint. This 3D art collection celebrates the beauty of wildlife in costal regions and coral reefs all around the world."
      },
      works: {
        seahorse: {
          title: "Hippocampus Kuda",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic on wood, plaster, wood, resin",
          year: "2019",
          size: "44\" x 37\" (111cm x 94cm)",
          photos: [ // the photos are ordered by importance, first photo is the most important.
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/seahorse/seahorse.jpg",
              alt: "painting of a seahorse surrounded by a reef"
            },
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/seahorse/seahorse_lowres.jpg",
              alt: "painting of a seahorse surrounded by a reef"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/seaside/seahorse/seahorse.mp4"
          ]
        },
        octopus: {
          title: "Ocean Master",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic on wood, plaster, wood, resin",
          year: "2019",
          size: "48\" x 46\" (122cm x 116cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/octopus/octopus.jpg",
              alt: "painting of an octopus ready to hunt"
            },
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/octopus/octopus_placeholder.jpg",
              alt: "painting of an octopus ready to hunt"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/seaside/octopus/octopus.mp4"
          ]
        },
        chameleon: {
          title: "Coastal Chameleon",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic on wood, wood, resin",
          year: "2019",
          size: "38\" x 37\" (96cm x 94cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/chameleon/chameleon.jpg",
              alt: "painting of a chameleon by the sea"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/seaside/chameleon/chameleon.mp4"
          ]
        },
        fish1: {
          title: "Flowerhorn",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic on wood, plaster, wood, resin",
          year: "2019",
          size: "36\" x 37\" (91cm x 95cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/seaside/fish1/fish1.jpg",
              alt: "painting of a fancy fish swimming in some coral"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/seaside/fish1/fish1.mp4"
          ]
        }//,
        // fish2: {
        //   title: "",
        //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
        //   medium: "",
        //   year: "",
        //   size: "",
        //   photos: [
        //     {
        //       src: "",
        //       alt: ""
        //     }
        //   ]
        // }
      }
    },
    underground: {
      cover: {
        photo: "rhino",
        description: "Ocean levels have risen and the graffiti filled subways of New York City have been flooded—the animals of the African Savannah are roaming the streets. The latest collection of Valery Yershov entitled “Underground Art Collection” comprises works with themes that dares us to imagine a surreal world ravaged by climate change; a world in which all forces of nature have claimed our concrete jungles."
      },
      works: {
        gorilla: {
          title: "Graffiti-Backed Alpha",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic paint on canvas",
          year: "2019",
          size: "37\" x 22\" (94cm x 56cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/gorilla/gorilla.jpg",
              alt: "painting of a gorilla covered in graffiti, sitting in a colorful catacomb"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/underground/gorilla/gorilla.mp4"
          ]
        },
        battle1: {
          title: "Siberian Hunter, Atlantic Prey",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "59\" x 33\" (149cm x 84cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/battle1/battle1.jpg",
              alt: "painting of a tiger hunting an octopus in a flooded subway tunnel"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/underground/battle1/battle1.mp4"
          ]
        },
        // battle2: {
        //   title: "Siberian Encounter",
        //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
        //   medium: "Acrylic paint on wood and canvas, wood, resin",
        //   year: "2019",
        //   size: "48in x 31in (121cm x 79cm)",
        //   photos: [
        //     {
        //       src: "https://valeryyershov.s3.amazonaws.com/collections/underground/battle1/main.jpg",
        //       alt: "painting of a tiger hunting a white octopus in a flooded subway tunnel"
        //     }
        //   ]
        // },
        rhino: {
          title: "Rhino Territory",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "61\" x 46\" (156cm x 116cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/rhino/rhino.jpg",
              alt: "painting of a rhino staring down a vibrant subway tunnel filled with colorful street art"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/underground/rhino/rhino.mp4"
          ]
        },
        dog: {
          title: "Man's Last Friend",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "42\" x 33\" (106cm x 83cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/dog/dog.jpg",
              alt: "painting of an American Pit Bull hanging out in a colorful subway tunnel"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/underground/dog/dog.mp4"
          ]
        },
        shark: {
          title: "Megalodon in the Bronx",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic paint on canvas, wood, resin",
          year: "2019",
          size: "55\" x 35\" (139cm x 88cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/shark/shark.jpg",
              alt: "painting of a great white shark swimming in a flooded subway tunnel"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/underground/shark/shark.mp4"
          ]
        },
        elephant: {
          title: "Elephant Bath",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.",
          medium: "Acrylic paint on wood, resin",
          year: "2019",
          size: "25\" (71cm)",
          photos: [
            {
              src: "https://valeryyershov.s3.amazonaws.com/collections/underground/elephant/elephant.jpg",
              alt: "painting of an elephant swimming in a flooded subway tunnel"
            }
          ],
          videos: [
            "https://valeryyershov.s3.amazonaws.com/collections/underground/elephant/elephant.mp4"
          ]
        },
      }
    }
  }
};

export const seaside = DATA.collections.seaside;
export const underground = DATA.collections.underground;

export const collections = { seaside, underground }

export const frontPage = {
  // slideshow: [
  //   seaside.works.octopus.photos[0],
  //   seaside.works.octopus.photos[1],
  //   seaside.works.seahorse.photos[0],
  //   seaside.works.chameleon.photos[0],
  //   seaside.works.fish1.photos[0],
  //   underground.works.shark.photos[0],
  //   underground.works.rhino.photos[0],
  //   underground.works.dog.photos[0],
  //   underground.works.gorilla.photos[0],
  //   underground.works.elephant.photos[0],
  //   underground.works.battle1.photos[0],
  // ],
  slideshow: [
    {
      main: seaside.works.octopus.photos[0],
      temp: seaside.works.octopus.photos[1]
    }
  ],
  video: {
    src: "https://valeryyershov.s3.amazonaws.com/misc/frontpage.mp4",
    description: 'Watch as Valery deploys his signature technique to develop his work. Each piece is dressed with a beautiful hand crafted frame which is seamlessly merged with a traditional canvas painting. The entire piece is then finished with a brilliant coat of resin, revealing a stunning polished texture.',
  },
  covers: Object.keys(DATA.collections).map(collection => {
    const cover = DATA.collections[collection].cover;
    cover.photo = DATA.collections[collection].works[cover.photo].photos[0];
    cover.title = collection;
    return cover;
  }),
};
