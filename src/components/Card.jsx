const Card = ({ name, description, image }) => {
  return (
    <div>
      <img
        src={`/${image}`}
        alt={name}
        className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <h3 className="mt-1.5 text-lg font-medium text-gray-900">{name}</h3>

        <p className="mt-1.5 line-clamp-6 text-md text-gray-700">
          {description}
        </p>

        <form className="mt-4 flex gap-4">
          <a
            href={`https://wa.me/919360247426?text=${encodeURIComponent(
              `Hi, I'm interested in the product: *${name}*. Details: *${description}*`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 text-center transition hover:scale-105"
          >
            Message
          </a>

          <a
            className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm text-center font-medium text-white transition hover:scale-105"
            href="tel:+919360247426"
          >
            Call
          </a>
        </form>
      </div>
    </div>
  );
};

export default Card;
