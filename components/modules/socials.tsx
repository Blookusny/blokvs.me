import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { socials } from "~/lib/constants";

const SocialsDialog: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[95vw] max-sm:rounded-xl max-w-lg">
        <div className="flex flex-col space-y-2">
          {socials.map((social, index) => (
            <Button
              variant="secondary"
              key={index}
              className="justify-start"
              asChild
            >
              <a href={social.url} target="_blank">
                {social.name}
              </a>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SocialsDialog;
