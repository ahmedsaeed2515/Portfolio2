"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SkillBar } from "@/components/ui/skill-bar";
import { skills, stats } from "@/data/portfolio";

export function AboutSection() {
  const { t } = useTranslation("common");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("about.title")}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("about.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t("about.description")}
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    className="text-primary"
                  />
                  <p className="text-muted-foreground text-sm mt-2">
                    {t(`about.${stat.key}`)}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              I am currently studying at the Faculty of Science, Cairo
              University, majoring in Computer Science. Over the years, I have
              gained strong experience in Full-Stack Development, working with
              technologies like React, Next.js, Node.js, Express, and MongoDB. I
              have built several large-scale projects that demonstrate my
              ability to design, develop, and deploy complete applications. My
              passion lies in solving real-world problems through clean and
              efficient code.
            </motion.p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t("about.skills")}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t("about.skillsDesc")}
            </p>

            <div className="space-y-8">
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="glassmorphism p-6 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    delay: 1 + categoryIndex * 0.2,
                    duration: 0.6,
                  }}
                >
                  <h4 className="text-lg font-medium text-foreground mb-4">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: 1.2 + categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 0.4,
                        }}
                      >
                        <SkillBar skill={skill.name} level={skill.level} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
