import Head from 'next/head';
import VideoGrid from '../components/VideoGrid';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GoldTube</title>
      </Head>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-3xl font-bold text-gold mb-4">Welcome to GoldTube</h1>
        <Image
          src="https://images.pexels.com/photos/6037741/pexels-photo-6037741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Man in glasses and brown jacket relaxing indoors while smoking. Moody atmosphere."
          width={940}
          height={650}
          className="object-cover h-64 w-full mb-4"
        />
        <VideoGrid />
      </div>
    </div>
  );
}