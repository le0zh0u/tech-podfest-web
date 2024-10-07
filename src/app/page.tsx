import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BrainCircuit, Building2, Earth, Lightbulb } from 'lucide-react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import WhoSection from '@/components/homepage/Who'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Introduce() {
  return (
    <>
      <div className="mx-auto mt-24 max-w-7xl rounded-4xl bg-neutral-950 py-20 sm:py-32">
        <Container className="text-white">
          <FadeIn>
            <h2 className="font-display tracking-wider">
              <span
                className={'mb-6 block font-display text-base font-semibold'}
              >
                Tech PodFest
              </span>
              <span className="sr-only"> - </span>
              <span
                className={
                  'block font-display text-4xl font-medium tracking-tight [text-wrap:balance] sm:text-5xl'
                }
              >
                Unleash Innovation, Connect Minds, Shape Tomorrow
              </span>
            </h2>
            <div className={'mt-6 text-xl'}>
              <p>
                Tech PodFest is a global campaign and event series dedicated to
                celebrating and empowering enthusiasts of technology,
                innovation, and entrepreneurship.
              </p>
              <p>
                It&apos;s a vibrant platform where like-minded individuals come
                together to share ideas, learn from industry leaders, and
                collaborate on groundbreaking projects.
              </p>
              <p>
                Tech PodFest serves as a catalyst for networking, learning, and
                igniting the passion for technological advancement across the
                globe.
              </p>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}

function WhySection() {
  const data = [
    {
      title: 'Stay Informed',
      content:
        'Keep up with the latest trends, technologies, and industry insights.',
      icon: <BrainCircuit className="size-6" />,
    },
    {
      title: 'Network Globally',
      content:
        'Connect with peers, mentors, and leaders from around the world.',
      icon: <Earth className="size-6" />,
    },
    {
      title: 'Foster Innovation',
      content:
        'Collaborate on ideas that can lead to the next big breakthrough.',
      icon: <Lightbulb className="size-6" />,
    },
    {
      title: 'Promote Entrepreneurship',
      content:
        'Equip aspiring entrepreneurs with the knowledge and resources to turn ideas into successful ventures.',
      icon: <Building2 className="size-6" />,
    },
  ]
  return (
    <>
      <SectionIntro
        eyebrow="Why"
        title="Revolutionize Your Future at Tech PodFest"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          In today&apos;s rapidly evolving digital landscape, staying ahead
          means continuously learning and adapting. Tech PodFest addresses this
          need by providing accessible opportunities for individuals.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <FadeIn key={`why-${index}`} className="flex">
              <div className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <span className="bg-background mb-8 flex size-12 items-center justify-center rounded-full">
                  {item.icon}
                </span>
                <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                <p className="text-muted-foreground leading-7">
                  {item.content}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
      <Container>
        <FadeIn className="mt-6 sm:mt-8 lg:mt-10">
          <div className="text-xl text-neutral-600">
            <p>
              By bringing together a diverse community, Tech PodFest accelerates
              personal growth and contributes to the broader advancement of the
              tech industry.
            </p>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function ForWho() {
  return (
    <>
      <SectionIntro
        eyebrow=""
        title="Ignite Your Tech Dreams: Elevate with Tech PodFest!"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          If you&apos;re driven by curiosity and the desire to make an impact in
          the world of tech and entrepreneurship, Tech PodFest is your
          community.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Students and Educators">
              <p>
                Learners and teachers seeking to expand their knowledge and
                networks.
              </p>
            </ListItem>
            <ListItem title="Tech Enthusiasts">
              <p>
                Anyone passionate about technology, from beginners to experts.
              </p>
            </ListItem>
            <ListItem title="Innovators and Creatives">
              <p>
                Individuals eager to explore new ideas and creative solutions.
              </p>
            </ListItem>
            <ListItem title="Entrepreneurs and Startups">
              <p>Those looking to launch, grow, or scale their businesses.</p>
            </ListItem>
            <ListItem title="Professionals and Industry Leaders">
              <p>
                Experts aiming to share insights and discover fresh
                perspectives.
              </p>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="my-24 sm:my-32 md:my-56">
        <FadeIn className="text-center">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Tune In, Level Up! Welcome to Tech PodFest!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            🎧 Tech PodFest: Where Innovation Hits Play. 🎧
          </p>
        </FadeIn>
      </Container>
      {/* <Clients /> */}

      <Introduce />

      <WhySection />

      {/* <CaseStudies caseStudies={caseStudies} />
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}
      <ForWho />
      {/* <ContactSection /> */}
    </>
  )
}
