type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
};

export default function Layout({ children, users }: Props) {
  return (
    <div>
      <p>Site layout</p>
      {children}
      {users}
    </div>
  );
}
