import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Sparkles, TreePine, Waves } from 'lucide-react';
import { Badge } from './ui/badge';
import calangoicone from '../assets/imagens/calangoicone.png';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary-100 text-primary-800 border-primary-200">
            <Heart className="w-3 h-3 mr-1" />
            Nossa Origem
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Um{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Chamado Visceral
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto Principal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-secondary-900 mb-6">
                A CalangoFlux não nasceu de um plano de negócios. Nasceu de um chamado visceral.
              </p>
              
              <p>
                De uma urgência silenciosa que foi crescendo entre um pai e uma filha diante de um mundo 
                que parecia cada vez mais desconectado da natureza, da coletividade e do que realmente importa.
              </p>
              
              <p>
                <strong>Pai, 46</strong>, com sua bagagem de superações, resiliências, educação, permacultura, 
                agroecologia, arte, robótica educacional, cultura de software livre, commons, resistência regenerativa...
              </p>
              
              <p>
                <strong>Filha, 16</strong>, com olhos curiosos, visão sistêmica e pensamento crítico aguçado, 
                personalidade autodidata empoderada, sensibilidade artística ímpar, compartilham questionamentos 
                que nutriram para além das capacitações e aprofundamentos experienciais, nutriram um pacto intergeracional.
              </p>
            </div>
          </motion.div>

          {/* Visual/Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full p-8 shadow-2xl"
              >
                <img 
                  src={calangoicone} 
                  alt="CalangoFlux" 
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </motion.div>
              
              {/* Elementos flutuantes */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 bg-primary-500 rounded-full p-3 shadow-lg"
              >
                <Leaf className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-4 bg-secondary-500 rounded-full p-3 shadow-lg"
              >
                <Waves className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Continuação da História */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="prose prose-lg text-gray-700 leading-relaxed mx-auto">
            <p className="text-xl font-medium text-secondary-900 mb-6">
              A CalangoFlux surgiu assim: num abraço entre gerações, num espaço onde a tecnologia não é um fim, mas um caminho possível...
            </p>
            
            <p className="text-lg">
              Uma incrível possibilidade de interlocução contemporânea, para além da reconexão e interconexão, 
              as <strong>multiconexões potencializadoras</strong> em ressignificar sistemas inteiros em fluxos regenerativos - 
              planetas, seres sencientes, humanos, digitais, etéreos.
            </p>
          </div>
        </motion.div>

        {/* Significado do Nome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 text-center mb-8">
            O Nome?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg mb-4"
              >
                <TreePine className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-secondary-900 mb-2">Calango</h4>
                <p className="text-gray-700">
                  Presente em diferentes biomas brasileiros, com sua agilidade, 
                  pés no chão, olhos atentos ao mundo.
                </p>
              </motion.div>
            </div>
            
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg mb-4"
              >
                <Waves className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-secondary-900 mb-2">Flux</h4>
                <p className="text-gray-700">
                  O fluxo da água, das ideias, do tempo, dos processos de aprendizagem, 
                  das dinâmicas sistêmicas.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Essência Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-secondary-900 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Essa criação entre pai e filha é mais que uma empresa ou um projeto.
            </h3>
            
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              É o compromisso de deixar para as gerações futuras, um mundo onde os códigos digitais 
              estejam a serviço da vida, assim como os códigos originários cromossomais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}