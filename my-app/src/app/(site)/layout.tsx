import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  users: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Photo Share",
  description: "Photo Share's Meta description",
};

export default function Layout({ children, users }: Props) {
  return (
    <div>
      <p>Site layout</p>
      {children}
      {users}
      <form action="api/hello" method="post">
        <button type="submit">Request POST Hello API</button>
      </form>
    </div>
  );
}
