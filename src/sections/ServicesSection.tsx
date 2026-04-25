'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServiceCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  highlight?: boolean;
  span?: string;
}

const services: ServiceCard[] = [
  {
    id: 'personal',
    number: '01',
    title: 'Personal Banking',
    subtitle: 'Built for everyday life',
    description:
      'Current and savings accounts, home financing, personal takaful, and mobile banking — designed for the modern Kenyan family.',
    features: [
      'Zero-fee current accounts',
      'Murabaha home financing',
      'Mobile & internet banking',
      'Personal Takaful cover',
    ],
    image: '/images/personal-banking.jpg',
    imageAlt: 'Smiling Kenyan woman using mobile banking app on smartphone',
    span: 'lg:col-span-4 lg:row-span-2',
  },
  // {
  //   id: 'corporate',
  //   number: '02',
  //   title: 'Corporate Banking',
  //   subtitle: 'Fuel your growth',
  //   description:
  //     'Trade finance, working capital solutions, and treasury services tailored for SMEs and large enterprises across East Africa.',
  //   features: ['Trade finance & LC', 'Wakala investment deposits', 'Payroll & cash management', 'Project finance'],
  //   image: '/images/corporate-banking.jpg',
  //   imageAlt: 'Business professionals reviewing financial documents in modern Nairobi office',
  //   span: 'lg:col-span-4',
  //   highlight: true,
  // },

  {
  id: 'corporate',
  number: '02',
  title: 'Corporate Banking',
  subtitle: 'Fuel your growth',
  description: 'Trade finance, working capital solutions, and treasury services tailored for SMEs and large enterprises across East Africa.',
  features: ['Trade finance & LC', 'Wakala investment deposits', 'Payroll & cash management', 'Project finance'],
  image: "/images/corporate-banking.jpg",
  imageAlt: 'Business professionals reviewing financial documents in modern Nairobi office',
  span: 'lg:col-span-4',
  highlight: true
},

  {
    id: 'islamic',
    number: '03',
    title: 'Islamic Banking',
    subtitle: 'Finance with faith',
    description:
      'All our products are Sharia-compliant, reviewed by our independent Shariah Supervisory Board — giving you peace of mind.',
    features: ['Mudarabah savings', 'Ijarah asset financing', 'Sukuk investments', 'Zakat calculation tools'],
    image: '/images/islamic-banking.jpg',
    imageAlt: 'Islamic geometric architecture representing Sharia-compliant banking principles',
    span: 'lg:col-span-4',
  },
];

// Container variant with staggered children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// Card variant with TypeScript-safe easing
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut', // string easing ensures TS compatibility
    },
  },
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-bgwarm relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-1">
            <span className="section-num text-primary">01/</span>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4 block">
                Our Services
              </span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-primary">
                Financial
                <br />
                <span className="gold-text">Solutions</span>
                <br />
                For All.
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-primary/60 text-lg leading-relaxed max-w-md">
                Whether you&apos;re saving for your child&apos;s education, growing your business, or investing in your
                future — we have a Sharia-compliant solution for you.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-heading font-bold text-3xl text-primary">17+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Years serving</p>
                </div>
                <div className="w-px h-12 bg-primary/10" />
                <div>
                  <p className="font-heading font-bold text-3xl text-primary">35+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Branch network</p>
                </div>
                <div className="w-px h-12 bg-primary/10" />
                <div>
                  <p className="font-heading font-bold text-3xl text-primary">100%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Shariah compliant</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid with stagger */}
        <motion.div
          className="grid lg:grid-cols-12 gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`service-card ${service.highlight ? 'bg-primary-dark text-white' : 'bg-white'} rounded-5xl overflow-hidden shadow-card lg:col-span-5`}
            >
              <div className="h-72 overflow-hidden">
                <AppImage
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className={`${service.highlight ? 'text-gold' : 'text-gold'} text-[11px] font-black uppercase tracking-widest`}>
                    {service.number}
                  </span>
                  <span className={`${service.highlight ? 'text-white/20' : 'text-primary/30'} text-[10px] font-black uppercase tracking-widest`}>
                    {service.subtitle}
                  </span>
                </div>
                <h3 className={`font-heading ${service.highlight ? 'text-white' : 'text-primary'} text-3xl font-bold tracking-tight`}>
                  {service.title}
                </h3>
                <p className={`${service.highlight ? 'text-white/55' : 'text-primary/55'} leading-relaxed`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${service.highlight ? 'text-white/60' : 'text-primary/70'}`}>
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-2 ${service.highlight ? 'text-gold' : 'text-gold'} text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all`}
                >
                  Learn More <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;