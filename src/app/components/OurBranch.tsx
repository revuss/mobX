import { MapPin, Phone, Mail, Clock4, IndianRupee } from "lucide-react";
import Image from "next/image";

const branches = [
  {
    name: "NABADWIP",
    image: "/hero.jpg",
    status: "Closed",
    time: "10:30:00 To 21:30:00",
    address: "BUROSHIBTALA HINDU SCHOOL NADIA West Bengal",
    phone: "8388990699",
    email: "fuchunips@gmail.com",
    cod: "no",
  },
  {
    name: "REJINAGAR",
    image: "/hero.jpg",
    status: "Closed",
    time: "10:30:00 To 21:30:00",
    address:
      "REJINAGAR SBI BANK REJINAGAR RAILWAY GATE NO 2 MURSHIDABAD West Bengal",
    phone: "9735301214",
    email: "mobixpressrejinagar@gmail.com",
    cod: "no",
  },
  {
    name: "DUNLOP",
    image: "/hero.jpg",
    status: "Closed",
    time: "10:30:00 To 22:00:00",
    address:
      "153/1 B. T. Road,Vikram A. C. Market Near Sonali Cinema Hall Kolkata West Bengal",
    phone: "9831746860",
    email: "dunlopmobixpress@gmail.com",
    cod: "no",
  },
];

const OurBranch = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        <span className="text-red-600 font-bold italic">Our</span>{" "}
        <span className="italic">Branch</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
          >
            <div className="relative">
              <Image
                src={branch.image}
                alt={branch.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                {branch.status}
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-sm font-medium flex items-center justify-center gap-1 py-1">
                <Clock4 className="w-4 h-4" />
                {branch.time}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{branch.name}</h3>
              <div className="flex items-start gap-2 mb-1 text-sm text-gray-700">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <p>{branch.address}</p>
              </div>
              <div className="flex items-center gap-2 mb-1 text-sm text-gray-700">
                <Phone className="w-4 h-4 shrink-0" />
                <a href={`tel:${branch.phone}`} className="text-red-600">
                  {branch.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 mb-1 text-sm text-gray-700">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${branch.email}`} className="text-red-600">
                  {branch.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <IndianRupee className="w-4 h-4 shrink-0" />
                <span>
                  Cash on Delivery :{" "}
                  <span className="font-medium lowercase">{branch.cod}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBranch;
