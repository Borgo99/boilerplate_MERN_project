import Link from "next/link";
import Button from "../src/components/layout/Button";

export default function NotFound() {
  return (
    //@ts-ignore
    <div errorPage="notfound">
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Button href="/">Return Home</Button>
    </div>
  );
}
