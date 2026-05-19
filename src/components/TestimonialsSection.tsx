import { motion } from 'framer-motion';
import { Heart, Users, Target, Lightbulb, MessageSquare, Code } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const TeamAndVisionSection = () => {
  const visionPoints = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Nossa Missão",
      content: "Democratizar a automação inteligente para que qualquer pessoa ou empresa possa criar agentes autônomos sem precisar ser especialista em IA.",
      color: "text-[var(--accent-primary)]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nossos Valores",
      content: "Transparência total, inovação ética, impacto positivo e simplicidade. Acreditamos que a tecnologia deve servir às pessoas, não o contrário.",
      color: "text-[var(--accent-secondary)]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Nossa Visão",
      content: "Ser a primeira plataforma brasileira de automação agentic, criando um ecossistema onde humanos e agentes trabalhem em harmonia.",
      color: "text-[var(--accent-primary)]"
    }
  ];

  const teamMembers = [
    {
      name: "Equipe CalangoFlux",
      role: "Fundadores & Desenvolvedores",
      description: "Time pequeno mas apaixonado por criar tecnologia que importa. Estamos construindo o MVP com muito carinho e atenção aos detalhes.",
      avatar: "CF",
      skills: ["IA & Automação", "Design UX/UI", "Desenvolvimento Full-Stack"]
    },
    {
      name: "Comunidade",
      role: "Early Adopters",
      description: "Nossos primeiros usuários que acreditam na visão e estão dispostos a crescer junto conosco nesta jornada de construção.",
      avatar: "CM",
      skills: ["Feedback", "Testes", "Evangelização"]
    },
    {
      name: "Mentores",
      role: "Conselheiros",
      description: "Profissionais experientes que nos orientam em tecnologia, negócios e estratégia para construir algo verdadeiramente útil.",
      avatar: "MT",
      skills: ["Estratégia", "Tecnologia", "Negócios"]
    }
  ];

  return (
    <section className="section bg-[var(--bg-surface)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-[var(--bg-elevated)] text-[var(--text-secondary)]">
            <Heart className="w-3 h-3 mr-1" />
            Nossa Jornada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Construindo com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Propósito
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Somos uma startup em fase inicial, comprometida com a transparência e 
            focada em criar tecnologia que realmente faça diferença.
          </p>
        </motion.div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[var(--bg-primary)]/80 backdrop-blur-sm border border-[var(--bg-elevated)] shadow-soft hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`${point.color} bg-[var(--bg-elevated)]/50 p-4 rounded-xl`}>
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    {point.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {point.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-[var(--text-primary)] mb-12">
            Quem Está Construindo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-[var(--bg-primary)]/80 backdrop-blur-sm border border-[var(--bg-elevated)] shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-[var(--bg-primary)] font-bold text-xl mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--text-primary)]">
                      {member.name}
                    </h4>
                    <p className="text-[var(--accent-primary)] font-medium">
                      {member.role}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-[var(--bg-elevated)] text-[var(--text-muted)]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 border border-[var(--accent-primary)]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Quer fazer parte desta história?
            </h3>
            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              Estamos buscando pessoas que acreditem na nossa visão e queiram construir 
              o futuro da automação agentic junto conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-primary)]/90 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                <Users className="w-4 h-4 mr-2" />
                Juntar-se ao Time
              </button>
              <button className="btn border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 px-8 py-3 rounded-lg font-medium transition-all duration-200">
                <MessageSquare className="w-4 h-4 mr-2" />
                Conversar Conosco
              </button>
            </div>
          </div>
        </motion.div>

        {/* Honesty Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <div className="bg-[var(--bg-primary)] border border-[var(--bg-elevated)] rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[var(--accent-primary)] mr-2" />
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Construindo com Honestidade
              </h3>
            </div>
            <p className="text-[var(--text-secondary)] text-center">
              Acreditamos que startups devem ser transparentes sobre seus estágios. 
              Estamos no início, mas com muito potencial e determinação para crescer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamAndVisionSection;
