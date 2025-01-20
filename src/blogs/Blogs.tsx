import Blog from './Blog';



const data1 = 
   [
    {
      "title": "1",
      "date": "11",
      "content": "111",
      "tags": "1111"
    },
    {
       "title": "2",
      "date": "12",
      "content": "112",
      "tags": "1122"     
    }
  ]


interface Props  {
  title: string;
  date: string;
  content: string[];
  images: string[];
}


export default function Blogs() {
  const d = JSON.parse(data1)
  return (
    <>
      <Blog 
        title={data.title}
        date={data.date}
        content={data.content}
        images={data.images}
        tags={data.tags}
      />
      <Blog
        
      />
    </>
  )
}
