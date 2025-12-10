'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Zap, Shield, Clock, ArrowRight, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.package || !formData.message) {
      alert('Prosím vyplňte všechna povinná pole');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Děkujeme za váš zájem! Brzy se vám ozveme.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      package: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const packages = [
    {
      name: 'Basic',
      price: '4 990 Kč',
      description: 'Ideální pro jednotlivce a malé projekty',
      features: [
        'Jednostránkový web',
        'Responzivní design',
        'Základní SEO optimalizace',
        'Kontaktní formulář',
        'Dodání do 5 pracovních dnů'
      ]
    },
    {
      name: 'Professional',
      price: '9 990 Kč',
      description: 'Pro podnikatele a malé firmy',
      features: [
        'Vícestránkový web (do 5 stránek)',
        'Prémiový design',
        'Pokročilé SEO',
        'Blog/aktuality',
        'Google Analytics',
        'Dodání do 7 pracovních dnů'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Na míru',
      description: 'Komplexní řešení pro firmy',
      features: [
        'Neomezený počet stránek',
        'E-shop integrace',
        'Vlastní funkcionalita',
        'Pokročilá analytika',
        'Prioritní podpora',
        'Individuální časový plán'
      ]
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Vyberte službu',
      description: 'Zvolte balíček, který nejlépe odpovídá vašim potřebám'
    },
    {
      number: '02',
      title: 'Vyplňte formulář',
      description: 'Sdělte nám své požadavky a proveďte platbu'
    },
    {
      number: '03',
      title: 'Vytvoříme váš web',
      description: 'Náš tým vytvoří web přesně podle vašich představ'
    },
    {
      number: '04',
      title: 'Předání webu',
      description: 'Získáte hotový web na hostingu připravený k použití'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rychlé dodání',
      description: 'Váš web bude hotový za pár dní, ne měsíců'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Bez starostí',
      description: 'Postaráme se o vše - od designu po hosting'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexibilní proces',
      description: 'Objednáte online, kdykoliv vám to vyhovuje'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Cenová dostupnost',
      description: 'Kvalitní weby za férové ceny bez skrytých poplatků'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 select-none">
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 0px;
        }
        * {
          scrollbar-width: none;
        }
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
      <header className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo-large.png" alt="FlexiWeb" className="h-6" />
          </div>
          <nav className="hidden md:flex gap-8 text-sm absolute left-1/2 transform -translate-x-1/2">
            <a href="#sluzby" className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer">Služby</a>
            <a href="#jak-to-funguje" className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer">Jak to funguje</a>
            <a href="#objednavka" className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer">Objednávka</a>
          </nav>
          <Button variant="outline" className="border-neutral-700 hover:bg-neutral-800 text-neutral-950 bg-neutral-100 cursor-pointer">
            Kontakt
          </Button>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <img src="/logo-small.png" alt="FlexiWeb" className="h-32 w-32" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Flexibilní výroba webů
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Profesionální webové stránky za pár dní. Bez zbytečných komplikací, 
            s transparentními cenami a možností platby přes Stripe nebo bankovním převodem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
              onClick={() => document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Vybrat službu <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          
          {!hasScrolled && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle"
            >
              <ChevronDown className="w-8 h-8 text-neutral-500" />
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-neutral-900">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proč FlexiWeb?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-neutral-800 border-neutral-700 h-full">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center text-purple-500 mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <CardTitle className="text-neutral-100">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="jak-to-funguje" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Jak to funguje?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="text-6xl font-bold text-neutral-800 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-3 text-neutral-100">{step.title}</h3>
                <p className="text-neutral-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-neutral-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sluzby" className="py-20 px-4 bg-neutral-900">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Naše služby
          </motion.h2>
          <motion.p 
            className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vyberte si balíček, který nejlépe odpovídá vaším potřebám a rozpočtu
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Card 
                  className={`bg-neutral-800 border-neutral-700 relative flex flex-col h-full ${
                    pkg.popular ? 'border-purple-600' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Nejoblíbenější
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-neutral-100">{pkg.name}</CardTitle>
                    <CardDescription className="text-neutral-400">{pkg.description}</CardDescription>
                    <div className="text-4xl font-bold text-neutral-100 mt-4">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-300">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full cursor-pointer ${
                        pkg.popular 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : 'bg-neutral-700 hover:bg-neutral-600 text-white'
                      }`}
                      onClick={() => {
                        setFormData({ ...formData, package: pkg.name });
                        document.getElementById('objednavka')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Vybrat {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="objednavka" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Objednejte si svůj web
          </motion.h2>
          <motion.p 
            className="text-center text-neutral-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vyplňte formulář a my se vám ozveme do 24 hodin
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-neutral-900 border-neutral-800">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-neutral-100">Jméno a příjmení *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-neutral-800 border-neutral-700 focus:border-purple-600 text-neutral-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-neutral-100">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-neutral-800 border-neutral-700 focus:border-purple-600 text-neutral-100"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-neutral-100">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-neutral-800 border-neutral-700 focus:border-purple-600 text-neutral-100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-neutral-100">Firma/IČO</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-neutral-800 border-neutral-700 focus:border-purple-600 text-neutral-100"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package" className="text-neutral-100">Vybraný balíček *</Label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 focus:border-purple-600 focus:outline-none text-neutral-100"
                  >
                    <option value="">Vyberte balíček</option>
                    <option value="Basic">Basic - 4 990 Kč</option>
                    <option value="Professional">Professional - 9 990 Kč</option>
                    <option value="Enterprise">Enterprise - Na míru</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-neutral-100">Popište své požadavky *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Jaký typ webu potřebujete? Jaké funkce chcete zahrnout? Máte nějaké specifické požadavky?"
                    className="bg-neutral-800 border-neutral-700 focus:border-purple-600 text-neutral-100"
                  />
                </div>
                <Button onClick={handleSubmit} className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6 cursor-pointer">
                  Odeslat objednávku
                </Button>
                <p className="text-sm text-neutral-500 text-center">
                  Po odeslání objednávky vás budeme kontaktovat s dalšími informacemi o platbě
                </p>
              </div>
            </CardContent>
                      </Card>
          </motion.div>
        </div>
      </section>

      <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo-large.png" alt="FlexiWeb" className="h-9" />
              </div>
              <p className="text-neutral-400 text-sm">
                Flexibilní výroba webů pro každého. Rychle, kvalitně, cenově dostupně.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-neutral-100">Služby</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#sluzby" className="hover:text-neutral-100 transition-colors">Basic</a></li>
                <li><a href="#sluzby" className="hover:text-neutral-100 transition-colors">Professional</a></li>
                <li><a href="#sluzby" className="hover:text-neutral-100 transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-neutral-100">Společnost</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-neutral-100 transition-colors">O nás</a></li>
                <li><a href="#jak-to-funguje" className="hover:text-neutral-100 transition-colors">Jak to funguje</a></li>
                <li><a href="#" className="hover:text-neutral-100 transition-colors">Časté dotazy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-neutral-100">Kontakt</h3>
              <ul className="space-y-3 text-neutral-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@flexiweb.cz
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +420 777 123 456
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Praha, Česká republika
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} FlexiWeb. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}