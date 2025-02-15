// Home/TestimonialsSection.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function TestimonialsSection() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const testimonials = [
    {
      quote: "Nexus AI has transformed our manufacturing process, increasing efficiency by 200%.",
      author: "Sarah Chen",
      role: "Operations Director, TechCorp",
      image: "/sarah-chen.jpg"
    },
    {
      quote: "These robots give very reliable service and are trained really well. They have helped customers in my store when a lot of my employees were busy.",
      author: "Eekansh Muppasani",
      role: "Chief Officer, Walmart",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQF8PeNTcTX6eg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726893492363?e=1745452800&v=beta&t=X76b8_xBsCKmc270terbNjirfw4P_ITb0um0JZP4phw"
    },
    {
      quote: "Outstanding precision and control. Their robots have revolutionized our assembly line.",
      author: "David Park",
      role: "Production Manager, AutoTech",
      image: "/david-park.jpg"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from industry leaders who've transformed their operations with Nexus AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-gray-50 dark:bg-gray-900 p-8 rounded-xl
                       border border-gray-200 dark:border-gray-800 
                       hover:border-blue-500/50 dark:hover:border-blue-500/50 
                       transition-all duration-300"
            >
              <div className="mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4
                           border-2 border-gray-200 dark:border-gray-700"
                />
                <p className="text-gray-800 dark:text-gray-200 text-lg font-light leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-900 dark:text-white font-medium">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
