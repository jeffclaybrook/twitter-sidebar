export default function Page({ params }: { params: { item: string }}) {
 return (
  <div>
   <h1 className="text-3xl font-semibold capitalize">{params.item} Page</h1>
  </div>
 )
}