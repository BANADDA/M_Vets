import { Button, IconButton, Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Organisation", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Ready to Make a Difference?
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Explore our platform to learn more about how we&apos;re transforming
            livestock health through data and AI. Whether you&apos;re a
            veterinarian, researcher, policymaker, or livestock farmer, together
            we can make a meaningful impact on global animal welfare.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button color="white" size="md">
              Explore M-Vet
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography as="a" href="" variant="h6" className="text-gray-900">
            M-Vet
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <a href="https://x.com/">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-twitter text-lg" />
              </IconButton>
            </a>
            <a href="https://youtube.com/">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-youtube text-lg" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
            <a href="https://github.com/">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} A Product <a href="">Of M-Vet</a>.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
