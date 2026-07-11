import Script from 'next/script'

interface JsonLdProps {
  data: object
  id?: string
}

/**
 * Reusable component for injecting JSON-LD structured data
 * Use this for schema.org markup on any page
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script
      id={id || `jsonld-${Math.random().toString(36).substr(2, 9)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
