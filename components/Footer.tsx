import { io } from "next/cache";

export default async function Footer() {
  await io();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          &copy; {new Date().getFullYear()} Samantha Salazar. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}