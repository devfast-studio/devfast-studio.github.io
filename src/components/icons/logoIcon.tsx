import { SVGProps } from 'react';

export default function LogoIcon(props: SVGProps<SVGSVGElement>) {
  const {
    width = 240,
    height = 100,
    devColor = '#4A5568',
    fastColor = '#ff6600'
  } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 240 100" {...props}>
      <text
        x="10"
        y="65"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill={devColor}
      >
        Dev
      </text>
      <text
        x="85"
        y="65"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill={fastColor}
      >
        Fast
      </text>
      <path
        d="M190 35 L205 50 L190 65 L190 35 M175 35 L190 50 L175 65 L175 35"
        fill={fastColor}
      />
    </svg>
  );
}
