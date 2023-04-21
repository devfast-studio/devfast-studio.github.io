interface SocialIconProps {
  link: string;
  Icon: React.FC;
}

export default function SocialIcon({ link, Icon }: SocialIconProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon />
    </a>
  );
}
