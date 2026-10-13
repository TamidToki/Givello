import ListingDetail from './ListingDetail'

// Pre-render the mock listing ids so the static export (GitHub Pages) works.
export function generateStaticParams() {
  return ['1', '2', '3', '4', '5', '6'].map((id) => ({ id }))
}

export const dynamicParams = false

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  return <ListingDetail params={params} />
}
