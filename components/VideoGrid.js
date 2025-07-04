import Image from 'next/image';

function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-black p-4">
        <Image
          src="https://images.pexels.com/photos/5977753/pexels-photo-5977753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A woman in a black swimsuit stands under an outdoor shower, set against a wooden wall."
          width={940}
          height={650}
          className="object-cover h-64 w-full mb-4"
        />
        <h2 className="text-xl font-bold text-gold mb-2">Video Title</h2>
        <p className="text-gray-400">Video description</p>
      </div>
      <div className="bg-black p-4">
        <Image
          src="https://images.pexels.com/photos/9944851/pexels-photo-9944851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Male boxer trains in a gym with punching bags, wearing boxing gloves, focused and determined."
          width={940}
          height={650}
          className="object-cover h-64 w-full mb-4"
        />
        <h2 className="text-xl font-bold text-gold mb-2">Video Title</h2>
        <p className="text-gray-400">Video description</p>
      </div>
      <div className="bg-black p-4">
        <Image
          src="https://images.pexels.com/photos/6037741/pexels-photo-6037741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Man in glasses and brown jacket relaxing indoors while smoking. Moody atmosphere."
          width={940}
          height={650}
          className="object-cover h-64 w-full mb-4"
        />
        <h2 className="text-xl font-bold text-gold mb-2">Video Title</h2>
        <p className="text-gray-400">Video description</p>
      </div>
    </div>
  );
}

export default VideoGrid;