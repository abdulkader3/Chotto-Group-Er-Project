'use client';
import Image from 'next/image';
import { Calculator, CheckCircle, Factory, House, PenTool, Wrench } from 'lucide-react';

export default function ExpertiseSection() {
  const expertiseData = [
    {
      id: 1,
      logo: <House size={35} />,
      title: 'Residential Construction',
      desc: 'We design and build functional, aesthetic, and sustainable living spaces. From modern homes to classic villas — our projects are crafted for comfort and elegance.',
      points: [
        'Creative Interior Design',
        'Luxury Apartments',
        'Housing Complexes',
        'Green Building Solutions',
      ],
      img: '/images/expertise/ImageWithFallback (1).png',
    },
    {
      id: 2,
      logo: <Calculator size={35} />,
      title: 'Commercial Projects',
      desc: 'Business structures designed for efficiency and long-term value. We understand commercial architecture focusing on durability, aesthetics, and cost-effective solutions.',
      points: [
        'Office Buildings',
        'Retail Spaces',
        'Shopping Centers',
        'Corporate Industry Hubs',
      ],
      img: '/images/expertise/ImageWithFallback.png',
    },
    {
      id: 3,
      logo: <Factory size={35} />,
      title: 'Industrial Development',
      desc: 'Heavy-duty and innovative design structures for industry leaders. Our industrial facilities maintain maximum efficiency, technological evolution, and high-performance safety standards.',
      points: [
        'Factory Complexes',
        'Logistics Warehouses',
        'Building Extensions',
        'Green Industry Solutions',
      ],
      img: '/images/expertise/ImageWithFallback (2).png',
    },
    {
      id: 4,
      logo: <Wrench size={35} />,
      title: 'Renovation & Remodeling',
      desc: 'Transforming existing structures into new life. Whether restoring heritage buildings or upgrading modern projects, we bring fresh ideas for every purpose.',
      points: [
        'Building Upgrades',
        'Interior Redesigns',
        'Modern Refurbishment',
        'Historic Restoration',
      ],
      img: '/images/expertise/ImageWithFallback (3).png',
    },
    {
      id: 5,
      logo: <PenTool size={35} />,
      title: 'Design & Build',
      desc: 'One-stop solution for architecture, design, and construction. Our integrated approach ensures perfect coordination, cost-efficiency, and on-time solutions.',
      points: [
        'Architectural Design',
        'Project Management',
        'Planning & Execution',
        'Turnkey Solutions',
      ],
      img: '/images/expertise/ImageWithFallback (4).png',
    },
  ];

  return (
    <section className="py-20 bg-white" id="expertise">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-20">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 w-full">
                
                <p className="text-green-600 bg-lime-700/10 p-1.5 rounded-xl w-fit mb-5" >{item.logo}</p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-5">{item.desc}</p>

                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="text-green-600 w-5 h-5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}