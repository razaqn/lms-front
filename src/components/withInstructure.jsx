import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "./ui/button";

export default function WithInstructureComponent({ setIsWithInstructure }) {
  const handleBackdropClick = () => {
    setIsWithInstructure(false);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseClick = () => {
    setIsWithInstructure(false);
  };

  return (
    <>
      <div className="fixed flex justify-center items-center inset-0 bg-black/80 z-100 h-full" onClick={handleBackdropClick}>
        <Card className="h-[500px] w-lg md:w-2xl bg-neutral-50" onClick={handleCardClick}>
          {/*Image bisa diganti dengan aspect ratio */}
          <div className="w-[90%] h-55 rounded-md mx-auto mt-3 bg-neutral-400"></div>
          <div className="px-4">
            <CardHeader>
              <CardTitle>Abdur Razaq Naufal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium temporibus facilis enim dolor et voluptate aliquid adipisci ut ad pariatur minus, facere quos ex delectus quisquam ab odit ullam? Accusantium earum saepe
                itaque rerum debitis omnis molestias, aut quis qui deserunt dolor quas officia, eum veniam voluptas delectus ad similique.
              </p>
            </CardContent>
          </div>
          <Button className="text-neutral-50 bg-orange-500 w-[90%] mx-auto cursor-pointer" onClick={handleCloseClick}>
            Close
          </Button>
        </Card>
      </div>
    </>
  );
}
