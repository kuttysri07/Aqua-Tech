import Card from "../components/Card";

const Product = () => {
  const productDetails = [
    {
      id: 1,
      name: "Water Lily",
      description:
        "AQUA WATERLILY RO PURIFIER 12L RO + Spun Filter + Pre Carbon Filter + Sediment Filter + Membrane + Post Carbon Filter, 24V 100GPT booster Pump, 24V SMPS Power Supply, Electrical Parts Warranty (1 Year) (Blue).",
      image: "model1.jpg",
    },
    {
      id: 2,
      name: "Aqua Jade",
      description:
        "Aqua Jade RO PURIFIER 10L RO + Spun Filter + Pre Carbon Filter + Sediment Filter + Membrane + Post Carbon Filter, 24V 100GPT booster Pump, 24V SMPS Power Supply, Electrical Parts Warranty (1 Year).",
      image: "model2.png",
    },
    {
      id: 3,
      name: "Aqua Dolphin",
      description:
        "10L RO + Spun Filter + Pre Carbon Filter + Sediment Filter + Membrane + Post Carbon Filter, 24V 100GPT booster Pump, 24V SMPS Power Supply, Electrical Parts Warranty (1 Year).",
      image: "model3.png",
    },
    {
      id: 4,
      name: "Aqua Touch",
      description:
        "12L RO + Spun Filter + Pre Carbon Filter + Sediment Filter + Membrane + Post Carbon Filter, 24V 100GPT booster Pump, 24V SMPS Power Supply, Electrical Parts Warranty (1 Year).",
      image: "model4.png",
    },
    {
      id: 5,
      name: "Aqua XL",
      description:
        "12L RO + Spun Filter + Pre Carbon Filter + Sediment Filter + Membrane + Post Carbon Filter, 24V 100GPT booster Pump, 24V SMPS Power Supply, Electrical Parts Warranty (1 Year).",
      image: "model5.png",
    },
    {
      id: 6,
      name: "Aqua Mars",
      description:
        "10L RO + Spun Filter + Pre Carbon Filter + Sediment Filter + Membrane + Post Carbon Filter, 24V 100GPT booster Pump, 24V SMPS Power Supply, Electrical Parts Warranty (1 Year) (Blue).",
      image: "model6.jpg",
    },
    {
      id: 7,
      name: "50 LPH Commercial RO",
      description:
        "RO PURIFIER 50LPH + 2 Spun Filter + GAC Filter + 4 RO Membrane + Post Carbon Filter, 36V 100GPT Booster Pump, 36V SMPS Power Supply, Electrical Parts Warranty (1 Year).",
      image: "model7.jpg",
    },
    {
      id: 8,
      name: "25 LPH Commercial RO",
      description:
        "RO PURIFIER 25 LPH + 2 Spun Filter + GAC Filter + 2 RO Membrane + Post Carbon Filter, 36V 100GPT Booster Pump, 36V SMPS Power Supply, Electrical Parts Warranty (1 Year).",
      image: "model8.jpg",
    },
    {
      id: 9,
      name: "RO Filter Service Kit",
      description:
        "Complete RO Purifier Filter Service Kit of 80 GPD Membrane Water With All Accessories.",
      image: "model9.webp",
    },
  ];

  return (
    
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-lg font-bold text-blue-500">
           Clean water starts here – find the right purifier for you.
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {productDetails.map((product) => (
              <li key={product.id}>
                <Card
                  name={product.name}
                  description={product.description}
                  image={product.image}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
  
  );
};

export default Product;
