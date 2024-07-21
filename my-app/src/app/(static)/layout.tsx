type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <p>Static layout</p>
      {children}
    </div>
  );
}
