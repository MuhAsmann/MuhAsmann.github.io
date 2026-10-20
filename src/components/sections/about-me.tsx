import Image from 'next/image';

import FullBody from '/public/images/kereta.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={FullBody}
              alt="Fullpose of Muhammad Asman"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>

          <Typography>
            I&apos;m a Full Stack Developer who started out as a backend engineer. My core strength
            is designing and building reliable APIs and microservices in Go, NestJS, and .NET,
            backed by PostgreSQL, Redis, and RabbitMQ.
          </Typography>

          <Typography>
            I&apos;ve also worked on the client side: a React.js dashboard for the SATUSEHAT program,
            Vue.js and Razor interfaces, and a Flutter (BLoC) mobile app. That helps me design
            services that are easy for frontend and mobile apps to consume.
          </Typography>

          <Typography>
            Today I&apos;m Head of Backend Development Section at Ganesha Operation, setting technical
            direction across dozens of microservices and still writing code for critical features.
            I enjoy turning business requirements into maintainable software, end to end.
          </Typography>

          <Typography>Finally, some quick bits about me.</Typography>

          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Bachelor of Computer Science (S.Kom), Universitas Alma Ata
              </Typography>
              <Typography component="li">
                Full Stack Developer, strong backend (Go)
              </Typography>
            </ul>

            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Web and mobile (React.js, Vue.js, Flutter)
              </Typography>
              <Typography component="li">Available for new projects</Typography>
            </ul>
          </div>

          <Typography>
            I&apos;m currently open to freelance opportunities and collaboration. If you&apos;re
            building something interesting or need help with backend systems or
            full-stack applications, feel free to reach out!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
