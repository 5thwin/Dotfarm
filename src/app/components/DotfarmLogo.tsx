import Image from 'next/image';

export default function DotfarmLogo(props: { width?: number, height?: number }) {
  const { width, height } = props
  return <Image
    src="/dotfarm.svg"
    alt="Dotfarm Logo"
    width={width}
    height={height}
    priority
  />
}
