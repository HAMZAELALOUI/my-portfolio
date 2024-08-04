import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { skillsData, interestsData, certificationsData } from '../../../data/aboutMeData';
import { TerminalWindow, TerminalContent } from '../../common/Terminal';
import { SkillsGrid, SkillItem, SkillIcon } from '../../../styles/SkillDisplay.styles';
import { useTerminal } from '../../../hooks/useTerminal';
import {
  AboutMeSectionWrapper,
  TerminalLine,
  CommandLine,
  Prompt,
  Command,
  Output
} from '../../../styles/AboutMeSection.styles';

const AboutMeSection = () => {
  const { terminalOutput, terminalRef, addLine, scrollToBottom } = useTerminal();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const executeCommands = async (commands) => {
    for (const cmd of commands) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      addLine(cmd.prompt, cmd.command, cmd.output);
      scrollToBottom();
    }
  };

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
              {skillsData.map((skill, index) => (
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
              {interestsData.map((interest, index) => (
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
              {certificationsData.map((cert, index) => (
                <SkillItem key={index} index={index}>
                  • {cert}
                </SkillItem>
              ))}
            </div>
          )
        },
      ];

      executeCommands(commands);
    }
  }, [inView, addLine, scrollToBottom]);

  return (
    <AboutMeSectionWrapper ref={ref}>
      <TerminalWindow title="About Me - Git Bash">
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