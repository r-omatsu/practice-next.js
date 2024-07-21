type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <p>Site layout</p>
      {children}
    </div>
  );
}
