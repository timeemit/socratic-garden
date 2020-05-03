// @flow
import React, { type Node } from 'react';
import Head from 'next/head';

type Props = {
	children?: Node
};

type State = {
	image: number,
	viewed_images: Array<number>,
};

const IMAGES = [
  { 
    image: "brain.bulb.dark.jpeg",
    page_style: {},
    image_style: {},
  },
	{ 
    image: "brain.bulb.light.jpeg",
    page_style: {},
    image_style: {},
  },
  { 
    image: "brain.sword.png",
    page_style: {},
    image_style: {},
  },
	// { 
  //   image: "bulb.blue.dark.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
	// { 
  //   image: "bulb.blue.light.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
	// { 
  //   image: "bulb.red.dark.jpeg",
  //   page_style: {"background-color": "black"},
  //   image_style: {},
  // },
	// { 
  //   image: "bulb.red.light.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
	// { 
  //   image: "hana.0.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
	// { 
  //   image: "hana.1.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
	// { 
  //   image: "neurons.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
	// { 
  //   image: "rising.fireball.png",
  //   page_style: {},
  //   image_style: {},
  // },
	// { 
  //   image: "wired.faceoff.dark.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
  // { 
  //   image: "wired.faceoff.light.jpeg",
  //   page_style: {},
  //   image_style: {},
  // },
];

export default class Prototype extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);
    const image = Prototype.randomImage();
    this.state = {
      image: image,
      viewed_images: [image],
    };
  }

  static imageIndices(): Array<number> {
    return [...Array(IMAGES.length).keys()];
  }

  static randomImage(): number {
    return Prototype.choose(Prototype.imageIndices());
  }

  static choose(candidates: Array<number>): number {
    return candidates[Math.floor(Math.random() * 10) % candidates.length]
  }

  randomDifferentImage(): number {
    const candidates = Prototype.imageIndices().filter((image) => image !== this.state.image);
    return Prototype.choose(candidates);
  }

  unseenImages(): Array<number> {
    return Prototype.imageIndices().filter((image) => !this.state.viewed_images.includes(image));
  }

  onClick = () =>  {
    const candidates = this.unseenImages();
    if (candidates.length === 0) {
      const image = this.randomDifferentImage();
      this.setState({
        image: image,
        viewed_images: [image],
      });
    } else {
      const candidate = Prototype.choose(candidates);
      this.setState({
        image: candidate,
        viewed_images: this.state.viewed_images.concat([candidate]),
      });
    }
  }

	render() {
    const image = IMAGES[this.state.image];
		return (
			<section onClick={this.onClick}>
        <style jsx global>{` body { ${JSON.stringify(image.page_style)} } `}</style>

				<img style={image.image_style} src={`/logos/${image.image}`} />
        {this.props.children}
			</section>
		);
	}
}
