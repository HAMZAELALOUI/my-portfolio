import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNode, FaLaravel, FaHtml5, FaCss3, FaJava, FaDocker, FaGitAlt,
  FaFootballBall, FaChess, FaPlane
} from 'react-icons/fa';
import {
  SiSpring, SiPhp, SiCsharp, SiFlutter, SiTypescript, SiMysql, SiOracle,
  SiAzuredevops
} from 'react-icons/si';

const AboutMeSectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

const TerminalWindow = styled.div`
  width: 70%;
  max-width: 1600px;
  height: 80vh;
  background-color: rgba(13, 12, 34, 0.25);
  border-radius: 10px;
  padding: 20px;
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
  font-size: 1rem;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(135, 206, 250, 0.5);
  border: 1px solid rgba(135, 206, 250, 0.3);
  margin-right: 20px;
`;

const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(135, 206, 250, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: -20px -20px 20px -20px;
`;

const TerminalTitle = styled.span`
  font-weight: bold;
  color: #F0F6FC;
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: 5px;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const TerminalContent = styled.div`
  height: calc(100% - 50px);
  overflow-y: auto;
`;

const TerminalLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Prompt = styled.span`
  color: #85E89D;
  white-space: nowrap;
  padding: 5px;

`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const Command = styled.span`
  color: #B392F0;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 1s steps(30, end);
`;

const Output = styled.div`
  color: #F0F6FC;
  white-space: pre-wrap;
  margin-top: 5px;
  padding-left: 20px;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
`;

const SkillIcon = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
`;

const AboutMeSection = () => {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const terminalRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const addLine = (prompt, command, output) => {
    setTerminalOutput(prev => [...prev, { prompt, command, output }]);
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNode />, name: 'Node.js' },
    { icon: <SiSpring />, name: 'Spring' },
    { icon: <SiPhp />, name: 'PHP' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiOracle />, name: 'Oracle' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiAzuredevops />, name: 'Azure DevOps' },
  ];

  const interests = [
    { icon: <FaFootballBall />, name: 'Football' },
    { icon: <FaChess />, name: 'Chess' },
    { icon: <FaPlane />, name: 'Travel' },
  ];

  const certifications = [
    'ReactJs, ReactQuery, Supabase, Styled Components (Udemy)',
    'Laravel Course (Udemy)',
    'Programming with JavaScript (Coursera)',
    'Introduction to Java and Object-Oriented Programming (Coursera)',
    'Introduction to Agile Development and Scrum (Coursera)',
    'Introduction to Cloud Computing (Coursera)',
    'Introduction to DevOps (Coursera)',
    'Social skills (Honoris)',
    'Entrepreneurial skills (Honoris)',
  ];

  useEffect(() => {
    if (inView) {
      const commands = [
        { 
          prompt: 'hamza@about:~$', 
          command: 'cat about_me.txt', 
          output: "I'm HamzaEl Aloui, a 5th-year computer engineering student at EMSI in Marrakech. Passionate about programming with solid technical experience, I'm seeking opportunities to apply and expand my software engineering skills in professional environments."
        },
        { 
          prompt: 'hamza@about:~$', 
          command: 'ls skills', 
          output: (
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillItem key={skill.name} index={index}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  {skill.name}
                </SkillItem>
              ))}
            </SkillsGrid>
          )
        },
        {
          prompt: 'hamza@about:~$',
          command: 'ls interests',
          output: (
            <SkillsGrid>
              {interests.map((interest, index) => (
                <SkillItem key={interest.name} index={index}>
                  <SkillIcon>{interest.icon}</SkillIcon>
                  {interest.name}
                </SkillItem>
              ))}
            </SkillsGrid>
          )
        },
        {
          prompt: 'hamza@about:~$',
          command: 'cat certifications.txt',
          output: (
            <div>
              {certifications.map((cert, index) => (
                <SkillItem key={index} index={index}>
                  • {cert}
                </SkillItem>
              ))}
            </div>
          )
        },
      ];

      const executeCommands = async () => {
        for (const cmd of commands) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          addLine(cmd.prompt, cmd.command, cmd.output);
          scrollToBottom();
        }
      };

      executeCommands();
    }
  }, [inView]);

  return (
    <AboutMeSectionWrapper ref={ref}>
      <TerminalWindow>
        <TerminalHeader>
          <TerminalButtons>
            <TerminalButton color="#FF5F56" />
            <TerminalButton color="#FFBD2E" />
            <TerminalButton color="#27C93F" />
          </TerminalButtons>
          <TerminalTitle>About Me - Git Bash</TerminalTitle>
        </TerminalHeader>
        <TerminalContent ref={terminalRef}>
          {terminalOutput.map((line, index) => (
            <TerminalLine key={index}>
              <CommandLine>
                <Prompt>{line.prompt}</Prompt>
                <Command>{line.command}</Command>
              </CommandLine>
              {line.output && <Output>{line.output}</Output>}
            </TerminalLine>
          ))}
        </TerminalContent>
      </TerminalWindow>
    </AboutMeSectionWrapper>
  );
};

export default AboutMeSection;