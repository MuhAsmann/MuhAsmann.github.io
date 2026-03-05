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
              Backend-focused Software Engineer
            </Link>{' '}
            who enjoys building reliable and scalable systems. My main focus is backend
            development using Go, designing clean architectures, and building APIs that
            are performant, maintainable, and production-ready. While backend is my
            primary expertise, I&apos;m also comfortable working across the stack when
            needed.
          </Typography>

          <Typography>
            I started my journey as a developer in 2021 and have since worked on
            multiple full stack projects using technologies such as Go, .NET, NestJS,
            Laravel, React, Vue, and Flutter. These experiences helped me understand
            how systems work end-to-end — from backend services and APIs to the user
            interface.
          </Typography>

          <Typography>
            Today, I focus on building backend services with clean architecture,
            efficient database design, and scalable infrastructure. I care deeply about
            writing simple, readable code and designing systems that can grow with the
            product.
          </Typography>

          <Typography>
            Outside of coding, I enjoy exploring new technologies, improving my backend
            engineering skills, and sharing my learning journey. You can follow my work
            on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>{' '}
            where I share projects, experiments, and things I learn along the way.
          </Typography>

          <Typography>Finally, some quick bits about me.</Typography>

          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Informatics / Computer Engineering
              </Typography>
              <Typography component="li">
                Backend-focused engineer (Go)
              </Typography>
            </ul>

            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Full-stack capable</Typography>
              <Typography component="li">Always learning</Typography>
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
