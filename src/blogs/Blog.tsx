
interface Props  {
  title: string;
  tags: string[];
  date: string;
  content: string[];
  images: string[];
}


export default function Blog({title, date, content, images, tags}: Props) {
  return (
    <>
      <div>
        <div>
          {title}
        </div>
        <div>
          {date}
        </div>
        <div>
          {tags}
        </div>
        <div>
          {content}
        </div>
      </div>
    </>
  )

}
