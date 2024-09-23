export default function Layout(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const { children, className = '' } = props;
  return (
    <div className={`container layout ${className}`.trim()}>{children}</div>
  );
}
