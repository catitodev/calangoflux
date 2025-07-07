import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Coins, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: "AgroFamiliApp",
      description: "Aplicativo completo para gestão de agricultura familiar com automações inteligentes",
      url: "#",
      icon: <Smartphone className="w-6 h-6" />,
      status: "Funcionando",
      badge: "Agricultura",
      color: "text-green-600",
      features: ["App Mobile", "Gestão Agrícola", "Automação", "Dashboard"]
    },
    {
      title: "Baya Nativa",
      description: "Plataforma web para conservação e valorização da biodiversidade nativa",
      url: "#",
      icon: <Globe className="w-6 h-6" />,
      status: "Funcionando", 
      badge: "Sustentabilidade",
      color: "text-primary-600",
      features: ["Website", "Conservação", "Biodiversidade", "Educação"]
    },
    {
      title: "AideaFlux Platform",
      description: "Nossa plataforma principal de automação agentic e criação de agentes inteligentes",
      url: "https://www.aideaflux.xyz",
      icon: <Rocket className="w-6 h-6" />,
      status: "Em Desenvolvimento",
      badge: "Core Platform",
      color: "text-secondary-600",
      features: ["Agentes IA", "Automação", "Dashboard", "API"]
    },
    {
      title: "Letramento Web3",
      description: "Plataforma educacional para democratizar o conhecimento sobre blockchain e Web3",
      url: "#",
      icon: <Coins className="w-6 h-6" />,
      status: "Em Breve",
      badge: "Educação",
      color: "text-accent-600",
      features: ["Blockchain", "Educação", "ReFi", "NFTs", "Empoderamento Digital"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Funcionando": return "success";
      case "Em Desenvolvimento": return "warning";
      case "Em Breve": return "outline";
      default: return "default";
    }
  };

  return (
    <section className="section bg-gradient-to-br from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Rocket className="w-3 h-3 mr-1" />
            Nosso Portfólio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Projetos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Reais
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça os projetos que desenvolvemos - evidência concreta da nossa capacidade técnica e compromisso com impacto positivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${project.color} bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getStatusColor(project.status) as any} className="text-xs">
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.badge}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {project.url !== "#" ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary-50 group-hover:border-primary-500 group-hover:text-primary-600"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visitar Projeto
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full cursor-not-allowed opacity-60"
                      disabled
                    >
                      Em Breve
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quer um projeto como estes?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa equipe tem experiência comprovada em desenvolver soluções completas que geram impacto real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <a 
                  href="https://www.aideaflux.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Acessar Plataforma
                </a>
              </Button>
              <Button
                asChild 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <a href="#contato">
                  Falar Conosco
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-secondary-900 mb-2">4</div>
              <div className="text-primary-600 font-medium">Apps Funcionando</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-secondary-900 mb-2">5</div>
              <div className="text-secondary-600 font-medium">Sites Ativos</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-secondary-900 mb-2">3</div>
              <div className="text-accent-600 font-medium">Plataforma Core</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-secondary-900 mb-2">100%</div>
              <div className="text-green-600 font-medium">Transparência</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;