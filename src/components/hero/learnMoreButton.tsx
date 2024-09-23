import Link from 'next/link';

export default function LearnMoreButton(props: {
  label: string;
  href?: string;
  className?: string;
}) {
  const { label, href = '', className = '' } = props;

  return (
    <Link
      href={href}
      className={[
        'transition:transform rounded-md px-4 py-[5px]',
        'bg-orange-500 hover:scale-105 text-gray-600',
        className
      ]
        .join(' ')
        .trim()}
    >
      {label}
    </Link>
  );
}
