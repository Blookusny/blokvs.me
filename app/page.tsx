import { Button } from "~/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { projects } from "~/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import SocialsDialog from "~/components/modules/socials";
import { socials } from "~/lib/constants";
import { ChevronRight } from "lucide-react";
import { ThemeSwitcher } from "~/components/ui/theme-switcher";
import { Suspense } from "react";

interface Song {
  state: string;
  details: string;
  assets: {
    large_image: string;
  };
  type: number;
  sync_id: string;
}

async function fetchSong() {
  // i know that no-cache and revalidate should not be used together, but without them it doesn't work as i want
  const song: Song | "no data" = await fetch(
    `https://api.lanyard.rest/v1/users/964086735422230538`,
    { next: { revalidate: 15 }, cache: "no-cache" }
  )
    .then(async (res) => await res.json())
    .then((data) => {
      if (
        data.data.activities?.length === 0 ||
        !data.data.activities.filter((act: Song) => act.type == 2)[0]
      )
        return "no data";
      else return data.data.activities.filter((act: Song) => act.type == 2)[0];
    })
    .catch((err: Error) => console.error(err));

  return song;
}

export default async function Home() {
  const song = await fetchSong();

  return (
    <>
      <main className="w-[90vw] sm:w-[72vw] md:w-[60vw] lg:w-[40vw] xl:w-[25vw] mt-[35vh] mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="font-semibold text-4xl">blokvs</h1>
          <p className="text-xl font-light text-neutral-700 dark:text-neutral-400">
            A 16 yo student, self-learning young dev, ui fan and figma wizard.
          </p>
          <div className="flex gap-2 items-center">
            <Button asChild>
              <Link href={socials.find((s) => s.name == "discord")?.url ?? ""}>
                Get in touch
              </Link>
            </Button>
            <SocialsDialog>
              <Button variant="outline">Other socials</Button>
            </SocialsDialog>
          </div>
          <div></div>
        </div>

        <div className="mt-4 mb-6 w-[35%] h-px mx-auto bg-neutral-800" />

        {song !== "no data" && (
          <Suspense fallback={<div>Loading...</div>}>
            <section>
              <h3>Currently listening</h3>
              <Link href="/" className="mt-2 flex space-x-4 items-center">
                <Image
                  src={`https://i.scdn.co/image/${song.assets.large_image.slice(8)}`}
                  width={64}
                  height={64}
                  alt="Track cover image"
                  className="rounded-lg"
                  aria-label="Image source: last.fm or genius.com, it depends"
                />
                <div className="max-w-[80%]">
                  <h4 className="truncate">{song.details}</h4>
                  <p className="text-neutral-400 truncate">
                    {song.state.replaceAll(";", ",")}
                  </p>
                </div>
              </Link>
            </section>
          </Suspense>
        )}

        <section className="my-8 space-y-3">
          <h3>Latest projects</h3>
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader className="flex-row space-x-3 items-center">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.type}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" asChild>
                  <Link
                    href={project.website}
                    className="flex items-center space-x-1"
                  >
                    Visit website
                    <ChevronRight />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
      <ThemeSwitcher />
    </>
  );
}
