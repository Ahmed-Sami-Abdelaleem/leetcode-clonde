import Image from "next/image";

const MaskExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Tailwind CSS Mask Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Squircle mask */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Squircle Mask</h2>
          <div className="w-32 h-32 bg-blue-500 mask mask-squircle"></div>
        </div>

        {/* Heart mask */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Heart Mask</h2>
          <div className="w-32 h-32 bg-red-500 mask mask-heart"></div>
        </div>

        {/* Star mask */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Star Mask</h2>
          <div className="w-32 h-32 bg-yellow-500 mask mask-star-2"></div>
        </div>

        {/* Hexagon mask */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Hexagon Mask</h2>
          <div className="w-32 h-32 bg-purple-500 mask mask-hexagon"></div>
        </div>

        {/* Triangle mask */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Triangle Mask</h2>
          <div className="w-32 h-32 bg-green-500 mask mask-triangle"></div>
        </div>

        {/* Circle mask */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Circle Mask</h2>
          <div className="w-32 h-32 bg-indigo-500 mask mask-circle"></div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Masks Applied to Images
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image with heart mask */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Image with Heart Mask</h3>
          <div className="relative w-32 h-32">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
              alt="Heart-shaped mask"
              layout="fill"
              objectFit="cover"
              className="mask mask-heart"
            />
          </div>
        </div>

        {/* Image with star mask */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Image with Star Mask</h3>
          <div className="relative w-32 h-32">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
              alt="Star-shaped mask"
              layout="fill"
              objectFit="cover"
              className="mask mask-star-2"
            />
          </div>
        </div>

        {/* Image with circle mask */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Image with Circle Mask</h3>
          <div className="relative w-32 h-32">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
              alt="Circle mask"
              layout="fill"
              objectFit="cover"
              className="mask mask-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskExamples;
