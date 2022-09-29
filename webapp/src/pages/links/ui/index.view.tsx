import { Heading } from '@/shared/ui'
import classnames from 'classnames'
import { useId } from 'react'
import { links } from '../model/index.model'

export const Links = () => {
  const id = useId()
  return (
    <div className="pages/links">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-12">
            {links.map((linksSection, idx) => (
              <div
                className={classnames(
                  'p-12 md:w-1/2 flex flex-col items-start'
                )}
                key={`${id}-${linksSection.section}-${idx}`}>
                <Heading
                  id={`${id}-${linksSection.section}-${idx}`}
                  headingLevel="h2"
                  css={{
                    color: '$salem',
                    fontWeight: '$semibold',
                    fontSize: 24,
                    marginBottom: 10
                  }}>
                  {linksSection.section}
                </Heading>

                {linksSection.links.map((link) => (
                  <div className="mb-4" key={`${id}-${link.href}`}>
                    <a
                      className="underline decoration-sky-600 hover:decoration-2 whitespace-nowrap"
                      target="blank"
                      href={link.href}>
                      {link.title}
                    </a>
                    <p className="text-sm text-slate-600 pl-1">
                      {link.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
