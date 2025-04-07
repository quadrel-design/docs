import { useRouter } from 'next/router';

export const Logo = () => {
  const { basePath } = useRouter();
  return (
    <img
      src={`${basePath}/logo.png`}
      alt="Logo"
      style={{
        height: '32px',
        maxHeight: '32px',
        width: 'auto',
        verticalAlign: 'middle',
        objectFit: 'contain',
      }}
    />
  );
};
