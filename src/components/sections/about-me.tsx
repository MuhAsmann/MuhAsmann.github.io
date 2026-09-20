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
              alt="Fullpose of Sagar"
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
            I&apos;m a passionate,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              Backend Engineer
            </Link>{' '}
            with 3 years of experience building microservices in Go, NestJS, and .NET.
            I currently serve as Head of Backend Development Section at Ganesha Operation,
            where I set technical direction across dozens of services while staying hands-on
            with critical production issues and major features.
          </Typography>

          <Typography>
            My work spans distributed systems, gRPC, RabbitMQ, WebSocket, and asynchronous
            processing. I focus on translating business requirements into maintainable backend
            solutions built with Clean Architecture principles. I&apos;ve delivered backend modules
            for leave management, student progress reporting, marketing and sales data, payments,
            and other operational processes at scale.
          </Typography>

          <Typography>
            Beyond backend, I have hands-on experience with React.js, Vue.js, and Flutter (BLoC),
            which gives me a solid end-to-end understanding of how systems work — from backend
            services and APIs down to the user interface and mobile apps.
          </Typography>

          <Typography>
            Outside of work, I enjoy exploring new technologies, improving my engineering skills,
            and contributing to interesting projects. You can follow my work on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>{' '}
            where I share projects and experiments.
          </Typography>

          <Typography>Finally, some quick bits about me.</Typography>

          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Sc. in Informatics — Universitas Alma Ata (GPA 3.83/4.00)
              </Typography>
              <Typography component="li">
                Go · NestJS · .NET · Microservices
              </Typography>
            </ul>

            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">gRPC · RabbitMQ · WebSocket</Typography>
              <Typography component="li">PostgreSQL · Redis · Docker</Typography>
            </ul>
          </div>

          <Typography>
            I&apos;m open to new opportunities and interesting collaborations. If you&apos;re
            building something ambitious or need a backend engineer who can own systems
            end-to-end, feel free to reach out!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
