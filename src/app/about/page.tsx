/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import self_portrait from '../../../public/self_portrait.jpg';
import andy from '../../../public/andy.jpg';

const About = () => {
  return (
    <main className="px-3 flex flex-col items-center gap-8 ">
      <Image
        src={self_portrait}
        width={500}
        alt="self portrait of the artist"
      ></Image>
      <p className="xl:mx-24 md:mx-12">
        Hello, little man. Boy I sure heard a bunch about you. See, I was a good
        friend of your Daddy's. We were in that Hanoi pit of hell over five
        years together. Hopefully, you'll never have to experience this
        yourself, but when two men are in a situation like me and your Daddy
        were, for as long as we were, you take on certain responsibilities of
        the other. If it had been me who had not made it, Major Coolidge would
        be talkin' right now to my son Jim. But the way it worked out is I'm
        talkin' to you, Butch. I got somethin' for ya. This watch I got here was
        first purchased by your great-granddaddy. It was bought during the First
        World War in a little general store in Knoxville, Tennessee. It was
        bought by private Doughboy Ernie Coolidge the day he set sail for Paris.
        It was your great-granddaddy's war watch, made by the first company to
        ever make wrist watches. You see, up until then, people just carried
        pocket watches. Your great-granddaddy wore that watch every day he was
        in the war. Then when he had done his duty, he went home to your great-
        grandmother, took the watch off his wrist and put it in an ol' coffee
        can. And in that can it stayed 'til your grandfather Dane Coolidge was
        called upon by his country to go overseas and fight the Germans once
        again. This time they called it World War Two. Your great-granddaddy
        gave it to your granddad for good luck. Unfortunately, Dane's luck
        wasn't as good as his old man's. Your granddad was a Marine and he was
        killed with all the other Marines at the battle of Wake Island. Your
        granddad was facing death and he knew it. None of those boys had any
        illusions about ever leavin' that island alive. So three days before the
        Japanese took the island, your 22-year old grandfather asked a gunner on
        an Air Force transport named Winocki, a man he had never met before in
        his life, to deliver to his infant son, who he had never seen in the
        flesh, his gold watch. Three days later, your grandfather was dead. But
        Winocki kept his word. After the war was over, he paid a visit to your
        grandmother, delivering to your infant father, his Dad's gold watch.
        This watch. This watch was on your Daddy's wrist when he was shot down
        over Hanoi. He was captured and put in a Vietnamese prison camp. Now he
        knew if the gooks ever saw the watch it'd be confiscated. The way your
        Daddy looked at it, that watch was your birthright. And he'd be damned
        if any slopeheads were gonna put their greasy yella hands on his boy's
        birthright. So he hid it in the one place he knew he could hide
        somethin'. His ass. Five long years, he wore this watch up his ass. Then
        when he died of dysentery, he gave me the watch. I hid this
        uncomfortable hunk of metal up my ass for two years. Then, after seven
        years, I was sent home to my family. And now, little man, I give the
        watch to you.
      </p>
      {/* <Image src={andy} alt="Andy Dart sitting next to his art piece"></Image> */}
    </main>
  );
};

export default About;
