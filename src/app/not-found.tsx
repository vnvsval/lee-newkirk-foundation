import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-berry">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
        We couldn&rsquo;t find that page.
      </h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&rsquo;re looking for may have moved. Try the homepage,
        or head straight to Fill the Rooms.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/">Back home</Button>
        <Button href="/fill-the-rooms" variant="outline">
          Fill the Rooms
        </Button>
      </div>
    </Container>
  );
}
