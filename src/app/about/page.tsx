import React from 'react';
import Image from 'next/image';
import self_portrait from '../../../public/self_portrait.jpg';
import andy from '../../../public/andy.jpg';

const About = () => {
  return (
    <main className="p-3">
      <Image src={self_portrait} alt="self portrait of the artist"></Image>
      <p className="my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit,
        nibh et porttitor sodales, enim augue eleifend ipsum, nec iaculis ligula
        sapien non leo. Suspendisse ornare pharetra ante, sit amet ornare ante
        finibus ut. Maecenas placerat nisi ac odio mattis, eget venenatis lorem
        suscipit. Duis ligula odio, tempus non accumsan consequat, mattis ut
        nibh. Nullam vulputate tempus lectus, nec viverra dolor suscipit eget.
        Pellentesque commodo efficitur massa, tempus fermentum risus aliquam in.
        Aenean ultricies commodo velit, sed sagittis est dapibus eu. Sed dolor
        lacus, hendrerit at tempor quis, cursus id nibh.
      </p>
      <Image src={andy} alt="Andy Dart sitting next to his art piece"></Image>
    </main>
  );
};

export default About;
