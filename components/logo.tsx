import { useRouter } from 'next/router';

export const Logo = () => {
  const { basePath } = useRouter();
  return (
    <img
      src={`${basePath}/logo.png`}
      alt="Logo"
      height={32}
      style={{ verticalAlign: 'middle' }}
    />
  );
};
