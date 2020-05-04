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
  // {
  //   image: "brain.bulb.dark.jpeg",
  //   page_style: "background-color: rgb(39,27,111)",
  //   header_style: "color: white;",
  //   text_style: "color: white;",
  // },
  {
    image: "brain.bulb.light.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(56,77,108);",
    text_style: "color: black;",
  },
  // {
  //   image: "brain.sword.png",
  //   header_style: "",
  // },
  // {
  //   image: "bulb.blue.dark.jpeg",
  //   page_style: "background-color: black;",
  //   header_style: "color: rgb(51,144,210);",
  //   text_style: "color: white;",
  // },
	{
    image: "bulb.blue.light.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(7,66,144);",
    text_style: "color: rgb(54,54,54);",
  },
  // {
  //   image: "bulb.red.dark.jpeg",
  //   page_style: "background-color: black;",
  //   header_style: "color: rgb(240,112,56);",
  //   text_style: "color: rgb(172,172,172);",
  // },
	{
    image: "bulb.red.light.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(238,87,53);",
    text_style: "color: rgb(65,64,74);",
  },
  {
    image: "hana.0.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(239,122,58);",
    text_style: "color: rgb(75,75,77);",
  },
	{
    image: "hana.1.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(234,58,84);",
    text_style: "color: black;",
  },
	{
    image: "neurons.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(29,66,147);",
    text_style: "color: black;",
  },
	{
    image: "neurons.colored.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(26,69,147);",
    text_style: "color: black;",
  },
	{
    image: "rising.fireball.png",
    page_style: "background-color: white;",
    header_style: "color: rgb(92,67,160);",
    text_style: "color: black;",
  },
	{
    image: "rising.fireball.red.png",
    page_style: "background-color: white;",
    header_style: "color: rgb(54,54,54);",
    text_style: "color: black;",
  },
  // {
  //   image: "wired.faceoff.dark.jpeg",
  //   page_style: "background-color: black;",
  //   header_style: "color: rgb(67,138,80);",
  //   text_style: "color: white;",
  // },
  {
    image: "wired.faceoff.light.jpeg",
    page_style: "background-color: white;",
    header_style: "color: rgb(59,136,117);",
    text_style: "color: black;",
  },
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
        <style jsx global>{` body { ${image.page_style} } body h1 { ${image.header_style} } body :not(h1) { ${image.text_style} } `}</style>
				<img style={{"max-height": "120px"}} className="pure-img centered" src={`/logos/${image.image}`} />
        {this.props.children}
			</section>
		);
	}
}
