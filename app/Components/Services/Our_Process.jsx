'use client';
import { CheckSquare, Lightbulb, HardHat, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const processData = [
    {
      id: 1,
      title: 'Planning',
      desc: 'Initial consultation, site assessment, and project scope definition.',
      icon: <CheckSquare className="w-8 h-8 text-green-600 mx-auto" />,
    },
    {
      id: 2,
      title: 'Design',
      desc: 'Architectural plans, engineering drawings, and material selection.',
      icon: <Lightbulb className="w-8 h-8 text-green-600 mx-auto" />,
    },
    {
      id: 3,
      title: 'Construction',
      desc: 'Skilled execution with quality control and regular progress updates.',
      icon: <HardHat className="w-8 h-8 text-green-600 mx-auto" />,
    },
    {
      id: 4,
      title: 'Handover',
      desc: 'Final inspection, documentation, and project delivery to client.',
      icon: <CheckCircle className="w-8 h-8 text-green-600 mx-auto" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {processData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-gray-200 mb-4">
                {`0${item.id}`}
              </div>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
