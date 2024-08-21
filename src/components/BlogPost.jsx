import Link from 'next/link';

export default function BlogPost({ title, date, excerpt }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <p className="text-gray-800 mb-4">{excerpt}</p>
      <Link href="#">
        <div className="text-blue-500 hover:underline">Read more</div>
      </Link>
    </div>
  );
}
