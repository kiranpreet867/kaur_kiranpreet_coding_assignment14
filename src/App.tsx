import React from "react";
import styled from "styled-components";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "UI Component Library",
    description:
      "A reusable React component library created with TypeScript, Storybook, and Styled Components. It includes buttons, cards, images, form controls, and table components.",
    image: "/images/component-library.svg",
    link: "https://github.com/",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "Styled Components",
      "Jest",
    ],
  },
  {
    id: 2,
    title: "Code Quality and CI/CD",
    description:
      "A React project configured with ESLint, Prettier, Husky, automated testing, GitHub Actions, and Docker.",
    image: "/images/cicd-project.svg",
    link: "https://github.com/",
    technologies: [
      "React",
      "GitHub Actions",
      "Docker",
      "ESLint",
      "Prettier",
      "Husky",
    ],
  },
  {
    id: 3,
    title: "Secure PHP Blog",
    description:
      "A secure blog application with user registration, login, session management, role-based access control, and database integration.",
    image: "/images/secure-blog.svg",
    link: "https://github.com/",
    technologies: ["PHP", "MariaDB", "HTML", "CSS", "RBAC"],
  },
  {
    id: 4,
    title: "Flask and Dash Application",
    description:
      "A Python web application using Flask API endpoints and a Dash data visualization interface.",
    image: "/images/python-project.svg",
    link: "https://github.com/",
    technologies: ["Python", "Flask", "Dash", "Pandas", "Pillow"],
  },
];

const resources = [
  {
    id: 1,
    title: "React Documentation",
    icon: "⚛️",
    summary:
      "Official documentation used to understand React components, props, state, and application structure.",
    link: "https://react.dev/",
  },
  {
    id: 2,
    title: "Storybook",
    icon: "📚",
    summary:
      "A development environment used to build, test, and document reusable user interface components.",
    link: "https://storybook.js.org/",
  },
  {
    id: 3,
    title: "Docker Documentation",
    icon: "🐳",
    summary:
      "Documentation used to create production containers and consistently deploy web applications.",
    link: "https://docs.docker.com/",
  },
  {
    id: 4,
    title: "GitHub Actions",
    icon: "🔄",
    summary:
      "A continuous integration service used to automatically format, test, and build projects.",
    link: "https://docs.github.com/en/actions",
  },
];

const Page = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1rem 8%;
  background: #0f172a;
  color: white;
`;

const Navigation = styled.nav`
  display: flex;
  max-width: 1200px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Logo = styled.a`
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavigationLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;

  a {
    color: #e2e8f0;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: #93c5fd;
  }
`;

const Hero = styled.section`
  display: flex;
  min-height: 72vh;
  padding: 6rem 8%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 850px;

  h1 {
    margin: 0 0 1rem;
    font-size: clamp(2.5rem, 7vw, 5rem);
  }

  h2 {
    margin-bottom: 1.5rem;
    color: #93c5fd;
    font-size: clamp(1.3rem, 3vw, 2rem);
  }

  p {
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const ButtonLink = styled.a`
  display: inline-block;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #1d4ed8;
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 5rem 8%;
`;

const AlternateSection = styled.section`
  background: #e2e8f0;
`;

const SectionTitle = styled.h2`
  margin: 0 0 0.75rem;
  color: #0f172a;
  font-size: clamp(2rem, 4vw, 2.8rem);
  text-align: center;
`;

const SectionIntroduction = styled.p`
  max-width: 760px;
  margin: 0 auto 3rem;
  color: #475569;
  line-height: 1.8;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 2rem;
`;

const PortfolioCard = styled.article`
  overflow: hidden;
  border-radius: 14px;
  background: white;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
`;

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;

  h3 {
    margin-top: 0;
    color: #0f172a;
  }

  p {
    color: #475569;
    line-height: 1.7;
  }
`;

const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1rem 0 1.5rem;
  padding: 0;
  list-style: none;

  li {
    padding: 0.4rem 0.7rem;
    border-radius: 20px;
    background: #dbeafe;
    color: #1e40af;
    font-size: 0.82rem;
    font-weight: bold;
  }
`;

const SkillsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const SkillBox = styled.div`
  padding: 2rem;
  border-radius: 14px;
  background: white;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);

  h3 {
    color: #1d4ed8;
  }

  p,
  li {
    color: #475569;
    line-height: 1.8;
  }
`;

const ResourceCard = styled.article`
  padding: 2rem;
  border-radius: 14px;
  background: white;
  text-align: center;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);

  .icon {
    display: block;
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  p {
    color: #475569;
    line-height: 1.7;
  }
`;

const SetupTable = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
  }

  th,
  td {
    padding: 1.25rem;
    border: 1px solid #cbd5e1;
    text-align: left;
    line-height: 1.6;
  }

  th {
    background: #1e3a8a;
    color: white;
  }

  tr:nth-child(even) {
    background: #f1f5f9;
  }
`;

const Footer = styled.footer`
  padding: 2rem;
  background: #0f172a;
  color: #cbd5e1;
  text-align: center;
`;

function App() {
  return (
    <Page>
      <Header>
        <Navigation>
          <Logo href="#home">Kiranpreet Kaur</Logo>

          <NavigationLinks>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#resources">Resources</a>
            <a href="#setup">Developer Setup</a>
          </NavigationLinks>
        </Navigation>
      </Header>

      <main>
        <Hero id="home">
          <HeroContent>
            <h1>Kiranpreet Kaur</h1>
            <h2>Web Development Student</h2>

            <p>
              I create responsive and accessible web applications using modern
              front-end and back-end technologies. This portfolio highlights
              selected coursework completed throughout my program.
            </p>

            <ButtonLink href="#work">View My Work</ButtonLink>
          </HeroContent>
        </Hero>

        <Section id="about">
          <SectionTitle>Basic Information</SectionTitle>

          <SectionIntroduction>
            I am a web development student with experience in React, TypeScript,
            PHP, Python, databases, testing, Docker, and continuous integration.
            I enjoy creating user-friendly applications and learning
            technologies that improve software quality and delivery.
          </SectionIntroduction>
        </Section>

        <AlternateSection id="work">
          <Section>
            <SectionTitle>Work</SectionTitle>

            <SectionIntroduction>
              These projects demonstrate my experience with component
              development, web security, automated testing, and application
              deployment.
            </SectionIntroduction>

            <Grid>
              {projects.map((project) => (
                <PortfolioCard key={project.id}>
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />

                  <CardContent>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <TechnologyList>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </TechnologyList>

                    <ButtonLink
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </ButtonLink>
                  </CardContent>
                </PortfolioCard>
              ))}
            </Grid>
          </Section>
        </AlternateSection>

        <Section id="skills">
          <SectionTitle>Skills</SectionTitle>

          <SectionIntroduction>
            My skills include front-end development, back-end programming,
            database integration, automated testing, and deployment.
          </SectionIntroduction>

          <SkillsLayout>
            <SkillBox>
              <h3>Languages and Frameworks</h3>

              <p>
                I use these technologies to create responsive websites, reusable
                components, secure applications, and data visualization
                projects.
              </p>

              <ul>
                <li>HTML5 and CSS3</li>
                <li>JavaScript and TypeScript</li>
                <li>React and Styled Components</li>
                <li>PHP</li>
                <li>Python, Flask, and Dash</li>
                <li>SQL and MariaDB</li>
              </ul>
            </SkillBox>

            <SkillBox>
              <h3>Tools</h3>

              <p>
                I use development and automation tools to maintain code quality
                and create repeatable deployment workflows.
              </p>

              <ul>
                <li>Visual Studio Code</li>
                <li>Git and GitHub</li>
                <li>GitHub Actions</li>
                <li>Docker and Docker Desktop</li>
                <li>Storybook</li>
                <li>Jest and React Testing Library</li>
                <li>ESLint, Prettier, and Husky</li>
              </ul>
            </SkillBox>
          </SkillsLayout>
        </Section>

        <AlternateSection id="resources">
          <Section>
            <SectionTitle>Resources</SectionTitle>

            <SectionIntroduction>
              These resources support my learning and help me follow modern
              development, testing, and deployment practices.
            </SectionIntroduction>

            <Grid>
              {resources.map((resource) => (
                <ResourceCard key={resource.id}>
                  <span className="icon" aria-hidden="true">
                    {resource.icon}
                  </span>

                  <h3>{resource.title}</h3>
                  <p>{resource.summary}</p>

                  <ButtonLink
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Resource
                  </ButtonLink>
                </ResourceCard>
              ))}
            </Grid>
          </Section>
        </AlternateSection>

        <Section id="setup">
          <SectionTitle>Developer Setup</SectionTitle>

          <SectionIntroduction>
            This is the development environment I prefer when creating and
            testing web applications.
          </SectionIntroduction>

          <SetupTable>
            <table>
              <thead>
                <tr>
                  <th>Setup Area</th>
                  <th>Configuration</th>
                  <th>Purpose</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>VS Code Setup</td>
                  <td>
                    Prettier, ESLint, GitLens, Docker, and Live Server
                    extensions
                  </td>
                  <td>
                    Provides formatting, code-quality feedback, Git support, and
                    container management.
                  </td>
                </tr>

                <tr>
                  <td>Terminal Setup</td>
                  <td>Windows PowerShell and VS Code integrated terminal</td>
                  <td>
                    Used to install packages, run tests, build projects, manage
                    Git, and run Docker commands.
                  </td>
                </tr>

                <tr>
                  <td>Preferred Editor Font</td>
                  <td>Consolas, 16px</td>
                  <td>
                    Provides readable characters and is available by default on
                    Windows.
                  </td>
                </tr>
              </tbody>
            </table>
          </SetupTable>
        </Section>
      </main>

      <Footer>
        <p>
          © {new Date().getFullYear()} Kiranpreet Kaur. Portfolio created with
          React, TypeScript, and Styled Components.
        </p>
      </Footer>
    </Page>
  );
}

export default App;
